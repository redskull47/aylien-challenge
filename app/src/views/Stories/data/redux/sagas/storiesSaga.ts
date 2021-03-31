import { call, put, takeLatest, delay } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { IActionPayload } from "services/common/redux/actions/makeActions";
import storiesService from "../../api/storiesService";
import { IAutocompleteResponse, IGetAutocompletePayload, IGetStoriesPayload, IGetStoriesResponse } from "../actions/interfaces/IStoriesActions";
import { getAutocompleteSuccess, getStoriesPending, getStoriesSuccess } from "../actions/storiesActions";
import { STORIES_ACTION_TYPES } from "../actions/storiesActionTypes";

function* getAutocompleteSaga({payload}: IActionPayload<IGetAutocompletePayload>) {
  try {
    yield delay(500);
    const response: AxiosResponse<IAutocompleteResponse> = yield call(storiesService.getAutocomplete, 'entity_types', payload.term);
    yield put(getAutocompleteSuccess(response.data))

  } catch (error) {
    console.error(`Could not find results for term: ${payload.term}`, error);
  }
}

function* getStoriesSaga({payload}: IActionPayload<IGetStoriesPayload>) {
  try {
    yield put(getStoriesPending());
    const response: AxiosResponse<IGetStoriesResponse> = yield call(storiesService.getStories, payload.text);
    console.log('stories response', response.data);

    yield put(getStoriesSuccess(response.data.stories));
  } catch (error) {
    console.error(`Could not find results for text: ${payload.text}`, error);
  }
}

export function* watchStoriesEvents() {
  yield takeLatest(STORIES_ACTION_TYPES.GET_AUTOCOMPLETE, getAutocompleteSaga);
  yield takeLatest(STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_SEARCH, getStoriesSaga);
}