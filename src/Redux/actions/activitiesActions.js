import axios from 'axios';
import { ACTIVITIES_GET } from './types';

const activitiesActions = {

    activityPerItinerary: (id) => {
    
    return async(dispatch, getState)=>{
    const res = await axios.get('http://localhost:4000/api/itineraryActivities?itineraryId='+id)
    
    
    dispatch({type: ACTIVITIES_GET, payload:res.data.response})
    
    }
},


getOneActivity: (id) => {
    return async (dispatch, getState) => {
        
        const res = await axios.get('http://localhost:4000/api/activities/'+id)
        
       return res
    }
},



}

export default activitiesActions;