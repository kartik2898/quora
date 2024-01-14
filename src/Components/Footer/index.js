import {Box, Link} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./Footer.css";

const info = ["About","Careers"," Privacy","Terms","Contact","Languages","Your Ad Choices","Press"];

function Footer(){
    return(
        <Box className="footer-container">
            <List className="footer-list">
                {info.map((e,i)=>(
                    <ListItem key={i} className="footer-list-item">
                        <Link href="">{e}</Link>
                    </ListItem>
                ))
                }
                <ListItem>
                    © Quora, Inc. 2024
                </ListItem>
                
            </List>
        </Box>
    )
}
export default Footer