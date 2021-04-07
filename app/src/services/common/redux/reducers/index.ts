import { combineReducers, Reducer } from 'redux';
import { IState } from '@services/common/redux/reducers/interfaces/IState';

import stories from '@views/Stories/data/redux/reducers/storiesReducer';

const combineReducer: Reducer<IState> = combineReducers({
    stories
});

export default combineReducer;