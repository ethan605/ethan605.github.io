import { DecorationTypes } from '../types/resume';

export type PaperSize = 'A3' | 'A4' | 'A5';

export type ColorScheme = {
  background: string;
  forground: string;
  prompts: {
    primary: string;
    secondary: string;
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

const colorSchemeLight: ColorScheme = {
  background: '',
  forground: '',
  prompts: {
    primary: '',
    secondary: 'rgb(220, 220, 220)',
  },
  url: '',
};

/**
 * Inspired by pure-prompt & snazzy theme
 * @see https://github.com/sindresorhus/pure/blob/0a3801807dc274515dd6a2a26d56f63881ad07b4/pure.zsh#L772
 */
const colorSchemeDark: ColorScheme = {
  background: '#282A36',
  forground: '#EFF0EB',
  prompts: {
    primary: '#FF6AC1',
    secondary: '#9AEDFE',
  },
  url: '#0087BD',
};

const pageSettings: PageSettings = {
  columnsGap: '0.5cm',
  fontFamily: 'Fira Code',
  fontSize: '14px',
  margin: '1cm 1cm 0 1cm',
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
    block: '~',
    item: '↳',
    section: '❯',
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
