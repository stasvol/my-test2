import { combineReducers, createStore } from 'redux';

import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  form: formReducer,
});
const store = createStore(
  reducers /* preloadedState, */,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
);
// eslint disable - next-line
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
// eslint-disable-next-line max-len
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
// eslint-disable-next-line max-len
// const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));

// const store = createStore(reducers, /* preloadedState, */ compose(
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
