import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import App from './components/App';
import configureStore from './utils';
import reducers from './reducers';
import * as actions from './actions';
import registerServiceWorker from './registerServiceWorker';

const run = () => {
  const history = createHistory();
  const store = configureStore(reducers, {}, history);

  store.dispatch(actions.init()); // here you can dispatch some preparation actions

  // if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_USE_TESTNET === 1) {
  //   const { REACT_APP_WS_URL, REACT_APP_CHAIN_ID } = process.env;
  //   golos.config.set('websocket', REACT_APP_WS_URL);
  //   golos.config.set('chain_id', REACT_APP_CHAIN_ID);
  // }

  ReactDOM.render(
    <Provider store={ store }>
      <App history={ history } />
    </Provider>
  , document.getElementById('root'));
  registerServiceWorker();
};

run();