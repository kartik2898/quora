import { Box } from "@mui/material";
import { useContext } from "react";
import pfImg from "../../Assets/profileImg.webp"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { UserContext } from "../../contexts/user-context";
import "./user.css"


function User(){

    const {userDetail} = useContext(UserContext);
    console.log(userDetail);
    return(<>
        <Box className="user-container">
            <Box className="user-profile-box">
                <Avatar src={pfImg} sx={{height:120, width:120}}/>
                <Box>
                    <h1 className="user-name">{userDetail.name}</h1>
                </Box>
            </Box>
           
            <Box className="user-profile-detail-box">
                <Box className="user-details-container">
                    <Box fontSize={20} fontWeight={600} className="user-highlights">
                        Credentials and Highlights
                    </Box>
                    <Box className="user-detail-box">
                        <Box>Phone : <span>No number found</span></Box>
                        <Box>Email : {userDetail.email}</Box>
                        <Box>Joined 2024</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>)
}

export default User