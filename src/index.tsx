import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Resume from './components/Resume';
import SystemInfo from './components/SystemInfo';
import GlobalStyles from './styles/GlobalStyles';
import { registerServiceWorker } from './utils/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/system">
          <SystemInfo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * Enable PWA
 * @see https://bit.ly/CRA-PWA
 */
registerServiceWorker();
