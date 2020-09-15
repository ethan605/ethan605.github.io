/* import React from 'react';

import { SupportedThemes } from 'src/types/themes';

// export const ThemeContext = createContext<SupportedThemes>('dark');

const useTheme = (): [SupportedThemes, () => void] => {
  const [currentTheme, changeTheme] = React.useState<SupportedThemes>('dark');

  React.useEffect(() => {
    console.log('theme changed', currentTheme);
  }, [currentTheme]);

  const toggleTheme = React.useCallback(() => {
    changeTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, [currentTheme, changeTheme]);

  return [currentTheme, toggleTheme];
};

export default useTheme; */

export const useTheme = (): boolean => true;
