import {GET_LOCATION_SEARCH} from '../actions/geodata-actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LOCATION_SEARCH:
      console.log('In search reducer');
      return {
        ...state,
        search: action.payload.data
      };
    default: 
      return state;
  }
}