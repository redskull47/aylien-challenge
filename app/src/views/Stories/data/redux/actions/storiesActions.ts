import { makeActionWithPayload } from "../../../../../services/common/redux/actions/makeActions";
import { IAutocompleteResponse, IGetAutocompletePayload } from "./interfaces/IStoriesActions";
import { STORIES_ACTION_TYPES } from "./storiesActionTypes";

export const getAutocomplete = makeActionWithPayload<IGetAutocompletePayload>(STORIES_ACTION_TYPES.GET_AUTOCOMPLETE);
export const getAutocompleteSuccess = makeActionWithPayload<IAutocompleteResponse>(STORIES_ACTION_TYPES.GET_AUTOCOMPLETE_SUCCESS);
