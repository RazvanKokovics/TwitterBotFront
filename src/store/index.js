import { createStore, compose, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';

import { rootReducer } from '../reducers';
import apiMiddleware from '../middlewares/apiMiddleware';

//const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      apiMiddleware,
      //thunkMiddleware,
      //loggerMiddleware,
    ),
  ),
);