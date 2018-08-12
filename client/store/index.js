import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import color from './color';
// import menu from './menu';
import settings from './settings';

// const reducer = combineReducers({color, menu});
const reducer = combineReducers({settings});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));
const store = createStore(reducer, middleware);

export default store;
// export * from './color';
// export * from './menu';
export * from './settings';
