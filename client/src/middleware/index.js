import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import localStore from './localStore';


let middleware = [
  thunk,
  localStore
];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, logger];
}

const configureMiddleware = () => applyMiddleware(...middleware);

export default configureMiddleware;
