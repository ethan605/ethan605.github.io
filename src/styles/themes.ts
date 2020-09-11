import { DecorationTypes } from '../types/resume';

export type PaperSize = 'A3' | 'A4' | 'A5';

export type ColorScheme = {
  prompts: {
    item: string;
  };
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
  prompts: {
    item: 'rgb(220, 220, 220)',
  },
};

const pageSettings: PageSettings = {
  columnsGap: '0.75cm',
  fontFamily: 'Fira Code',
  fontSize: '15px',
  margin: '1.5cm 1.5cm 1cm 1.5cm',
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
    block: '2rem',
    item: '0.75rem',
    lineHeight: '1.25rem',
    prompt: '0.5rem',
    section: '1.75rem',
    title: '0.75rem',
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
