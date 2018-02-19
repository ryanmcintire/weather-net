import axios from "axios";

export const LOCATION_SEARCH_PENDING = "LOCATION_SEARCH_PENDING";
export const LOCATION_SEARCH_FAILURE = "LOCATION_SEARCH_FAILED";
export const LOCATION_SEARCH_SUCCESS = "LOCATION_SEARCH_SUCCESS";

export const NO_RESULTS_FOUND = "NO_RESULTS_FOUND";

export const getLocationSearch = query => dispatch => {
  const url = `http://localhost:5000/api/v1/geodata?query=${query}`;
  dispatch({ type: LOCATION_SEARCH_PENDING, query });

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

export const noSearchResults = failedQuery => ({
  type: NO_RESULTS_FOUND,
  failedQuery
});
