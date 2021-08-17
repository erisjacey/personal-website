/* eslint-disable import/prefer-default-export */
import { SET_CURRENT_LINK } from './actionTypes';

const setCurrentLink = (link) => ({
  type: SET_CURRENT_LINK,
  payload: { link },
});

export { setCurrentLink };
