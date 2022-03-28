
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from "react-redux";
import citiesActions from "../../Redux/actions/citiesActions";
import itinerariesActions from '../../Redux/actions/itinerariesActions';
import commentsActions from '../../Redux/actions/commentsActions';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import activitiesActions from '../../Redux/actions/activitiesActions';
import ActivityItem from '../../components/activityItem/activityItem';
import Comments from '../comments/comments';
import Comment from '../comment/comment';


const ExpandMore = styled((props) => {
  /* console.log(props) */
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  

const ItineraryItem = (props) => {
  /* console.log(props) */
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const {id} = useParams()
    
    const [inputText, setInputText] = useState("")
    const [modify, setModify] = useState(false)
    const [reload, setReload] = useState(false)
    const [likes, setLikes] = useState(props.itinerary.likes)
    const[activities, setActivities] = useState([])
  
 
    useEffect(() => {
        
            props.getOneItinerary(props.id)
            .then( response => setLikes(response.data.response.likes))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!reload]);

  useEffect(()=> {

    props.activityPerItinerary(props.id).then(
      res=>{setActivities(res.response)}

    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log(props.activities)
  console.log(props)

    async function likesOrDislikes() {
      await props.likeDislike(props.id)
      setReload(!reload)
     }    
  


        return (
         
          <div className="mb-5">

     
            <Card sx={{ maxWidth: 920 }} style={{marginRight:50}}>

            <CardHeader 
          
              title={props.itinerary.name}
              
            />
            <CardMedia
              component="img"
              height="194"
              
              image={process.env.PUBLIC_URL+ `/imagenes/${props.itinerary.image}`}
              alt="imagen itinerario"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {props.itinerary.details}
              </Typography>

              <div className="d-flex mt-3">


                <div className='me-3'>
                <Typography paragraph>USERNAME:
                {props.itinerary.username} 
                </Typography>
                </div>
                 <div className='me-3'>
                <Typography paragraph>
                HASHTAG/S: {props.itinerary.hashtag}
                </Typography>
                </div>
                <div className='me-3'>
                <Typography paragraph> DURATION:
                {"🕓".repeat(parseInt(props.itinerary.duration))}
                </Typography>
                </div>
               <div>
                <Typography paragraph>PRICE: 
                {"💸".repeat(parseInt(props.itinerary.price))}
                </Typography>
                </div>

</div>
            </CardContent>
            <CardActions disableSpacing>


            <div className="likeDislike d-flex">

                        {props.user ?
                          (<button onClick={likesOrDislikes}>{likes.includes(props.user.id) ?
                            <span style={{ color: "red", fontSize:30 }} className="material-icons">favorite</span> :
                            <span style={{  fontSize:30 }}className="material-icons">favorite_border</span>}</button>)

                          : (<span style={{  fontSize:30 }} className="material-icons">favorite_border</span>)}

                        {<h3 style={{  color:"black ",fontSize:30 }}>{likes.length}</h3>}
            </div>
              
             {/*  <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton> */}
              
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


          <div className="d-flex flex-column">
        {activities?.length !== 0 ?  
        ( 
           activities.map(activity => (
            
                <ActivityItem activity={activity} key={activity._id} />
               
                ))):
                (<div></div>)}
              </div>

              {props.itinerary.comments.map((comment) => (
                <Comments  itineraryId={props.id} commentId={comment._id} comment={comment} key={comment._id}  />
                  ))
                          
                }
                <Comment itineraryId={props.id}/>
              </CardContent>              
            </Collapse>
          </Card>
               
              
        
          </div>
          
        );

    
   
    
}
 


const mapDispatchToProps = {
          findOneCity: citiesActions.findOneCity,
          getOneItinerary:itinerariesActions.getOneItinerary,
          itinerariesPerCity: itinerariesActions.itinerariesPerCity,
          addComment: commentsActions.addComment,
          modifiComment: commentsActions.modifiComment,
          deleteComment: commentsActions.deleteComment,
          likeDislike: itinerariesActions.likeDislike,
          activityPerItinerary:activitiesActions.activityPerItinerary,
          
};

const mapStateToProps = (state) => {
  return {
            city: state.Data.city,
            itineraries: state.itinerariesReducers.itineraries, 
            user: state.userReducer.user, 
            activities: state.activitiesReducers.activities,
             
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryItem);
