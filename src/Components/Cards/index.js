import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import "./Cards.css"


function Cards(){
    return(
        <Card >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src=''/>
                    </Avatar>
                }
                
                action={
                    <IconButton aria-label="close">
                      <CloseRoundedIcon />
                    </IconButton>
                }
                title="kartik"
                subheader="September 14, 2016"
            />
            <Box sx={{textAlign:"left", padding:"0.5rem 0 0.5rem 1rem" , fontWeight:500}}>
                what is life?
            </Box>
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <Box>
                <IconButton>..we fill later...</IconButton>
            </Box>
        </Card>
    )
}

export default Cards