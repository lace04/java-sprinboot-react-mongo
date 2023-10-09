import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  // baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
  // headers: {
  //   'ngrok-skip-browser-warning': 'true',
  // },
});

export default axiosInstance;
