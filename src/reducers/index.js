import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const articlesState = handleActions({
  [actions.init]: (state, { payload }) => {
    return { articles: [] };
  },
}, null);

export default combineReducers({
  articlesState,
});