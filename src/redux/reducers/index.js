import { combineReducers } from 'redux';
import currentLinkReducer from './currentLink';
import isDesktopViewReducer from './isDesktopView';

export default combineReducers({
  currentLink: currentLinkReducer,
  isDesktopView: isDesktopViewReducer,
});
