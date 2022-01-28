import {
  SET_MAIN_TAB,
  SET_LOGO_POSITION,
  SET_FIRST_HEADER_ITEM_POSITION,
  SET_PART_VISIBILITY,
  SET_WIDGET,
} from '../constants';

const initialState = {
  mainTab: 'order',
  logoPosition: null,
  firstHeaderItemPos: null,
  showParts: false,
  widget: false,
  iframeUrl: '',
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
    case SET_WIDGET:
      const { widget, iframeUrl } = payload;
      return {
        ...state,
        widget,
        iframeUrl,
      }
    default:
      return state;
  }
}
