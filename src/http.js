import axios from 'axios';
import {getAuthToken} from '@/utils/auth.js';

const http = axios.create ({
  baseURL: 'http://127.0.0.1:9999/api/',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use (
  function (config) {
    const token =getAuthToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default http;