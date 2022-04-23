/* eslint-disable import/prefer-default-export */
import { SET_CURRENT_LINK, APPEND_LINK, SET_IS_DESKTOP_VIEW } from './actionTypes';

const setCurrentLink = (link) => ({
  type: SET_CURRENT_LINK,
  payload: { link },
});

const appendLink = (link) => ({
  type: APPEND_LINK,
  payload: { link },
});

const setIsDesktopView = (isDesktopView) => ({
  type: SET_IS_DESKTOP_VIEW,
  payload: { isDesktopView },
});

export { setCurrentLink, appendLink, setIsDesktopView };
