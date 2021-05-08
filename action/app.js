import {
  SET_MAIN_TAB,
  SET_LOGO_POSITION,
  SET_FIRST_HEADER_ITEM_POSITION,
  SET_PART_VISIBILITY,
} from '../constants';

export const setMainTab = (newTab) => async (dispatch) => {
  dispatch({ type: SET_MAIN_TAB, payload: newTab });
};

export const setLogoPositionToLeft = (dist) => async (dispatch) => {
  dispatch({ type: SET_LOGO_POSITION, payload: dist });
};

export const setFirstHeaderItemPosToLeft = (dist) => async (dispatch) => {
  dispatch({ type: SET_FIRST_HEADER_ITEM_POSITION, payload: dist });
};

export const setPartVisibility = (isVisible) => async (dispatch) => {
  dispatch({type: SET_PART_VISIBILITY, payload: isVisible})
}
