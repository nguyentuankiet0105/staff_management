import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const instance: AxiosInstance = axios.create({
 baseURL: 'https://reqres.in',
 timeout: 1000
});

instance.interceptors.response.use(function (response: AxiosResponse) {
 return response.data;
}, function (error: AxiosError) {
 return Promise.reject(error);
});

export default instance