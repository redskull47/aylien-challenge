import { call, put, takeLatest, delay, select } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { IActionPayload } from "@services/common/redux/actions/makeActions";
import storiesService from "../../api/storiesService";
import { IAutocompleteResponse, IGetAutocompletePayload, IGetStoriesPayload, IGetStoriesResponse } from "../actions/interfaces/IStoriesActions";
import { getAutocompleteSuccess, getStoriesPending, getStoriesSearch, getStoriesSuccess } from "../actions/storiesActions";
import { STORIES_ACTION_TYPES } from "../actions/storiesActionTypes";
import { storiesPageSelector, storiesTermSelector } from "../selectors/storiesSelectors";

function* getAutocompleteSaga({payload}: IActionPayload<IGetAutocompletePayload>) {
  try {
    yield delay(500);
    const response: AxiosResponse<IAutocompleteResponse> = yield call(storiesService.getAutocomplete, 'dbpedia_resources', payload.term);
    yield put(getAutocompleteSuccess(response.data))

  } catch (error) {
    console.error(`Could not find results for term: ${payload.term}`, error);
  }
}

function* getStoriesSaga({payload}: IActionPayload<IGetStoriesPayload>) {
  const {text} = payload;
  try {
    yield put(getStoriesPending());
    const response: AxiosResponse<IGetStoriesResponse> = yield call(storiesService.getStories, text);

    yield put(getStoriesSuccess(response.data));
  } catch (error) {
    console.error(`Could not find results for text: ${payload.text}`, error);
  }
}

function* getMoreStoriesSaga() {
  const nextPageCursor: string = yield select(storiesPageSelector);
  const term: string = yield select(storiesTermSelector);
  try {
    yield put(getStoriesPending());
    const response: AxiosResponse<IGetStoriesResponse> = yield call(storiesService.getStories, term, nextPageCursor);

    yield put(getStoriesSuccess(response.data));
  } catch (error) {
    console.error(`Could not find more results for text: ${term}`, error);
  }
}

export function* watchStoriesEvents() {
  yield takeLatest(STORIES_ACTION_TYPES.GET_AUTOCOMPLETE, getAutocompleteSaga);
  yield takeLatest(STORIES_ACTION_TYPES.GET_STORIES.GET_STORIES_SEARCH, getStoriesSaga);
  yield takeLatest(STORIES_ACTION_TYPES.LOAD_MORE_STORIES, getMoreStoriesSaga);
}