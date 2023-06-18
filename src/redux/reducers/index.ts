import {combineReducers} from '@reduxjs/toolkit';

import authReducers from './authReducers';
import actionTypes from '../actionTypes';

type ActionObject = {
  type: string;
};

const appReducer = combineReducers({
  authReducers,
});

const rootReducer = (state: any, action: ActionObject) => {
  if (action.type === actionTypes.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
