import axios from 'axios';

const axiosRequest = axios.create({
  baseURL: 'http://localhost:1337'
});

export { axiosRequest };
