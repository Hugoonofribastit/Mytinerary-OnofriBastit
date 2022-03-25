
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
          <div className="mb-5">
          <Card sx={{ maxWidth: 920 }} style={{marginRight:50}}>
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

              <div className="d-flex mt-3">


                <div className='me-3'>
                <Typography paragraph>USERNAME:
                {itinerary.username} 
                </Typography>
                </div>
                 <div className='me-3'>
                <Typography paragraph>
                HASHTAG/S: <a href="#">{itinerary.hashtag}</a>
                </Typography>
                </div>
                <div className='me-3'>
                <Typography paragraph> DURATION:
                {"🕓".repeat(parseInt(itinerary.duration))}
                </Typography>
                </div>
               <div>
                <Typography paragraph>PRICE: 
                {"💸".repeat(parseInt(itinerary.price))}
                </Typography>
                </div>

</div>
            </CardContent>
            <CardActions disableSpacing>



              
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
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
<p>under construction</p>
              
               {/*  <Typography paragraph>USERNAME:
                {itinerary.username} 
                </Typography>
               
                <Typography paragraph>
                HASHTAG/S: {itinerary.hashtag}
                </Typography>
                
                <Typography paragraph> DURATION:
                {"🕓".repeat(parseInt(itinerary.duration))}
                </Typography>
               
                <Typography paragraph>PRICE: 
                {"💸".repeat(parseInt(itinerary.price))}
                </Typography>
                 */}

                
                
                
              </CardContent>
            </Collapse>
          </Card>
          </div>
          
        );

    
   
    
}
 
export default ItineraryItem;