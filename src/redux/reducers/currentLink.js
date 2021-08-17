import { SET_CURRENT_LINK } from '../actionTypes';

const initialState = {
  currentLink: '',
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
    default:
      return state;
  }
};

export default currentLinkReducer;
