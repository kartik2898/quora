import { Box, Container, Typography } from "@mui/material";
import logo from "../../Assets/quora-logo.png";
import { Link } from "react-router-dom";
import "./coomingSoon.css";

function CommingSoon(){
    return(<>
        <Container className="Comming-soon-container">
            <Box>
                <img src={logo} height={50} width={200}/>
            </Box>
           <Typography variant="h3">Coming Soon</Typography>
           <Box fontSize={25}>
                We're working hard to bring you something awesome. Stay tuned!
           </Box>
           <Box class="cmg-soon-h-button">
                <Link to="/home" style={{textDecoration:"none"}}>Go Home</Link>
           </Box>
        </Container>
    </>)
}

export default CommingSoon;