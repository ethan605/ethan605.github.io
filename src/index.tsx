import React from 'react';
import ReactDOM from 'react-dom';

import App from 'src/App';
import { registerServiceWorker } from 'src/utils/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * Enable PWA
 * @see https://bit.ly/CRA-PWA
 */
registerServiceWorker();
