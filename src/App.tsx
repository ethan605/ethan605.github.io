import { useCallback, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider } from 'src/contexts';
import Home from 'src/components/Home';
import SystemInfo from 'src/components/SystemInfo';
import GlobalStyles from 'src/styles/GlobalStyles';
import themes from 'src/styles/themes';
import { SupportedThemes } from 'src/types/themes';

const App: React.FC = () => {
  const [theme, changeTheme] = useState<SupportedThemes>('dark');

  const toggleTheme = useCallback(
    () => changeTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, changeTheme],
  );

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <HashRouter>
          <Routes>
            <Route path="/system" element={<SystemInfo />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default App;
