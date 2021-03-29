import { all } from 'redux-saga/effects';

import { watchEntitiesEvents } from 'views/Entities/data/redux/sagas/entitiesSaga';

export default function* rootSaga() {
    yield all([
        watchEntitiesEvents(),
    ]);
};
