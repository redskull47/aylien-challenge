import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { IActionPayload } from "services/common/redux/actions/makeActions";
import storiesService from "../../api/storiesService";
import { IAutocompleteResponse, IGetAutocompletePayload } from "../actions/interfaces/IStoriesActions";
import { getAutocompleteSuccess } from "../actions/storiesActions";
import { STORIES_ACTION_TYPES } from "../actions/storiesActionTypes";

function* getAutocompleteSaga({type, payload}: IActionPayload<IGetAutocompletePayload>) {
  try {
    //yield put(getAutocompletePendingaAction());


    console.log('SAGA', type, payload);
    const response: AxiosResponse<IAutocompleteResponse> = yield call(storiesService.getAutocomplete, 'entity_types', payload.term);

    console.log('response', response.data);

    yield put(getAutocompleteSuccess(response.data))

  } catch (error) {
    console.error(`Could not find results for term: ${payload.term}`, error);
  }
}

export function* watchStoriesEvents() {
  yield takeLatest(STORIES_ACTION_TYPES.GET_AUTOCOMPLETE, getAutocompleteSaga);
}