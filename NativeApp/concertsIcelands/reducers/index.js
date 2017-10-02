import { combineReducers } from 'redux';
import concerts from './concerts';

const AppReducers = combineReducers({
  concerts
});

export default AppReducers;