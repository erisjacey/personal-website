import { SET_CURRENT_LINK, APPEND_LINK } from '../actionTypes';

const initialState = {
  currentLink: '/home',
};

const currentLinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LINK: {
      const { link } = action.payload;
      return {
        ...state,
        currentLink: link,
      };
    }
    case APPEND_LINK: {
      const { link } = action.payload;
      return {
        ...state,
        currentLink: `${state.currentLink}${link}`,
      };
    }
    default:
      return state;
  }
};

export default currentLinkReducer;
