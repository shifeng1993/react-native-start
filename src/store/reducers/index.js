import { combineReducers } from 'redux';

import config from './config'

const reducers = {
  config
};

//和导航相关的reducer通过从调用出传递进来
export default getReducers = (navReducer) => {
    return combineReducers({
        ...reducers,
        nav: navReducer
    });
}