//import {GET_LOCATION_SEARCH} from '../actions/geodata-actions';

import {
  LOCATION_SEARCH_PENDING,
  LOCATION_SEARCH_FAILURE,
  LOCATION_SEARCH_SUCCESS
} from '../actions/geodata-actions';

const initialState = {
  geoSearchPending: false,
  searchError: false,
  getWeatherPending: false, //todo - potentiall clean up.
  dispatchGetWeather: false,
  search: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOCATION_SEARCH_PENDING:
      return {...state, geoSearchPending: true, searchError: false}; // todo - add the other items.
    case LOCATION_SEARCH_SUCCESS:
      return {...state, geoSearchPending: false, search: action.payload, searchError: false, getWeatherPending: true, dispatchGetWeather: true}
    case LOCATION_SEARCH_FAILURE:
      return {...state, geoSearchPending: false, searchError: true} // todo - add the other items.
    default: 
      return state;
  }
}

// export default function(state = {}, action) {
//   switch (action.type) {
//     case GET_LOCATION_SEARCH:
//       console.log('In search reducer');
//       return {
//         ...state,
//         search: action.payload.data
//       };
//     default: 
//       return state;
//   }
// }