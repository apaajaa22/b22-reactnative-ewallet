import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import reducer from './reducer.js';

export default () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return {store, persistor};
};
