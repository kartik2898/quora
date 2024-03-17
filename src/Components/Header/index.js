import { useContext, useState } from "react";
import "./Header.css";
import {Container, Box ,Modal} from "@mui/material";
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
import Logout from '@mui/icons-material/Logout';
import { UserContext } from "../../contexts/user-context";
import { ProductFeeds } from "../../contexts/user-context";
import { red } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { useFormik } from 'formik';
import PostModal from "../../Components/Modal/postModal.js";



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

const validationForm = yup.object({
  search:yup.string().trim().required(),
});


function Header(){

  const [value, setValue] = useState(0);
  const [modalOpen, setModelOpen] = useState(false);
  const {userDetail} = useContext(UserContext);
  const navigate = useNavigate();

  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);

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

  const formik = useFormik({
    initialValues: {
      search:"",
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch=(values)=>{
    navigate('/search',{state : {title:values}})
    // navigate('/search')
  }

  const handleLogout = ()=>{
    localStorage.clear();
    navigate('/auth');
    handleClose();
  }
  
  const handleUserProfile = ()=>{
    navigate('/user');
    handleClose();
  }

  return(
  <AppBar position="static">
      <Container maxWidth="xl" className="max-ewd-100vw" >
          <Toolbar disableGutters className="header-Box">
              <Box className="logo-image-container">
                  <Link href="/home" underline="none">
                      <img src={logo} className="Header-logo"></img>
                  </Link>
              </Box>
              <Box>
                  <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" className="header-tab-group min-width">
                    <Tab icon={<HomeOutlinedIcon fontSize="large"/>} aria-label="home" onClick={()=>navigate("/home")} className="miui-tab"/>
                    <Tab icon={<ListAltIcon fontSize="large"/>} aria-label="following" onClick={()=>navigate("/following")} className="miui-tab"/>
                    <Tab icon={<HiOutlinePencilAlt fontSize={34}/>} aria-label="following" onClick={()=>navigate("/answer")} className="miui-tab"/>
                    <Tab icon={<GrGroup fontSize={30}/>} aria-label="following"  onClick={()=>navigate("/spaces")} className="miui-tab"/>
                    <Tab icon={<SlBell fontSize={30}/>} aria-label="following" onClick={()=>navigate("/notifications")} className="miui-tab"/>
                  </Tabs>
              </Box>
              <Box>
                <form onSubmit={formik.handleSubmit}>
                  <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search Quora"
                      inputProps={{ 'aria-label': 'search' }}
                      name="search"
                      value={formik.values.search}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.search && Boolean(formik.errors.search)}
                      helperText={formik.touched.search && formik.errors.search}
                    />
                  </Search>
                </form>
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
                <MenuItem onClick={handleUserProfile}>
                  <Avatar /> <span style={{paddingLeft:"0.7rem"}}>Profile</span>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
            </Menu>
            <Box sx={{ml:2}}>
              <Button variant="contained" className="Add-qus-btn" onClick={handleModelOpen}>A<span>dd question</span></Button>
            </Box>
            <Modal
                open={modalOpen}
                onClose={handleModelClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PostModal handleClose={handleModelClose}/>
            </Modal>
          </Toolbar>
      </Container>
  </AppBar>
  )
}

export default Header

