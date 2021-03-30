import { all } from 'redux-saga/effects';

import { watchStoriesEvents } from '../../../../views/Stories/data/redux/sagas/storiesSaga';

export default function* rootSaga() {
    yield all([
        watchStoriesEvents(),
    ]);
};
