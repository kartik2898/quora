import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import pfImg from "../../Assets/profileImg.webp"
import Avatar from '@mui/material/Avatar';
import postService from '../../service/PostService';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import "./Cards.css"
import { useContext, useState } from "react";
import { UserContext } from '../../contexts/user-context';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from "react-icons/bs";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';


function CommentCard({ feed, comments, getComments }) {
    const { userDetail } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const ITEM_HEIGHT = 48;
    const open = Boolean(anchorEl);
    const validationCommentSchema = yup.object({
        content: yup.string().trim().required(),
    });

    const formik = useFormik({
        initialValues: {
            content: "",
        },
        validationSchema: validationCommentSchema,
        onSubmit: (values) => {
            handleComment(values)
            
        },
    })

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteComment = (id) => {
        postService.deleteComment(id).then((res) => {
            getComments();
        })
        handleClose();
    }

    const handleComment = (values) => {
        postService.addComments(feed._id, values).then(() => {
            getComments();
        })
    }

    return (
        <>
            <Box className="comment-container-wrapper">
                <Box className="comment-box-container">
                    <Avatar sx={{ bgcolor: red[500] }} >
                        {userDetail?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box className="comment-box">
                        <TextField fullWidth size="small" className='cmt-input'
                            name="content"
                            value={formik.values.content}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.content && Boolean(formik.errors.content)}
                            helperText={formik.touched.content && formik.errors.content}
                        />
                    </Box>
                    <Box className="cmt-btn-wrapper">
                        <Button variant='contained' className='add-cmmt-btn' onClick={formik.handleSubmit}>Add comment</Button>
                    </Box>
                </Box>
                {
                    comments.map((comment, key) => (
                        <Card >
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {feed.author.profileImage ? <img src={feed.author.profileImage} /> : feed.author.name.charAt(0).toUpperCase()}
                                    </Avatar>
                                }
                                title={feed.author.name}
                                subheader={comment.createdAt}
                            />
                            <CardContent className='content-card'>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "start" }}>
                                    {comment.content}
                                </Typography>
                                {
                                    (userDetail._id == comment.author)&&
                                <Box>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <BsThreeDots />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                        },
                                        }}
                                    >
                                        <MenuItem  onClick={() => { deleteComment(comment._id) }}>
                                            Delete
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                }
                            </CardContent>
                        </Card>
                    ))
                }
            </Box>
        </>
    )
}

export default CommentCard