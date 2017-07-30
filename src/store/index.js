import { createStore } from 'redux';
import rootReducer from '../reducers';
import configureMiddleware from '../middleware';
import hydrateState from './hydrate';


const configureStore = () => createStore(
  rootReducer,
  hydrateState() || {},
  configureMiddleware()
);

export default configureStore;
