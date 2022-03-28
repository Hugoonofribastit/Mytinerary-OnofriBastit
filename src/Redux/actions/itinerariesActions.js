import axios from 'axios';
import { ITINERARIES_GET } from './types';

const itinerariesActions = {

itinerariesPerCity: (id) => {
    
    return async(dispatch, getState)=>{
    const res = await axios.get('http://localhost:4000/api/cityItineraries?cityId='+id)
    
    dispatch({type: ITINERARIES_GET, payload:res.data.response})
    
    }
},


getOneItinerary: (id) => {
    return async (dispatch, getState) => {
        /* console.log(id) */
        const res = await axios.get('http://localhost:4000/api/itineraries/'+id)
       /*  console.log(res) */
       return res
    }
},

likeDislike: (id) => {

    const token = localStorage.getItem('token')
        console.log(token)
    return () => {
        try {
            
            let response = axios.put(`http://localhost:4000/api/like/${id}`, {},
            {headers: {
                Authorization: "Bearer "+token
                                }
            })
            return response
            
        }catch (error) {
            console.log(error)
        }
    }
}

}

export default itinerariesActions