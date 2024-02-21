import { Box, Container, Grid, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import ps from '../../Assets/finance.jpeg'
import bk from '../../Assets/book.jpeg'
import "./groupPage.css"
import Cards from "../../Components/Cards";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import postService from "../../service/PostService";

function GroupPage(){
    const [channelDetail, setChannelDetail] = useState([]);
    const [channelPosts, setChannelPosts] = useState([]);

    const {id} = useParams();
    useEffect(()=>{
        getChannelDetail()
        getChannelPosts()
    },[id])
    console.log(channelDetail);
    const getChannelDetail =()=>{
        postService.getChannel(id).then((res)=>{
            setChannelDetail(res.data.data)
        })
    }
    const getChannelPosts =()=>{
        postService.getChannelPost(id).then((res)=>{
            setChannelPosts(res.data.data);
        })
    }
    return(
        <Container className="group-page-container">
            <Box className="group-det-container-wrapper">
                {channelDetail.map((channelInfo,key)=>(
                    <Box className="group-det-container" >
                        <CardMedia
                            component="img"
                            height="200"
                            image={channelInfo.image}
                            alt="channelImg"
                            className="group-cover-img"
                        />
                        <CardMedia
                            component="img"
                            sx={{width:90}}
                            height="90"
                            image={channelInfo.image}
                            alt="channelImg"
                            className='group-img'
                        />
                        <Box className="group-content-container">
                            <Typography gutterBottom variant="h5" component="div" fontSize={18}>
                                {channelInfo.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontSize={12}>
                                {channelInfo.description}
                            </Typography>
                        </Box>
                    </Box>
                ))};
            </Box>
            <Grid container spacing={2} className="space-post-container">
                <Grid xs={8} className="space-product-container">
                    <Box>Post</Box>
                    {
                        channelPosts.map((posts,key)=>(
                            <Box className="channelpost-container">
                                <Cards feed={posts} key={key}/>
                            </Box>
                        ))
                    }
                </Grid>
                <Grid xs={4} className="space-product-container">
                    Advertisement
                </Grid>
            </Grid>
        </Container>
    )
}
export default GroupPage