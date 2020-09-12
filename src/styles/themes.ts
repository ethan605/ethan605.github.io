import {
  AppTheme,
  ColorScheme,
  ContentSettings,
  PageSettings,
} from 'src/types/themes';

/**
 * Inspired by base16-github theme
 * https://github.com/kdrag0n/base16-kitty/blob/master/colors/base16-github.conf
 */
const colorSchemeLight: ColorScheme = {
  background: '#ffffff',
  foreground: '#333333',
  primary: '#a71d5d',
  secondary: '#183691',
  tertiary: '#969896',
  url: '#0086b3',
};

/**
 * Inspired by kitty-snazzy theme
 * https://github.com/connorholyday/kitty-snazzy/blob/master/snazzy.conf
 */
const colorSchemeDark: ColorScheme = {
  background: '#282a36',
  foreground: '#eff0eb',
  primary: '#ff6ac1',
  secondary: '#9aedfe',
  tertiary: '#6c6c6c',
  url: '#0087bd',
};

const pageSettings: PageSettings = {
  orientation: 'portrait',
  lineHeight: '1.2rem',
  type: 'A4',
  columnsGap: '0.7cm',
  fontFamily: `'Fira Code'`,
  fontSize: '14px',
  margin: '1.25cm 1.25cm 0.7cm 1.25cm',
  smallColumnProportion: '42.5%',
  // columnsGap: '0.75cm',
  // fontFamily: `'Operator Mono Lig'`,
  // fontSize: '15px',
  // margin: '1.5cm 1.5cm 0.75cm 1.5cm',
  // smallColumnProportion: '40%',
};

const spacingSettings: ContentSettings = {
  block: '1.5rem',
  item: '0.75rem',
  prompt: '0.5rem',
  section: '1.25rem',
  title: '1rem',
};

const promptSettings: ContentSettings = {
  block: '❯',
  item: '↳',
  section: '~',
  // item: '◦',
  // section: '•',
};

const defaultSettings = {
  page: pageSettings,
  prompts: promptSettings,
  spacing: spacingSettings,
};

const light: AppTheme = {
  ...defaultSettings,
  colors: colorSchemeLight,
};

const dark: AppTheme = {
  ...defaultSettings,
  colors: colorSchemeDark,
};

export default { light, dark };
