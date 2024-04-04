import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import "./groupPage.css"
import Cards from "../../Components/Cards";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import postService from "../../service/PostService";
import { FaInstagram } from "react-icons/fa6";
import adv1 from "../../Assets/Adv1.png"
import adv2 from "../../Assets/Adv2.png"
import adv3 from "../../Assets/Adv3.png"


function GroupPage(){
    const [channelDetail, setChannelDetail] = useState([]);
    const [channelPosts, setChannelPosts] = useState([]);
    const [follow, setFollow] = useState(false);
  

    const {id} = useParams();
    useEffect(()=>{
        getChannelDetail()
        getChannelPosts()
    },[id])
    
    const getChannelDetail =()=>{
        postService.getChannel(id).then((res)=>{
            setChannelDetail(res.data.data)
        })
    }
    const getChannelPosts =()=>{
        postService.getChannelPost(id).then((res)=>{
            const data = res.data.data;
            let channelPost = data.filter((data)=> data != null);
            setChannelPosts(channelPost);
        })
    }

    const follows =()=>{
        postService.follow(id).then((res)=>{
        })
    }
    const unfollows =()=>{
        postService.unfollow(id).then((res)=>{ 
        })
    }


    const followAndUnfollow = ()=>{
        if(!follow){
            follows()
        }
        else{
            unfollows()
        }
        setFollow(!follow);
    }
    

    return(
        <Container className="group-page-container">
            <Box className="group-det-container-wrapper">
                    <Box className="group-det-container" >
                        <CardMedia
                            component="img"
                            height="200"
                            image={channelDetail.image}
                            alt="channelImg"
                            className="group-cover-img"
                        />
                        <CardMedia
                            component="img"
                            sx={{width:90}}
                            height="90"
                            image={channelDetail.image}
                            alt="channelImg"
                            className='group-img'
                        />
                        <Box className="group-content-container">
                            <Box>
                                <Typography gutterBottom variant="h5" component="div" fontSize={18}>
                                    {channelDetail.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontSize={12}>
                                    {channelDetail.description}
                                </Typography>
                            </Box>
                            <Box className="channel-follow-btn">
                                <Button startIcon={<FaInstagram />} className={`${follow?"follow-btn" : "follow-btn-yellow"}`} onClick={followAndUnfollow}>{follow?("following"):("follow space")}</Button>
                            </Box>
                        </Box>
                    </Box>
            </Box>
            <Grid container spacing={2} className="space-post-container">
                <Grid xs={8.5} className="space-product-container">
                    <Box>Post</Box>
                    {
                        channelPosts.map((post,key)=>(
                            <Box className="channelpost-container">
                                <Cards feed={post} key={key}/>
                            </Box>
                        ))
                    }
                </Grid>
                <Grid xs={3.5} className="space-grp-Adv-container">
                    Advertisement
                    <Box className="adv-img-container">
                        <img src={adv1}/>
                        <img src={adv2}/>
                        <img src={adv3}/>
                        <img src={adv2}/>
                        <img src={adv1}/>
                        <img src={adv3}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default GroupPage