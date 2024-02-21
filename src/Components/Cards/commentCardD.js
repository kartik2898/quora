import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import pfImg from "../../Assets/profileImg.webp";
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


function CommentCardD({ feed, comment, getComments }) {

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

    const deleteComment = () => {
        debugger;
        postService.deleteComment(comment._id).then((res) => {
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
            <Card >
                <CardHeader
                    avatar={
                        <Avatar src={pfImg}/>
                        // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //     {(userDetail._id == comment.author) ? userDetail?.name.charAt(0).toUpperCase():<img src={pfImg} />  }
                        // </Avatar>
                    }
                    title={(userDetail._id == comment.author)? userDetail?.name :""}
                    subheader={comment.createdAt}
                    sx={{padding:"0.3rem"}}
                />
                <CardContent className='content-card'>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: "start"}}>
                        {comment.content}
                    </Typography>
                    {
                        (userDetail._id == comment.author) &&
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
                                <MenuItem onClick={deleteComment}>
                                    Delete
                                </MenuItem>
                            </Menu>
                        </Box>
                    }
                </CardContent>
            </Card>
        </>
    )
}
export default CommentCardD