import {GET_WEATHER} from '../actions/weather-actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER: 
      console.log('In weather reducer');
      return {
        ...state,
        weather: action.payload.data
      }
    default: 
      return state;
  }
}