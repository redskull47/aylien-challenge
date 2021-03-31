import { IAutocompleteResponse, IStories } from "../actions/interfaces/IStoriesActions";
import { STORIES_ACTION_TYPES } from "../actions/storiesActionTypes";
import { IStoriesReducer } from "./interfaces/IStoriesReducer";

const defaultState: IStoriesReducer = {
  autocompletes: [],
  stories: {
    pending: false,
    list: [],
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
      }
    }

    case STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_PENDING: {
      return {
        ...state,
        stories: {
          pending: true,
          list: [],
        }
      }
    }

    case STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_SUCCESS: {
      const stories = action.payload as IStories;

      return {
        ...state,
        stories: {
          pending: false,
          list: stories,
        }
      }
    }

  default:
    return state;
  }

}