import { useCallback, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from 'src/contexts';
import Home from 'src/components/Home';
import Resume from 'src/components/Resume';
import SystemInfo from 'src/components/SystemInfo';
import GlobalStyles from 'src/styles/GlobalStyles';
import themes from 'src/styles/themes';
import { SupportedThemes } from 'src/types/themes';

const App: React.FC = () => {
  const [theme, changeTheme] = useState<SupportedThemes>('dark');

  const toggleTheme = useCallback(
    () => changeTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <HashRouter>
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
        </HashRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
