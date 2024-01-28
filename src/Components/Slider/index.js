import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
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
import './Slider.css';
import Footer from '../Footer';
import { width } from '@mui/system';
 
function Slider(){
    const drawerWidth = 240;

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
        <Box sx={{ display: 'flex'}}>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <box className="Create-space">
                    <AddRoundedIcon />
                    <Typography>Create space</Typography>
                </box>
                <Divider />
                <List>
                {createSpaceData.map((text, index) => (
                    <ListItem key={text.name} disablePadding>
                    <ListItemButton>
                        <ListItemIcon className='list-item-icon'>
                            <img src={text.img}/>
                        </ListItemIcon>
                        <ListItemText primary={text.name} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
                <Divider/>
                <Box className="footer-container">
                    <Footer/>
                </Box>
                
            </Drawer> 
        </Box>
    );
};

export default Slider