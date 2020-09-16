/// <reference types="react-scripts" />

import 'styled-components';
import { AppTheme } from 'src/types/themes';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends AppTheme {}
}
