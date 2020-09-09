/// <reference types="react-scripts" />

import {} from 'styled-components';
import { ResumeTheme } from './styles/themes';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ResumeTheme {}
}
