<<<<<<< HEAD
import { ITINERARIES_GET } from '../actions/types';

const initialState = {
    itineraries:[],
    aux:[],
  
    
}

const itinerariesReducers = (state = initialState, action)=>{
    switch(action.type){
        case ITINERARIES_GET:
            return {                
                    ...state,
                    itineraries: action.payload,
                    
                                       
                }
        default: 
        
            return state  
        }}
        
=======
import { ITINERARIES_GET } from '../actions/types';

const initialState = {
    itineraries:[],
    aux:[],
  
    
}

const itinerariesReducers = (state = initialState, action)=>{
    switch(action.type){
        case ITINERARIES_GET:
            return {                
                    ...state,
                    itineraries: action.payload,
                    
                                       
                }
        default: 
        
            return state  
        }}
        
>>>>>>> 105cd1da12d49a2b894a7723d921a1d00a2070b1
        export default itinerariesReducers;