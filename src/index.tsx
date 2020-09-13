import React from 'react';
import ReactDOM from 'react-dom';

import Resume from './components/Resume';
import * as serviceWorker from './utils/serviceWorker';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Resume />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * Enable PWA
 * @see https://bit.ly/CRA-PWA
 */
serviceWorker.register();
