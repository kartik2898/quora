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
import TextField from '@mui/material/TextField';
import postService from '../../service/PostService';
import { useFormik } from 'formik';
import * as yup from 'yup';



const validationCommentSchema = yup.object({
    content:yup.string().trim().required(),
});
function Cards({feed}){
    const {userDetail} = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [commentOpen, setCommentOpen] = useState(false);
    const [comments, setComments] = useState([]);
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

    const getComments = ()=>{
        postService.getComments(feed._id).then((res)=>{
           
            setComments(res.data.data);
            // console.log(res.data.data);
            // console.log(comments);
        })
    }

    
    const formik = useFormik({
        initialValues: {
            content:"",
        },
        validationSchema: validationCommentSchema,
        onSubmit: (values) => {
            handleComment(values)
        },
    })

    const handleComment = (values)=>{
        postService.addComments(values.content).then(()=>{
            getComments();
        })
    }

  
    return(
        <Card >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {feed.author.profileImage?<img src={feed.author.profileImage}/>:feed.author.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="close">
                      <CloseRoundedIcon />
                    </IconButton>
                }
                title={feed.author.name}
                subheader={feed.createdAt}
            />
            <Box sx={{textAlign:"left", padding:"0.5rem 0 0.5rem 1rem" , fontWeight:500}}>
                {feed.title}
            </Box>
            {
                feed.content &&<CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {feed.content}
                    </Typography>
                </CardContent>
            }
            <CardMedia
                component="img"
                height="auto"
                image={feed.images[0]}
            />
            <Box className="like-dislike-container">
                <Box className="like-dislike-com-container">
                    <Box>
                        <Button startIcon={<RxThickArrowUp color='blue'/>} className='upvote-btn' sx={{backgroundColor:"#F7F7F7",color:"#636466"}}>U<span>pvote</span> · {123}</Button>
                        <Button startIcon={<RxThickArrowDown />} className='downvote-btn' sx={{backgroundColor:"#F7F7F7",color:"#636466"}}></Button>
                    </Box>
                    <IconButton className='comment-btn' onClick={handleCmtOpenandClose}><TbMessageCircle /> <span className='cunt-cmt-shr'>{feed.commentCount>0?feed.commentCount:""}</span></IconButton>
                    <IconButton className='comment-btn share-btn'><RiLoopLeftFill /> <span className='cunt-cmt-shr'></span></IconButton>
                </Box>
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
                        <MenuItem  onClick={handleClose}>
                            Delete
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
            {
                commentOpen &&<Box className="comment-container-wrapper">
                    <Box className="comment-box-container">
                        <Avatar sx={{ bgcolor: red[500] }} >
                            {userDetail?.name.charAt(0).toUpperCase()}  
                        </Avatar>
                        <Box className="comment-box">
                            <TextField fullWidth size="small" className='cmt-input'
                                name="question"
                                value={formik.values.content}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.content && Boolean(formik.errors.content)}
                                helperText={formik.touched.content && formik.errors.content}
                            />
                        </Box>
                        <Button variant='contained' className='add-cmmt-btn'onClick={formik.handleSubmit}>Add comment</Button>
                    </Box>
                        {
                            comments.map((comment,key)=>(
                            <Card key={key}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {feed.author.profileImage?<img src={feed.author.profileImage}/>:feed.author.name.charAt(0).toUpperCase()}
                                        </Avatar>
                                    }
                                    title={feed.author.name}
                                    subheader={comment.createdAt}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{textAlign:"start"}}>
                                        {comment.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                            ))  
                        }
                </Box>
            }
        </Card>
    )
}

export default Cards