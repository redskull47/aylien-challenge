import { IAutocompleteResponse } from "../actions/interfaces/IStoriesActions";
import { STORIES_ACTION_TYPES } from "../actions/storiesActionTypes";
import { IStories } from "./interfaces/IStories";

const defaultState: IStories = {
  autocompletes: [],
  stories: [],
};

export default function stories(
  state: any = defaultState,
  action: any,
) {
  switch (action.type) {
    case STORIES_ACTION_TYPES.GET_AUTOCOMPLETE_SUCCESS: {
      console.log('payload', action.payload);
      const { autocompletes } = action.payload as IAutocompleteResponse;

      return {
        ...state,
        autocompletes: autocompletes,
      }
    }

  default:
    return state;
  }

}