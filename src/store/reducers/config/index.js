import {SET_THEME} from '../../actions/actionTypes';

let configState = {
  // 主题
  theme: 'light'
}

export default config = (state = configState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        userinfo: action.data
      };
    default:
      return state;
  }
}