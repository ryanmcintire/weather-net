import {
  LOCATION_SEARCH_PENDING,
  LOCATION_SEARCH_FAILURE,
  LOCATION_SEARCH_SUCCESS,
  NO_RESULTS_FOUND
} from "../actions/geodata-actions";

import {
  GET_WEATHER_PENDING,
} from "../actions/weather-actions";

const initialState = {
  geoSearchPending: false,
  searchError: false,
  dispatchGetWeather: false,
  anySearchSubmitted: false,
  search: {},
  submittedQuery: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_SEARCH_PENDING:
      return {
        ...state,
        anySearchSubmitted: true,
        geoSearchPending: true,
        searchError: false,
        submittedQuery: action.query,
        failedQuery:''
      }; // todo - add the other items.
    case LOCATION_SEARCH_SUCCESS:
      return {
        ...state,
        geoSearchPending: false,
        search: action.payload,
        searchError: false,
        dispatchGetWeather: true
      };
    case LOCATION_SEARCH_FAILURE:
      return { ...state, geoSearchPending: false, searchError: true }; // todo - add the other items.
    case NO_RESULTS_FOUND:
      return {...state, failedQuery: action.failedQuery, dispatchGetWeather: false}
    case GET_WEATHER_PENDING:
      return { ...state, dispatchGetWeather: false };
    default:
      return state;
  }
};
