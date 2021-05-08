import {
  SET_MAIN_TAB,
  SET_LOGO_POSITION,
  SET_FIRST_HEADER_ITEM_POSITION,
  SET_PART_VISIBILITY,
} from '../constants';

const initialState = {
  mainTab: 'order',
  logoPosition: null,
  firstHeaderItemPos: null,
  showParts: false,
};

export default function app(state = initialState, { type, payload }) {
  switch (type) {
    case SET_MAIN_TAB:
      return {
        ...state,
        mainTab: payload,
      };
    case SET_LOGO_POSITION:
      return {
        ...state,
        logoPosition: payload,
      };
    case SET_FIRST_HEADER_ITEM_POSITION:
      return {
        ...state,
        firstHeaderItemPos: payload,
      };
    case SET_PART_VISIBILITY:
      return {
        ...state,
        showParts: payload,
      }
    default:
      return state;
  }
}
