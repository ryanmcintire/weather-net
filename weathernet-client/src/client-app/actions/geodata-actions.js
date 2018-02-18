import axios from 'axios';

export const GET_LOCATION_SEARCH = 'GET_LOCATION_SEARCH';


export const getLocationSearch = query => {
  const url = `localhost:5000/api/v1/geodata?query=${query}`;

  const request = axios.get(url);
  return {
    type: GET_LOCATION_SEARCH,
    payload: request
  };
}