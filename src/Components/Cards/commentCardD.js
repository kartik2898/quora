import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import postService from '../../service/PostService';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import "./Cards.css"
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../contexts/user-context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from "react-icons/bs";



function CommentCardD({ feed, comment, getComments }) {

    const { userDetail } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [commentUser, setCommentUser] = useState([]);

    const ITEM_HEIGHT = 48;
    const open = Boolean(anchorEl);
    
    useEffect(()=>{
        getCommentUserDetail()
    },[])

    const getCommentUserDetail =()=>{
        postService.getCommentUser(comment.author).then((res)=>{
            console.log(res);
            setCommentUser(res.data.data)
        })
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteComment = () => {
        postService.deleteComment(comment._id).then((res) => {
            getComments();
        })
        handleClose();
    }

    return (
        <>
            <Card >
                <CardHeader
                    avatar={
                        // <Avatar src={pfImg}/>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {(commentUser)?commentUser.profileImage:commentUser?.name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={commentUser?.name}
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