import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

import "./SpaceCard.css"

function SpaceCard({channel}){
    const navigate = useNavigate();
    const handleChanneluserId = ()=>{
        navigate(`/group/${channel._id}`);
    }

    return(<>
        <Card sx={{ maxWidth: 180 }} onClick={handleChanneluserId}>
            <CardActionArea className="space-card">
                <CardMedia
                    component="img"
                    height="55"
                    image={channel.image}
                    alt="green iguana"
                    className="img-space"
                />
                <CardMedia
                    component="img"
                    sx={{width:40}}
                    height="40"
                    image={channel.image}
                    alt="green iguana"
                    className='space-center-img'
                />
                <CardContent className='space-card-content'>
                    <Typography gutterBottom variant="h5" component="div" fontSize={18} className='channel-name'>
                        {channel.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize={12}>
                        {channel.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>)
}

export default SpaceCard