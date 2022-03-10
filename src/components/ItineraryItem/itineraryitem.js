
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  

const ItineraryItem = ({itinerary}) => {
    
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

        return (
          
          <Card sx={{ maxWidth: 345 }} style={{marginRight:50}}>
            <CardHeader 
            /*   avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              } */
              /* action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              } */
              title={itinerary.name}
              
            />
            <CardMedia
              component="img"
              height="194"
              image={process.env.PUBLIC_URL+ `/imagenes/${itinerary.image}`}
              alt="imagen itinerario"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {itinerary.details}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton >
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>

              <Typography paragraph>USERNAME:</Typography>
                <Typography paragraph>
                {itinerary.username} 
                </Typography>
                <Typography paragraph>HASHTAG/S:</Typography>
                <Typography paragraph>
                {itinerary.hashtag}
                </Typography>
                <Typography paragraph>DURATION:</Typography>
                <Typography paragraph>
                {"🕓".repeat(parseInt(itinerary.duration))}
                </Typography>
                <Typography paragraph>PRICE:</Typography>
                <Typography paragraph>
                {"💸".repeat(parseInt(itinerary.price))}
                </Typography>
                

                
                
                
              </CardContent>
            </Collapse>
          </Card>
          
        );

    
   
    
}
 
export default ItineraryItem;