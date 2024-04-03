import "./space.css";
import {Container, Box , Button, Modal} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import SpaceCard from "../../Components/Cards/SpaceCard";
import { useEffect, useState } from "react";
import postService from "../../service/PostService";
import SpaceModal from "../../Components/Modal/spaceModal";
import InfiniteScroll from "react-infinite-scroll-component";

function Space(){
    const [channels, setChannels] = useState([]);
    const [pages, setPages] = useState(0);
    const [open, setOpen] = useState(false);
    const [nextPage, setNextpage] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    var limit = 10;

    useEffect(()=>{
        getChannel();
    },[pages])

    const getChannel =()=>{
        postService.getSpace(pages,limit).then((res)=>{
            if(pages==0){
                setChannels(res?.data.data)
            }else{
                let tempChannels = JSON.parse(JSON.stringify(channels))
                tempChannels = [...tempChannels,...res.data.data]
                setChannels(tempChannels)
            }
            if(res.data.results != 10 || res.data?.reults < 10){
                setNextpage(false);
            }
        })
    }

    const fetchMoreData = () => {
        setPages((prev)=>prev+1)
    };

    return(<>
    <Container className="space-container-wrapper">
        
        <Grid container spacing={2} className="space-container">
            <Grid xs={9} className="space-product-container">
               <Box className="create-disc-space-card">
                    <Box fontSize="large">Welcome to Spaces!</Box>
                    <Box fontSize="small">Follow Spaces to explore your interests on Quora.</Box>
                    <Box className="space-btn-container">
                        <Button variant="outlined" className="create-space-btn space-btn" onClick={handleOpen}>C<span>reate a spaces</span></Button>
                        <Button variant="outlined" className="discover-space-btn space-btn">D<span>iscover spaces</span></Button>
                    </Box>
               </Box>
               <Box className="discover-space-container">
                    <Box fontSize="large" fontWeight="bold">Discover Spaces</Box>
                    <Box className="space-card-wrapper">
                        <Box fontWeight={500}>Spaces you might like</Box>
                        <InfiniteScroll
                            dataLength={channels.length}
                            next={fetchMoreData}
                            hasMore={nextPage}
                            loader={<h4>Loading...</h4>}
                        >
                            <Box className="channel-container">
                                {
                                    channels.map((channel,key)=>(
                                        <SpaceCard channel={channel} key={key} />
                                    ))
                                }
                            </Box>
                        </InfiniteScroll>
                    </Box>
               </Box>
            </Grid>
            <Grid xs={3} className="space-Adv-con">
                Advertisement
            </Grid>
        </Grid>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <SpaceModal handleClose={handleClose} getChannel={getChannel}/>
        </Modal>
    </Container>
    </>)
}

export default Space