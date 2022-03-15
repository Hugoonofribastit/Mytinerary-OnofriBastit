import { combineReducers } from "redux";
import citiesReducer from "./citiesReducers";
import itinerariesReducers from "./itinerariesReducers";
import dataReducer from "./dataReducer";
import userReducer from "./userReducer";

const mainReducer = combineReducers({
          Data: citiesReducer,
          itinerariesReducers,
          dataReducer,
          userReducer,
});

export default mainReducer;
