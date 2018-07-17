import { createStore, applyMiddleware } from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import getReducers from './reducers';

const NavMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)
let middleware = [thunk, NavMiddleware]

export default getStore = (navReducer) => {
    return createStore(
        getReducers(navReducer),
        applyMiddleware(...middleware)
    );
}