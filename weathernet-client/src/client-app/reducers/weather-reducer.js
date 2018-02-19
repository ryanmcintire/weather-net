import {
  GET_WEATHER_PENDING,
  GET_WEATHER_FAILURE,
  GET_WEATHER_SUCCESS 
} from '../actions/weather-actions';


const initialState = {
  weather: [],
  getWeatherPending: false,
  getWeatherError: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_WEATHER_PENDING:
      return {...state, getWeatherPending: true, getWeatherError: false}; // todo - add the other items.
    case GET_WEATHER_SUCCESS:
      return {...state, getWeatherPending: false, weather: action.payload, getWeatherError: false}
    case GET_WEATHER_FAILURE:
      return {...state, getWeatherPending: false, getWeatherError: true} // todo - add the other items.
    default: 
      return state;
  }
}