import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';

export const getWeather = (lat, lng) => {
  //const url = `http://localhost:51115/api/v1/weather?latitude=${lat}&longitude=${lng}`;
  const url = `http://localhost:51115/api/v1/weather?latitude=12.32&longitude=-21.32`;

  const request = axios.get(url);
  return {
    type: GET_WEATHER,
    payload: request
  };
}