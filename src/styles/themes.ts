import { DecorationTypes } from '../types/resume';

export type PaperSize = 'A3' | 'A4' | 'A5';

export type ColorScheme = {
  background: string;
  forground: string;
  prompts: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  url: string;
};

export type PageSettings = {
  columnsGap: string;
  fontFamily: string;
  fontSize: string;
  margin: string;
  orientation: 'landscape' | 'portrait';
  size: PaperSize;
  smallColumnProportion: string;
};

export type TerminalScheme = {
  decorators: { [key in DecorationTypes]: string };
  spacing: {
    block: string;
    item: string;
    lineHeight: string;
    prompt: string;
    section: string;
    title: string;
  };
  prompts: {
    block: string;
    section: string;
    item: string;
  };
};

export type ResumeTheme = {
  colors: ColorScheme;
  page: PageSettings;
} & TerminalScheme;

/**
 * Inspired by base16-github theme
 * https://github.com/kdrag0n/base16-kitty/blob/master/colors/base16-github.conf
 */
const colorSchemeLight: ColorScheme = {
  background: '#ffffff',
  forground: '#333333',
  prompts: {
    primary: '#a71d5d',
    secondary: '#183691',
    tertiary: '#969896',
  },
  url: '#0086b3',
};

/**
 * Inspired by kitty-snazzy theme
 * https://github.com/connorholyday/kitty-snazzy/blob/master/snazzy.conf
 */
const colorSchemeDark: ColorScheme = {
  background: '#282a36',
  forground: '#eff0eb',
  prompts: {
    primary: '#ff6ac1',
    secondary: '#9aedfe',
    tertiary: '#6c6c6c',
  },
  url: '#0087bd',
};

const pageSettings: PageSettings = {
  columnsGap: '0.5cm',
  fontFamily: `'Operator Mono Lig', 'Fira Code'`,
  fontSize: '14px',
  margin: '1cm 1cm 0.5cm 1cm',
  orientation: 'portrait',
  size: 'A4',
  smallColumnProportion: '40%',
};

const terminalScheme: TerminalScheme = {
  decorators: {
    email: '📧',
    homepage: '👤',
    location: '🌍',
    phone: '📞',
  },
  spacing: {
    block: '1.5rem',
    item: '0.75rem',
    lineHeight: '1.2rem',
    prompt: '0.5rem',
    section: '1.25rem',
    title: '1rem',
  },
  prompts: {
    block: '❯',
    item: '↳',
    section: '~',
  },
};

export const light: ResumeTheme = {
  colors: colorSchemeLight,
  page: pageSettings,
  ...terminalScheme,
};

export const dark: ResumeTheme = {
  colors: colorSchemeDark,
  page: pageSettings,
  ...terminalScheme,
};
