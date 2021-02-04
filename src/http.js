import axios from 'axios'
const http = axios.create({
    baseURL : 'http://127.0.0.1:7777/api/',
    timeout : 1000,
    headers : {'Content-Type': 'application/json'},
});

http.interceptors.request.use(
    function (config){
        const token = localStorage.getItem('token');
        if(token)config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
);

export default http;