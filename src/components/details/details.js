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
    <div >
        {city._id && ( 
         <div className="d-flex align-text-center justify-content-center"> 
            
        <h2>{city.name}</h2>
        
        {itineraries.map(itinerary => (
            <ItineraryItem itinerary={itinerary} key={itinerary._id} />
      
        ))}



        
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

