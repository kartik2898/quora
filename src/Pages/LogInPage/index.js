import React,{useState} from "react";
import {Container, Box, Typography,Modal } from "@mui/material"
import logo from "../../Assets/quora-logo.png"
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import gI from '../../Assets/googleImg.png'
import facbookI from '../../Assets/Facebook-f_Logo-Blue-Logo.wine.svg'
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './login.css'
import Footer from "../../Components/Footer/index.js"
import SignUpModal from "../../Components/Modal/index.js";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";
import AuthService from "../../service/AuthService.js";
import { useNavigate } from "react-router-dom";



const validationLoginSchema = yup.object({
    email:yup.string().email("The email address you entered is not valid.").required("email is required"),
    password:yup.string().min(5, 'Password should be of minimum 5 characters length').required('Password is required').trim()
});

function LoginPage(){
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationLoginSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            handleLogin(values)
        },
    })

    const handleLogin = (values) => {
        AuthService.login(values.email, values.password).then((res) => {
            localStorage.setItem('token', res?.data?.token)
            setTimeout(() => {
                // use navigate hook
                navigate('/home');
            }, 100);
        })
    }


    return(
        <>
            <Container className="login-Layout">
                <Box className="login-container-wrapper">
                    <Box className="login-logo-container">
                        <img src={logo}></img>
                        <Typography variant="h6" fontSize={15} className="main-heading" >A place to share knowledge and better understand the world</Typography>
                    </Box>
                    <Box className="form-container-wrapper">
                        <Box className="login-form-container">
                            <Box className="login-heading">
                                <p>Login</p>
                            </Box>
                            <Box className="email">
                                <label>Email</label>
                                <TextField 
                                    id="outlined-basic"
                                    placeholder="Your email" 
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}      
                                />
                            </Box>
                            <Box className="password">
                                <label>Password</label>
                                <TextField
                                    fullWidth
                                    id="outlined-password-input"
                                    type="password"
                                    size="small"
                                    autoComplete="current-password"
                                    placeholder="Your password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Box>
                           
                            <Box className="frgt-lgn-btn">
                                <Link href="javascript: void(0)">Forgot Password?</Link>
                                
                                <Button variant="contained" 
                                    sx={{borderRadius:50,backgroundColor:"#96B4FF"}} 
                                    type="button"
                                    onClick={formik.handleSubmit}
                                > 
                                    Login
                                </Button>
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
                            <Button  variant="outlined"sx={{ width: 290 }} startIcon={<img className="gImg" src={facbookI}/>}>
                                Continue with Facebook
                            </Button>

                            <Button variant="text" className="btn-signUp" onClick={handleOpen}>S<span>ign up with email</span>
                            </Button>
                        </Box>
                    </Box>
                    <Box className="language">
                        <Link href="javascript: void(0)" sx={{fontSize:15}}>हिन्दी <ArrowForwardIosIcon fontSize="extra small"/></Link>
                        <Link href="javascript: void(0)" sx={{fontSize:15}}>मराठी <ArrowForwardIosIcon fontSize="extra small"/></Link>
                    </Box>
                    <Footer/>
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <SignUpModal handleClose={handleClose}/>
                        </Modal>
                    </div>
                   
                </Box>
            </Container>
        </>
    )
}
export default LoginPage
