import { DecorationTypes } from '../types/resume';

export type PaperSize = 'A3' | 'A4' | 'A5';

export type ColorScheme = {
  background: string;
  foreground: string;
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

export type SupportedThemes = 'light' | 'dark';

export type AppTheme = {
  colors: ColorScheme;
  page: PageSettings;
} & TerminalScheme;
