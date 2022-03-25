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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

       
    return(
        
        <div className='mb-5'>
         
         <div className="d-flex flex-column align-items-center justify-content-center"> 
            
            <h2 className='mt-5 title h2 text-center textCarr'>{city.name} Itineraries</h2>
        
        <div className="d-flex flex-column">
        {props.itineraries?.length !== 0 ?  
        ( 
           itineraries.map(itinerary => (
            
                <ItineraryItem itinerary={itinerary} key={itinerary._id} />
               
                ))):
                (<h3 className='mt-5 title h2 text-center textCarr'>WE COULD NOT FIND ANY ITINERARY FOR THIS CITY</h3>)}
         
         </div>



        
    </div>
        )
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

