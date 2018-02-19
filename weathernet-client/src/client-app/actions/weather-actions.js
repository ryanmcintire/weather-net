import axios from 'axios';

export const GET_WEATHER_PENDING = 'GET_WEATHER_PENDING';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const getWeather = (lat, lng) => dispatch => {
  const baseUrl = 'https://rbm-ws-weather-service.appspot.com';
  const weatherPath = '/api/v1/weather';
  const url = `${baseUrl}${weatherPath}?latitude=${lat}&longitude=${lng}`;
  // const url = `http://localhost:51115/api/v1/weather?latitude=${lat}&longitude=${lng}`;
  dispatch({type: GET_WEATHER_PENDING});

  axios
    .get(url)
    .then(response => {
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