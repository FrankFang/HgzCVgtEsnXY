import React, {useState} from 'react';
import {Router, Route, Switch} from 'react-router';
import {createHashHistory} from 'history';
import {Home} from './views/Home';

const history = createHashHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
