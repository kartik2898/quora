import "./modal.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function SignUpModal(){
    return(
        <Box class="Sign-Up-Modal">
            <Box class="signUp-form">
                <h3>Sign up</h3>
                <label htmlFor="name">Name</label>
                <TextField fullWidth  id="name" />
                <label htmlFor="email">Email</label>
                <TextField fullWidth id="email" />
            </Box>
            <Box class="Next">
                <Button variant="contained">Next</Button>
            </Box>
        </Box>
    )
}

export default SignUpModal