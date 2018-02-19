import axios from "axios";

export const GET_LOCATION_SEARCH = "GET_LOCATION_SEARCH";
export const LOCATION_SEARCH_PENDING = "LOCATION_SEARCH_PENDING";
export const LOCATION_SEARCH_FAILURE = "LOCATION_SEARCH_FAILED";
export const LOCATION_SEARCH_SUCCESS = "LOCATION_SEARCH_SUCCESS";

export const getLocationSearch = query => dispatch => {
  const url = `http://localhost:5000/api/v1/geodata?query=${query}`;
  //const url = `http://localhost:5000/api/v1/geodata?query=mexico`;
  dispatch({ type: LOCATION_SEARCH_PENDING });

  axios
    .get(url)
    .then(response => {
      dispatch({
        type: LOCATION_SEARCH_SUCCESS,
        payload: response.data
      });
    })
    .catch(() => {
      dispatch({
        type: LOCATION_SEARCH_FAILURE
      });
    });
};
