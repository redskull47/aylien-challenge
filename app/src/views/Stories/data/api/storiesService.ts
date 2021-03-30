import { AxiosPromise } from 'axios';
import request from '../../../../services/api/apiRequest';

export interface IStoriesService {
  getAutocomplete: (type: string, term: string) => AxiosPromise<any>;
  getStories: (text: string) => AxiosPromise<any>;
}

const storiesService: IStoriesService = {
  getAutocomplete(type, term) {
    return request.get('/autocompletes', { params: { type, term, 
      'language': "en",
      'perPage': 3  
    }});
  },

  getStories(text) {
    return request.get('/stories', {params: { text }});
  },
}

export default storiesService;