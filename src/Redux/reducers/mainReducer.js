import { combineReducers } from "redux";
import citiesReducer from "./citiesReducers";
import itinerariesReducers from "./itinerariesReducers";
import userReducer from "./userReducer";
import activitiesReducers from "./activitiesReducers";


const mainReducer = combineReducers({
          Data: citiesReducer,
          itinerariesReducers,          
          userReducer,
          activitiesReducers,
});

export default mainReducer;
