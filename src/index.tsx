import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from 'src/App';
import { registerServiceWorker } from 'src/utils/serviceWorker';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

/**
 * Enable PWA
 * @see https://bit.ly/CRA-PWA
 */
registerServiceWorker();
