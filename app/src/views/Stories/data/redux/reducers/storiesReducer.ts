import { IAutocompleteResponse, IGetStoriesPayload, IGetStoriesResponse } from "../actions/interfaces/IStoriesActions";
import { STORIES_ACTION_TYPES } from "../actions/storiesActionTypes";
import { IStoriesReducer } from "./interfaces/IStoriesReducer";

const defaultState: IStoriesReducer = {
  autocompletes: [],
  stories: {
    pending: false,
    list: [],
    'next_page_cursor': '',
    term: '',
  },
};

export default function stories(
  state: any = defaultState,
  action: any,
) {
  switch (action.type) {
    case STORIES_ACTION_TYPES.GET_AUTOCOMPLETE_SUCCESS: {
      const { autocompletes } = action.payload as IAutocompleteResponse;

      return {
        ...state,
        autocompletes: autocompletes,
        stories: defaultState.stories,
      }
    }

    case STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_SEARCH: {
      const {text} = action.payload as IGetStoriesPayload; 
      return {
        ...state,
        stories: {
          ...state.stories,
          term: text,
          list: [],
        }
      }
    }

    case STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_PENDING: {
      return {
        ...state,
        stories: {
          ...state.stories,
          pending: true,
        }
      }
    }

    case STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_SUCCESS: {
      const response = action.payload as IGetStoriesResponse;

      return {
        ...state,
        stories: {
          ...state.stories,
          pending: false,
          list: [...state.stories.list, ...response.stories],
          'next_page_cursor': response.next_page_cursor,
        }
      }
    }

  default:
    return state;
  }

}