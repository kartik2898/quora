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


function Cards({question,name,pfImg,content,psImg,time}){
    return(
        <Card >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={pfImg}/>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="close">
                      <CloseRoundedIcon />
                    </IconButton>
                }
                title={name}
                subheader={time}
            />
            <Box sx={{textAlign:"left", padding:"0.5rem 0 0.5rem 1rem" , fontWeight:500}}>
                what is life?{question}
            </Box>
            <CardMedia
                component="img"
                height="194"
                image={psImg}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <Box>
                <IconButton>..we fill later...</IconButton>
            </Box>
        </Card>
    )
}

export default Cards