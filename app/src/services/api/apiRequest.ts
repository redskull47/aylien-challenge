import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { setRequestHeader } from './apiUtils/requestHeaders';

export interface IApiService {
  get: (url: string, config?: AxiosRequestConfig) => AxiosPromise<any>;
}

axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true;

//FIXME: change inline type to proper solution
setRequestHeader('X-AYLIEN-NewsAPI-Application-ID', process.env['REACT_APP_X-AYLIEN-NewsAPI-Application-ID'] as string);
setRequestHeader('X-AYLIEN-NewsAPI-Application-Key', process.env['REACT_APP_X-AYLIEN-NewsAPI-Application-Key'] as string);
  
const service: IApiService = {
  get(url, config) {
    return axios.get(url, config);
  }
};

export default service;