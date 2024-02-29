import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import "./Cards.css"
import { RxThickArrowUp } from "react-icons/rx";
import { RxThickArrowDown } from "react-icons/rx";
import { TbMessageCircle } from "react-icons/tb";
import { RiLoopLeftFill } from "react-icons/ri";
import { useContext,useEffect,useState } from "react";
import { UserContext } from '../../contexts/user-context';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from "react-icons/bs";
import postService from '../../service/PostService';
import CommentCard from './commentCard';


function Cards({feed , getFeeds}){
    const {userDetail} = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [commentOpen, setCommentOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [postDetail, setPostDetail] = useState([]);
    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);
    const [likes, setLikes] = useState(feed.likeCount);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const ITEM_HEIGHT = 48;

    const handleCmtOpenandClose = ()=>{
        setCommentOpen(!commentOpen);
    }

    useEffect(()=>{
        if(commentOpen){
            getComments();
        }
        
    },[commentOpen])


    useEffect(()=>{
        if(feed.author?.name){
            setPostDetail(feed)
        }
        else{
            getPostDetail()
        }
    },[feed])

    const getComments = ()=>{
        postService.getComments(feed?._id).then((res)=>{
           
            setComments(res.data.data);
            // console.log(res.data.data);
            // console.log(comments);
        })
    }

    const getPostDetail =()=>{
        postService.getPost(feed._id).then((res)=>{
            setPostDetail(res.data.data)
        });
    };

    const like = ()=>{
        
        if(!upVote && !downVote){
            setUpVote(true);
            setLikes((prev) => prev+1)
            postService.upVote(feed._id).then((res)=>{

            });
        }
        else if(!upVote && downVote){
            setDownVote(false);
            setUpVote(true);
            setLikes((prev) => prev+1)
        }
        else{
            setUpVote(false);
            setLikes((prev) => prev-1)
        }
    }

    const disLike = ()=>{
        
        if(!upVote && !downVote){
            setDownVote(true);
            postService.downVote(feed._id).then((res)=>{

            })
        }
        else if(upVote && !downVote){
            setUpVote(false);
            setDownVote(true);
            setLikes((prev) => prev-1);
        }
        else{
            setDownVote(false)
        }
    }

    const deletePost = () => {
        postService.deletePost(feed._id).then((res) => {
            getFeeds();
           
        })
        handleClose();
    }


    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {postDetail?.author?.profileImage?<img src={postDetail.author.profileImage}/>:(feed?feed:postDetail)?.author?.name?.charAt(0).toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="close">
                      <CloseRoundedIcon />
                    </IconButton>
                }
                title={postDetail?.author?.name}
                subheader={feed?.createdAt}
            />
            <Box sx={{textAlign:"left", padding:"0.5rem 0 0.5rem 1rem" , fontWeight:500}}>
                {feed?.title}
            </Box>
            {
                feed?.content &&<CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {feed?.content}
                    </Typography>
                </CardContent>
            }
            <CardMedia
                component="img"
                height="auto"
                image={feed?.images[0]}
            />
            <Box className="like-dislike-container">
                <Box className="like-dislike-com-container">
                    <Box>
                        <Button startIcon={<RxThickArrowUp color='blue'/>} 
                        className='upvote-btn' 
                        sx={{backgroundColor:"#F7F7F7",color:"#636466"}}
                        onClick={like}
                        >
                            U<span>pvote</span> · {likes}</Button>
                        <Button startIcon={<RxThickArrowDown className={downVote && "red-btn"} />} 
                            className='downvote-btn' 
                            sx={{backgroundColor:"#F7F7F7",color:"#636466"}}
                            onClick={disLike}
                        ></Button>
                    </Box>
                    <IconButton className='comment-btn' onClick={handleCmtOpenandClose}><TbMessageCircle /> <span className='cunt-cmt-shr'>{feed?.commentCount>0?feed.commentCount:""}</span></IconButton>
                    <IconButton className='comment-btn share-btn'><RiLoopLeftFill /> <span className='cunt-cmt-shr'></span></IconButton>
                </Box>
                {userDetail._id==feed.author._id &&
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
                            <MenuItem  onClick={deletePost}>
                                Delete
                            </MenuItem>
                        </Menu>
                    </Box>
                }
            </Box>
            {
                commentOpen && 
                    <CommentCard comments={comments} feed={feed} getComments={getComments}/>
            }
        </Card>
    )
}

export default Cards