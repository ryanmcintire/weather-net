import axios from 'axios';

export const GET_WEATHER_PENDING = 'GET_WEATHER_PENDING';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const getWeather = (lat, lng) => dispatch => {
  const url = `http://localhost:51115/api/v1/weather?latitude=${lat}&longitude=${lng}`;
  //const url = `http://localhost:51115/api/v1/weather?latitude=12.32&longitude=-21.32`;
  console.log('Trying to search for weather...');
  dispatch({type: GET_WEATHER_PENDING});

  axios
    .get(url)
    .then(response => {
      console.log('Got weather!!');
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: response.data
      })
    })
    .catch(() => {
      dispatch({
        type: GET_WEATHER_FAILURE
      });
    });
}