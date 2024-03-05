import { useContext, useState } from "react";
import "./Header.css";
import {Container, Box, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { HiOutlinePencilAlt } from "react-icons/hi";
import ListAltIcon from '@mui/icons-material/ListAlt';
import { GrGroup } from "react-icons/gr";
import { SlBell } from "react-icons/sl";
import logo from '../../Assets/quora-logo.png'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { UserContext } from "../../contexts/user-context";
import { red } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      border: "1px solid blue"
    },

    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    border: "0.5px solid grey",
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


function Header(){

  const [value, setValue] = useState(0);
  const {userDetail} = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
  setAnchorEl(null);
  };

  return(
      <AppBar position="static">
          <Container maxWidth="xl" >
              <Toolbar disableGutters className="header-Box">
                  <Box className="logo-image-container">
                      <Link href="#" underline="none">
                          <img src={logo} className="Header-logo"></img>
                      </Link>
                  </Box>
                  <Box>
                      <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" className="header-tab-group">
                          <Tab icon={<HomeOutlinedIcon fontSize="large"/>} aria-label="home" className="kartik"  onClick={()=>navigate("/home")}/>
                          <Tab icon={<ListAltIcon fontSize="large"/>} aria-label="following" onClick={()=>navigate("/following")}/>
                          <Tab icon={<HiOutlinePencilAlt fontSize={34}/>} aria-label="following" onClick={()=>navigate("/answer")}/>
                          <Tab icon={<GrGroup fontSize={30}/>} aria-label="following"  onClick={()=>navigate("/spaces")}/>
                          <Tab icon={<SlBell fontSize={30}/>} aria-label="following" onClick={()=>navigate("/notifications")}/>
                      </Tabs>
                      
                  </Box>
                  <Box>
                      <Search>
                          <SearchIconWrapper>
                              <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                          placeholder="Search Quora"
                          inputProps={{ 'aria-label': 'search' }}
                          />
                      </Search>
                  </Box>
                  <Box sx={{ml:2}} >
                    <Button variant="outlined" className="try-quora-btn">T<span>ry Quora+</span></Button>
                  </Box>
                  <Box>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{ bgcolor: red[500] }}>{userDetail?.name.charAt(0).toUpperCase()}</Avatar>
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                </Menu>
                <Box sx={{ml:2}}>
                  <Button variant="contained" className="Add-qus-btn">A<span>dd question</span></Button>
                </Box>
              </Toolbar>
          </Container>
      </AppBar>
  )
}

export default Header

