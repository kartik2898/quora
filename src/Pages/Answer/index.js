import { Box,Container } from "@mui/material"
import AnswerCard from "../../Components/Cards/AnswerCard"
import Grid from '@mui/material/Unstable_Grid2';
import './Answer.css'
function Answer(){
    return(
        <Container className="Answer-container-wrapper">
            <Grid container spacing={2} className="Answer-container">
                <Grid xs={2.5} className="">
                    <Box>
                        <Box>Questions</Box>
                        <Box>Questions for you</Box>
                        <Box>Answer requests</Box>
                        <Box>Draft</Box>
                    </Box>
                </Grid>
                <Grid xs={6} className="">
                    <AnswerCard/>
                </Grid>
                <Grid xs={3.5}>
                    Advertisement
                </Grid>
            </Grid>
            {/* 
            <Box>
                <Box>Questions for you</Box>
            </Box>
            <Box></Box> */}
        </Container>
    )
}

export default Answer