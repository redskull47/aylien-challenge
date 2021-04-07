import { AxiosPromise } from 'axios';
import request from '@services/api/apiRequest';

export interface IStoriesService {
  getAutocomplete: (type: string, term: string) => AxiosPromise<any>;
  getStories: (text: string, pageCursor?: string) => AxiosPromise<any>;
}

const storiesService: IStoriesService = {
  getAutocomplete(type, term) {
    return request.get('/autocompletes', { 
      params: { 
        type,
        term, 
        'language': "en",
        'perPage': 3  
      }
    });
  },

  getStories(text, pageCursor) {
    const params = { 
      'language': ["en"],
      'query': {
        "entity": {
          "$and": [
            {"surface_forms.text": {"$text": text}},
          ]
        }
      },
      'per_page': 25,
      cursor: pageCursor || '*',
    };

    return request.get('/stories', {params});
  },
}

export default storiesService;