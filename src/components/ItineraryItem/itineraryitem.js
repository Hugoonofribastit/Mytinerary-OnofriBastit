
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

  

const ItineraryItem = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const { id } = useParams()
    
    const [inputText, setInputText] = useState("")
    const [modifi, setModifi] = useState()
    const [reload, setReload] = useState(false)
  
   /*   useEffect(() => {
      props.getOneItinerary(id)
      
    }, [reload]) */
    useEffect(() => {
        
            props.getOneItinerary(id)
            props.activityPerItinerary(id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
    async function cargarComentario(event) {
      
      const commentData = {
        itinerary: props.itineraries.id,
        comment: inputText,
      }
    
      await props.addComment(commentData)
        .then(response => setInputText(""))
      document.querySelector("#nuevoComentario").textContent = ""
      
     
    }
  
    async function modificarComentario(event) {
      const commentData = {
        commentID: event.target.id,
        comment: modifi,
      }
      console.log(modifi)
      await props.modifiComment(commentData)
      setReload(!reload)
  
    }
    async function eliminarComentario(event) {
      await props.deleteComment(event.target.id)
      setReload(!reload)
    }
  
    async function likesOrDislikes() {
      await props.likeDislike(props.id)
      props.getOneItinerary(id)
      setReload(!reload)
    }
    console.log(props)
    console.log(props.user)
  


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
                          (<button onClick={likesOrDislikes}>{props.itinerary?.likes.includes(props.user.id) ?
                            <span style={{ color: "red", fontSize:30 }} className="material-icons">favorite</span> :
                            <span style={{  fontSize:30 }}className="material-icons">favorite_border</span>}</button>)

                          : (<span style={{  fontSize:30 }} className="material-icons">favorite_border</span>)}

                        {<h3 style={{  color:"black ",fontSize:30 }}>{props.itinerary?.likes.length}</h3>}
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
        {props.activities?.length !== 0 ?  
        ( 
           props.activities.map(activity => (
            
                <ActivityItem itinerary={activity} key={activity._id} />
               
                ))):
                (<div></div>)}
              </div>



             {props.itinerary?.comments.map(comment =>
                  <>
                    {comment.userID?._id !== props.user?.id ?
                      <div className="card cardComments " key={comment._id}>
                        <div className="card-header cardHeader">
                          {comment.userID?.name} {comment.date}
                        </div>
                        <div className="card-body">
                          <p className="card-text cardText">{comment.comment}</p>
                        </div>
                      </div> :

                      <div className="card cardComments">
                        <div className="card-header cardHeader">
                          <p>{comment.userID.name}</p> <p>{new Date(comment.date).toUTCString()}</p>
                        </div>
                        <div className="card-body ">
                        
                          <div type="text" className="card-text textComments" onInput={(event) => setModifi(event.currentTarget.textContent)} contentEditable >{comment.comment}</div>
                          <button id={comment._id} onClick={modificarComentario} className="btn btn-primary btnComments">Modificar</button>
                          <button id={comment._id} onClick={eliminarComentario} className="btn btn-primary btnComments">Eliminar</button>
                        </div>
                      </div>
                    }
                  </>
                )}

                {props.user ?
                  <div className="card cardComments">
                    <div className="card-header cardHeaderNew">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div className="card-body ">
                      <div id="nuevoComentario" placeholder='Ingresa aqui tu comentario...' onInput={(event) => setInputText(event.currentTarget.textContent)} contentEditable className="card-text textComments border border-dark mb-3" ></div>
                      <button onClick={cargarComentario} className="btn btn-primary btnComments">Cargar</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1>
                }
            
                
                
                
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
