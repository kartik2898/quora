import { Button, IconButton,Box } from "@mui/material";
import { RxThickArrowDown } from "react-icons/rx";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { HiOutlinePencilAlt } from "react-icons/hi";
import "./AnswerCard.css"


function AnswerCard({question}){
    return(
        <Box className="Answer-card-wrapper">
            <Box className="Answer-ques-container">
                <Box><b>What was your first research experience?</b></Box>
                <IconButton>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Box>
               0 answer
            </Box>
            <Box className="answer-btn-container">
                <Box>
                    <Button variant="outlined" className="try-quora-btn Answer-btn" startIcon={<HiOutlinePencilAlt fontSize={20}/>}>A<span>nswer</span></Button>
                    <Button variant="text" className="follow-pass-btn follow-btn">F<span>ollow • 4</span></Button>
                    <Button variant="text" className="follow-pass-btn pass-btn">Pass</Button>
                </Box>
                <IconButton>
                    <RxThickArrowDown />
                </IconButton>
            </Box> 
        </Box>
    );
};

export default AnswerCard