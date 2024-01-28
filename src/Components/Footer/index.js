import {Box, Link} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./Footer.css";

const info = ["About","Careers"," Privacy","Terms","Contact","Languages","Your Ad Choices","Press"];

function Footer(){
    return(
        <Box className="footer-container">
            
                {info.map((e,i)=>(
                    <>
                    <Link href="" key={i} sx={{color:"black",textDecorationLine:"none"}}>{e}</Link><span className="dot">·</span>
                    </>
                ))
                }
                <Link sx={{color:"black",textDecorationLine:"none"}}>
                    © Quora, Inc. 2024
                </Link> 
        </Box>
    );
};
export default Footer