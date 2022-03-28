
import * as React from 'react';
import { connect } from "react-redux";
import citiesActions from "../../Redux/actions/citiesActions";
import itinerariesActions from '../../Redux/actions/itinerariesActions';
import commentsActions from '../../Redux/actions/commentsActions';
import { useParams } from 'react-router-dom';
import { useState, useRef} from 'react';
import activitiesActions from '../../Redux/actions/activitiesActions';


const Comments = (props) => {
   
    
    const {id} = useParams()
    const input = useRef()
  
    const [modify, setModify] = useState(false)
    const [reload, setReload] = useState(false)
    
  
    async function modificarComentario(commentId) {
      const commentData = {
        comment: input.current.value,
      }
      
      setModify(!modify)
      await props.modifiComment(commentId,commentData)
      props.getOneItinerary(id)
      props.findOneCity(id)
      props.itinerariesPerCity(id)
      setReload(!reload)
      
  
    }
    async function eliminarComentario(commentId) {
      const commentData = {
        commentId: commentId,
      }
      const awaitDelete = await props.deleteComment(props.itineraryId, commentData)
     
      

      if(awaitDelete.success) {
        props.findOneCity(id)
        props.itinerariesPerCity(id)
        alert("your comment has been deleted")
       /*  console.log("deleted") */

        // props.findOneCity(id)
      }
    }
  
   
  
/* 
    console.log(props.comment.comment) */
        return (            
                  <>
                    {props.comment.userID?._id !== props.user?.id ?
                      <div className="card cardComments " key={props.comment._id}>
                        <div className="card-header cardHeader">
                          {props.comment.userID?.name}
                        </div>
                        <div className="card-body">
                          <p className="card-text cardText">{props.comment.comment}</p>
                        </div>
                      </div> :

                      <div className="card cardComments">
                        <div className="card-header cardHeader">
                          <p>{props.comment.userID.name}</p> 
                        </div>
                        <div className="card-body ">
                          <div type="text" className="card-text textComments" >
                            {modify 
                              ? <input defaultValue={props.comment.comment} ref={input} />
                              : <p>{props.comment.comment}</p>
                            }
                          </div>
                          {modify 
                            ? (
                              <>
                                <button id={props.comment._id} onClick={() => modificarComentario(props.commentId)} className="btn btn-primary btnComments">Confirm Modify</button>
                                <button id={props.comment._id} onClick={() => setModify(!modify)} className="btn btn-primary">Cancel</button>
                              </>
                            )
                            : <button id={props.comment._id} onClick={() => setModify(!modify)} className="btn btn-primary">Modify</button>
                          }
                          <button id={props.commentId} onClick={() => eliminarComentario(props.commentId)} className="btn btn-primary btnComments">Delete</button>
                        </div>
                      </div>
                    }
                  </>
                )}

              
            
                
                
                
          
          
        
 


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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);