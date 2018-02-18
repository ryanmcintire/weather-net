import {GET_WEATHER} from '../actions/weather-actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER: 
      console.log('In get weather');
      return {
        ...state,
        weatherData: action.payload.data
      }
    default: 
      return state;
  }
}