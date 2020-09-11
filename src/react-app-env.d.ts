/// <reference types="react-scripts" />

import {} from 'styled-components';
import { AppTheme } from './types/themes';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends AppTheme {}
}
