import { combineReducers } from 'redux';
import { stepsReducer } from './stepsReducer';

export const rootReducer = combineReducers({
  app: stepsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
