import { combineReducers } from 'redux';
import auth from './auth';
import config from './config';
import layouts from './layouts';

const rootReducer = combineReducers({
  config,
  layouts,
  auth
});

export default rootReducer;
