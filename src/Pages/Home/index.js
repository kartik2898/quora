import { Container,Box,Modal } from "@mui/material";
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
import { useEffect, useState, useContext } from "react";
import PostModal from "../../Components/Modal/postModal.js";
import { UserContext } from '../../contexts/user-context';
import InfiniteScroll from "react-infinite-scroll-component";

function Home(){
    // const [page,setPage] = useState(0);
    // const [feeds,setFeeds] = useState([]);
    const [open, setOpen] = useState(false);
    // const [nextPage, setNextpage] = useState(true);
    const [selectedFeed, setSelectedFeed] = useState(null)
    const {userDetail,getFeeds,feeds,page,setPage,nextPage} = useContext(UserContext);
    const handleOpen = () => setOpen(true);

    const handleClose = (isDataUpdated=false) => {
        if(isDataUpdated){
            setPage(0)
            scrollToTop();
        }
        setOpen(false);
        setSelectedFeed(null);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleEdit = (feed) => {
        setSelectedFeed(feed);
        handleOpen();
        
    }


    const fetchMoreData = () => {
        setPage((prev)=>prev+1);
    };

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
                <Grid xs={5.5} className="product-card-container">
                    <Card>
                        <Box className="QNA-Container">
                            <Avatar sx={{ bgcolor: red[500] }} >
                                {userDetail?.name.charAt(0).toUpperCase()} 
                            </Avatar>
                            <Box className="QNA-Share" onClick={handleOpen}>
                                What do you want to ask or share?
                            </Box>
                        </Box>
                        <Box className="QNA-option-container">
                            <Button variant="text" className="btn-signUp" startIcon={<RiQuestionnaireLine fontSize={20}/>}>A<span>sk</span></Button>
                            <Divider orientation="vertical" flexItem className="Qna-option-div"/>
                            <Button variant="text" className="btn-signUp" startIcon={<HiOutlinePencilAlt fontSize={20}/>}>A<span>nswer</span></Button>
                            <Divider orientation="vertical" flexItem className="Qna-option-div"/>
                            <Button variant="text" className="btn-signUp" startIcon={<RxPencil1 fontSize={20}/>} onClick={handleOpen}>P<span>ost</span></Button>
                        </Box>
                    </Card>
                    <InfiniteScroll
                        dataLength={feeds.length}
                        next={fetchMoreData}
                        hasMore={nextPage}
                        loader={<h4>Loading...</h4>}
                    >
                        {
                            feeds.map((feed,key)=>(
                                <Cards 
                                    feed={feed}
                                    key={key}
                                    getFeeds = {getFeeds}
                                    handleEdit = {handleEdit}
                                />
                            ))  
                        }
                    </InfiniteScroll>
                </Grid>
                <Grid xs={4} className="Adv-Container"> Advertisement </Grid>
                
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PostModal handleClose={handleClose} getFeeds={getFeeds} feed={selectedFeed} idx={1}/>
            </Modal>
        </Container>
    )
}

export default Home