import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'src/App';
import { registerServiceWorker } from 'src/utils/serviceWorker';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

/**
 * Enable PWA
 * @see https://bit.ly/CRA-PWA
 */
registerServiceWorker();
