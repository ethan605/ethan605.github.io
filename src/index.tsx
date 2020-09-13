import React from 'react';
import ReactDOM from 'react-dom';

import Resume from './components/Resume';
import GlobalStyles from './styles/GlobalStyles';
import { registerServiceWorker } from './utils/serviceWorker';

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
registerServiceWorker();
