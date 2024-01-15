import {Container, Box, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';


function Header(){
    return(
        <Container className="Header-container-wrapper">
            <Box className="Header-container">
                <Box className="logo-image-container">

                </Box>
                <Box className="nav-bar-wrapper">
                <Link href="#" color="inherit" underline="hover">
                    <HomeIcon fontSize="large" sx={{color:"darkred"}}/>
                </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Header