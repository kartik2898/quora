import {Container, Box, Typography } from "@mui/material"
import bgImg from "../Assets/bgimg.webp"
import logo from "../Assets/quora-logo.png"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import gI from '../Assets/googleImg.png'
import facbookI from '../Assets/Facebook-f_Logo-Blue-Logo.wine.svg'
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './login.css'
import Footer from "../Components/Footer/index.js"


function LoginPage(){
    return(
        <>
            <Container className="login-Layout">
                <Box className="login-container-wrapper">
                    <Box className="login-logo-container">
                        <img src={logo}></img>
                        <Typography variant="h6">A place to share knowledge and better understand the world</Typography>
                    </Box>
                    <Box className="form-container-wrapper">
                        <Box className="login-form-container">
                            <p><b>Login</b></p>
                            <TextField id="outlined-basic" placeholder="Your email" size="small" variant="outlined" />
                            
                            <TextField
                                id="outlined-password-input"
                                type="password"
                                size="small"
                                autoComplete="current-password"
                                placeholder="Your password"
                            />
                           
                            <Box className="frgt-lgn-btn">
                                <Link>Forgot Password?</Link>
                                <Button variant="contained"size="small">Login</Button>
                            </Box>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box className="signUp-email-container">

                            <Box className="TermsAndCondition">
                                By continuing you indicate that you agree to Quora's <Link href="">Terms of Service</Link> and <Link href="">Privacy Policy</Link>.
                            </Box>
                            <Button variant="outlined"sx={{ width: 290 }} startIcon={<img className="gImg" src={gI}/>}>
                                Continue with Google
                            </Button>
                            <Button variant="outlined"sx={{ width: 290 }} startIcon={<img className="gImg" src={facbookI}/>}>
                                Continue with Facebook
                            </Button>
                           
                            <Button variant="text" className="btn-signUp">Sign up with mail</Button>
                        </Box>
                    </Box>
                    <Box className="language">
                        <Link href="#" sx={{fontSize:20}}>हिन्दी <ArrowForwardIosIcon fontSize="small"/></Link>
                        <Link href="#" sx={{fontSize:20}}>मराठी <ArrowForwardIosIcon fontSize="small"/></Link>
                    </Box>
                    <Footer/>
                </Box>
            </Container>
        </>
    )
}

export default LoginPage