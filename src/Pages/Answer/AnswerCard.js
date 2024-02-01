import { Button, Icon, IconButton } from "@mui/material";
import { RxThickArrowDown } from "react-icons/rx";


function AnswerCard(){
    return(
        <Box>
            <Box>
                <Box>{question}</Box>
                <IconButton>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Box></Box>
            <Box>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </Box>
            <IconButton>
                <RxThickArrowDown />
            </IconButton>
        </Box>
    );
};

export default AnswerCard