import { createContext } from 'react';

import { SupportedThemes } from 'src/types/themes';

type ContextType = {
  theme: SupportedThemes;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: 'dark',
  toggleTheme: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});
