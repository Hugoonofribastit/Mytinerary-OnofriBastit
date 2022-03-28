import React from 'react'
/* import {Link as LinkRouter} from "react-router-dom" */
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from "react-redux";
import citiesActions from "../../Redux/actions/citiesActions";
import itinerariesActions from '../../Redux/actions/itinerariesActions';
import ItineraryItem from '../../components/itineraryItem/itineraryItem';



const Details = (props) =>{
    const { 
        city,
    } = props;
 
    const {id} = useParams()
    
  
    useEffect(() => {
        
        props.findOneCity(id)
        props.itinerariesPerCity(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

       
    return(
        
        <div className='mb-5'>
         
            <div className="d-flex flex-column align-items-center justify-content-center"> 
            
                <h2 className='mt-5 title h2 text-center textCarr'>{city.name} Itineraries</h2>
            

                {props.itineraries?.length !== 0 ?  
        ( 
           props.itineraries.map((itinerary) => (
                <div className="d-flex flex-column" key={itinerary._id}>
                    <ItineraryItem itinerary={itinerary} id={itinerary._id} />    
                 </div>
                  ))):
                  (<h3 className='mt-5 title h2 text-center textCarr'>WE COULD NOT FIND ANY ITINERARY FOR THIS CITY</h3>)}
          
          
        
          </div>
        ))
 

        
            </div>
        
        
    
    )
       
    }
    const mapStateToProps = (state) => {
        return {
                  city: state.Data.city,
                  itineraries: state.itinerariesReducers.itineraries, 
                  
                   
        };
      };
      
      const mapDispatchToProps = {
                findOneCity: citiesActions.findOneCity,
                itinerariesPerCity: itinerariesActions.itinerariesPerCity
      };
      export default connect(mapStateToProps, mapDispatchToProps)(Details);
     /* export default Details; */