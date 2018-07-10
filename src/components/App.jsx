import React from 'react';
import { Route, Switch, } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

export default ({ history }) => (
  <ConnectedRouter history={history}>
    {/* <Header /> */}
    <Switch>
      <Route render={() => (<div>Miss</div>)} />
    </Switch>
  </ConnectedRouter>
);
