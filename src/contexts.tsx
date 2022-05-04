import { ReactNode, createContext, useContext } from 'react';

import { SupportedThemes } from 'src/types/themes';

type ContextType = {
  theme: SupportedThemes;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
  value: ContextType;
};

export const ThemeProvider: React.FC<Props> = ({ children, value }) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

export const useTheme = (): ContextType => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error(`ThemeContext wasn't initialised!`);
  }

  return theme;
};
