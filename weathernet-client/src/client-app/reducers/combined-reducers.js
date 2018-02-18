import {combineReducers} from 'redux';

import weatherReducer from './weather-reducer';
import geodataReducer from './geodata-reducer';

export default combineReducers({
  geoData: geodataReducer,
  weatherData: weatherReducer
});