import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export default function configureStore (reducers, initialState, history) {
  const middlewares = [
    thunk,
    createLogger(),
    routerMiddleware(history)
  ];

  const store = createStore(
    connectRouter(history)(reducers), 
    initialState, 
    composeWithDevTools(
      applyMiddleware(...middlewares),
  ));

  return store;
};