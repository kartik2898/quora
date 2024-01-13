import {Container, Box, Typography } from "@mui/material"
import bgImg from "../Assets/bgimg.webp"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


function LoginPage(){
    return(
        <>
            <Container>
                <Box>
                    <img src=""></img>
                    <Typography variant="subtitle1">A place to share knowledge and better understand the world</Typography>
                </Box>
                <Box>
                <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
                </Box>
            </Container>
        </>
    )
}

export default LoginPage