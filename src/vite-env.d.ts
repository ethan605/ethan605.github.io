/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import 'styled-components';
import { AppTheme } from 'src/types/themes';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends AppTheme {}
}

interface ImportMetaEnv {
  readonly VITE_CANONICAL_URL?: string;
  readonly VITE_GIT_SHA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
