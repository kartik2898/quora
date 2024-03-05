import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import sport from '../../Assets/sports.jpeg'
import science from '../../Assets/science.jpeg'
import philosophy from '../../Assets/philosophy.jpeg'
import marketing from '../../Assets/marketing.jpeg'
import finance from '../../Assets/finance.jpeg'
import fashion from '../../Assets/fashion and style.jpeg'
import book from '../../Assets/book.jpeg'
import tech from '../../Assets/Technology.jpeg'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import './Sidebar.css';
import postService from '../../service/PostService';
import { useNavigate } from "react-router-dom";
 
function SideBar(){
    const [channels, setChannels] = useState([]);
    const [pages, setPages] = useState(0);
    const navigate = useNavigate();
   

    useEffect(()=>{
        getChannel();
    },[])

    const getChannel =()=>{
        postService.getSpace(pages).then((res)=>{
            console.log(res)
            setChannels(res?.data.data)
        })
    }

    // const handleChanneluserId = (channel_id)=>{
    //     navigate(`/group/${channel_id}`);
    // }

    const createSpaceData = [
        {
        name:"Sports",
        img:sport,
        },
        {
        name:"Marketing",
        img: marketing,
        },
        {
        name:"Finance",
        img:finance,
        },
        {
        name:"Philosophy",
        img:philosophy,
        },
        {
        name:"Fashion and Style",
        img:fashion,
        },
        {
        name:"Books",
        img:book,
        },
        {
        name:"Science",
        img:science,
        },
        {
        name:"Technology",
        img:tech,
        },
    ]


    return(
        <Box sx={{ display: 'flex',flexDirection: "column"}} className="sidebarcontainer">   
            <Box className="Create-space">
                <AddRoundedIcon />
                <Typography>Create Space</Typography>
            </Box>
            <Divider />
            <List className='topics'>
            {channels.map((channel, index) => (
                <ListItem key={index} disablePadding onClick={()=>navigate(`/group/${channel._id}`)}>
                <ListItemButton className='channel-name-btn-wrapper'>
                    <ListItemIcon className='list-item-icon'>
                        <img src={channel.image}/>
                    </ListItemIcon>
                    <ListItemText primary={channel.name}/>
                </ListItemButton>
                </ListItem>
            ))}
            </List>    
        </Box>
    );
};

export default SideBar