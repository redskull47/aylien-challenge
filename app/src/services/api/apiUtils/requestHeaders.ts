import axios from 'axios';
import { CommonHeaders, ISetRequestHeader } from '../../../services/api/interfaces/IApiUtils';

export const setRequestHeader: ISetRequestHeader = (headerName, headerValue) => {
  (axios.defaults.headers as CommonHeaders)[headerName] = headerValue;
}