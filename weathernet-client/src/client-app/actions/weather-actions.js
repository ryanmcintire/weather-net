import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';

export function getWeather(location) {
  const url = 'http://localhost:51115/api/v1/weather?latitude=12.32&longitude=-21.32';

  const request = axios.get(url)
  console.log('made the request...');
  return {
    type: GET_WEATHER,
    payload: request
  };
}