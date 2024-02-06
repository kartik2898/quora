
import "./space.css";
import {Container, Box , Button} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import SpaceCard from "../../Components/Cards/SpaceCard";




function Space(){

    return(<>
    <Container className="space-container-wrapper">
        
        <Grid container spacing={2} className="space-container">
            <Grid xs={8.5} className="space-product-container">
               <Box className="create-disc-space-card">
                    <Box fontSize="large">Welcome to Spaces!</Box>
                    <Box fontSize="small">Follow Spaces to explore your interests on Quora.</Box>
                    <Button variant="outlined">Create a spaces</Button>
                    <Button variant="outlined">Discover spaces</Button>
               </Box>
               <Box className="discover-space-container">
                    <Box fontSize="large" fontWeight="bold">Discover Spaces</Box>
                    <Box>
                        <Box fontWeight={500}>Spaces you might like</Box>
                        <Box>
                            <SpaceCard/>
                        </Box>
                    </Box>
               </Box>
            </Grid>
            <Grid xs={3.5}>

            </Grid>
        </Grid>

    </Container>
    </>)
}

export default Space