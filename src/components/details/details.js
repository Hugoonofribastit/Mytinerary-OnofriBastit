import React from 'react'
/* import {Link as LinkRouter} from "react-router-dom" */
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from "react-redux";
import citiesActions from "../../Redux/actions/citiesActions";
import itinerariesActions from '../../Redux/actions/itinerariesActions';
import ItineraryItem from '../ItineraryItem/itineraryitem';



const Details = (props) =>{
    const { 
        city,
        itineraries
    } = props;
 
    const {id} = useParams()
  
    useEffect(() => {
        
        props.findOneCity(id)
        props.itinerariesPerCity(id)
    }, []);

       return(
    <div className='mb-5'>
        {city._id && ( 
         <div className="d-flex flex-column align-items-center justify-content-center"> 
            
        <h2 className='mt-5'>{city.name} Itineraries</h2>
        
        <div className="d-flex row">
            
        {itineraries.map(itinerary => (
            
                <ItineraryItem itinerary={itinerary} key={itinerary._id} />
               
                ))}
         
         </div>



        
    </div>
        )}
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

