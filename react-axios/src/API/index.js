import axios from 'axios';

const baseURL = `http://jsonplaceholder.typicode.com/`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
    (req) => {
        req.headers.Authorization = 'ABCD';
        console.log("Intercept Request Here", req);
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axiosInstance.interceptors.response.use(
    (req) => {
        req.headers.Authorization = 'ABCD';
        console.log("Intercept Response Here", req);
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default axiosInstance;

