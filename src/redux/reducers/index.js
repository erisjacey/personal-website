import { combineReducers } from 'redux';
import currentLinkReducer from './currentLink';

export default combineReducers({
  currentLink: currentLinkReducer,
});
