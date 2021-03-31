import makeAction, { makeActionWithPayload } from "../../../../../services/common/redux/actions/makeActions";
import { IAutocompleteResponse, IGetAutocompletePayload, IGetStoriesPayload, IStories } from "./interfaces/IStoriesActions";
import { STORIES_ACTION_TYPES } from "./storiesActionTypes";

export const getAutocomplete = makeActionWithPayload<IGetAutocompletePayload>(STORIES_ACTION_TYPES.GET_AUTOCOMPLETE);
export const getAutocompleteSuccess = makeActionWithPayload<IAutocompleteResponse>(STORIES_ACTION_TYPES.GET_AUTOCOMPLETE_SUCCESS);

export const getStoriesSearch = makeActionWithPayload<IGetStoriesPayload>(STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_SEARCH);
export const getStoriesPending = makeAction(STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_PENDING);
export const getStoriesSuccess = makeActionWithPayload<IStories>(STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_SUCCESS);