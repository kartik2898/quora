import "./modal.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



function SignUpModal({handleClose}){
    return(
        <Box class="Sign-Up-Modal">
            <IconButton onClick={handleClose} sx={{m:0.5}}>
                <CloseRoundedIcon />
            </IconButton>
            <Box class="signUp-form">
                <h3>Sign up</h3>
                <Box>
                    <label htmlFor="name">Name</label>
                    <TextField fullWidth  id="name" size="small" placeholder="What would you like to be called?" sx={{mt:0.5}}/>
                </Box>
                <Box>
                    <label htmlFor="email">Email</label>
                    <TextField fullWidth id="email" size="small" placeholder="Your email" sx={{mt:0.5}}/>
                </Box>
            </Box>
            <Box class="Next">
                <Button variant="contained" sx={{borderRadius:50,backgroundColor:"#96B4FF"}}>Next</Button>
            </Box>
        </Box>
    )
}

export default SignUpModal