import { Container,Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Header from "../../Components/Header";
import SideBar from "../../Components/sidebar";
import Cards from "../../Components/Cards";
import "./Home.css";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Footer from "../../Components/Footer";
import Divider from '@mui/material/Divider';
import { RiQuestionnaireLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxPencil1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import postService from "../../service/PostService";
import { json } from "react-router-dom";



function Home(){
    const {page,setPage} = useState(0);
    const {feeds,setFeeds} = useState([]);

    useEffect(()=>{
        getFeeds();
    },[])

    const getFeeds =()=>{
        postService.getFeeds(page).then((res)=>{
            setFeeds(res.data.data);
        });
        
    }

    return(
        <Container sx={{ flexGrow: 1 }} className="home-container">
            <Grid container spacing={2} className="home-Product-container">
                <Grid xs={12} className="header-container">
                    <Header/> 
                </Grid>
                <Grid xs={2.5} className="sidebar-container"> 
                    <SideBar/>
                    <Box className="sidebar-footer-container">
                        <Footer/>
                    </Box>
                 </Grid>
                <Grid xs={6} className="product-card-container">
                    <Card>
                        <Box className="QNA-Container">
                            <Avatar sx={{ bgcolor: red[500] }} >
                                <img src=''/>
                              
                            </Avatar>
                            <Box className="QNA-Share">
                                What do you want to ask or share?
                            </Box>
                        </Box>
                        <Box className="QNA-option-container">
                            <Button variant="text" className="btn-signUp" startIcon={<RiQuestionnaireLine fontSize={20}/>}>A<span>sk</span></Button>
                            <Divider orientation="vertical" flexItem className="Qna-option-div"/>
                            <Button variant="text" className="btn-signUp" startIcon={<HiOutlinePencilAlt fontSize={20}/>}>A<span>nswer</span></Button>
                            <Divider orientation="vertical" flexItem className="Qna-option-div"/>
                            <Button variant="text" className="btn-signUp" startIcon={<RxPencil1 fontSize={20}/>}>P<span>ost</span></Button>
                        </Box>
                    </Card>
                    {/* {
                        feeds.map(feed=>(
                            <Cards 
                                question={feed.title} 
                                name={feed.author.name}
                                pfImg ={feed.author.profileImage}
                                content={feed.content}
                                psImg ={feed.images}
                                time ={feed.createdAt}
                                key={feed.__id}
                            />
                        ))
                        
                    } */}
                    
                </Grid>
                <Grid xs={3.5} className="Adv-Container"> Adevertisement </Grid>
            </Grid>
        </Container>
    )
}

export default Home