import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export interface IApiService {
  get: (url: string, config?: AxiosRequestConfig) => AxiosPromise<any>;
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const service: IApiService = {
  get(url, config) {
    return axios.get(url, config);
  }
};

export default service;