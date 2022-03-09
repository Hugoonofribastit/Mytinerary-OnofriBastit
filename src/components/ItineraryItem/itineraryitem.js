import React from 'react';

const ItineraryItem = ({itinerary}) => {
    
    return (  
        <div key={itinerary._id}>
            <div>{itinerary.name}</div>
            <div>
                <img src={itinerary.image} />
            </div>
            <div>{itinerary.details}</div>
        </div>  
    );
    
}
 
export default ItineraryItem;