import { combineReducers, Reducer } from 'redux';
import { IState } from 'services/common/redux/reducers/interfaces/IState';

import entities from 'views/Entities/data/redux/reducers/entitiesReducer';

const combineReducer: Reducer<IState> = combineReducers({
    entities
});

export default combineReducer;