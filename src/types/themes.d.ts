export type PaperDimensions = 'height' | 'width';
export type PaperOrientations = 'landscape' | 'portrait';
export type PaperTypes = 'A4' | 'B4' | 'legal' | 'letter';

export type PaperSizesMapping = {
  [key in PaperTypes]: { width: string; height: string };
};

export type ColorScheme = {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  tertiary: string;
  url: string;
};

export type PageSettings = {
  columnsGap: string;
  fontFamily: string;
  fontSize: string;
  margin: string;
  orientation: PaperOrientations;
  smallColumnProportion: string;
  lineHeight: string;
  type: PaperTypes;
};

export type ContentSettings = {
  block?: string;
  item?: string;
  prompt?: string;
  section?: string;
  title?: string;
};

export type SupportedThemes = 'light' | 'dark';

export type AppTheme = {
  colors: ColorScheme;
  page: PageSettings;
  prompts: ContentSettings;
  spacing: ContentSettings;
};
