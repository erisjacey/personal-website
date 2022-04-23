import { SET_IS_DESKTOP_VIEW } from '../actionTypes';

const initialState = {
  isDesktopView: true,
};

const isDesktopViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_DESKTOP_VIEW: {
      const { isDesktopView } = action.payload;
      return {
        ...state,
        isDesktopView,
      };
    }
    default:
      return state;
  }
};

export default isDesktopViewReducer;
