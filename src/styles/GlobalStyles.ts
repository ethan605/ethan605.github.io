import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import { normalize } from 'styled-normalize';

WebFont.load({
  google: {
    families: ['Noto Sans', 'Source Code Pro'],
  },
});

const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    font-family: 'Noto Sans', 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code, #resume {
    font-family: 'Source Code Pro', Menlo, Monaco, Consolas, monospace;
  }
`;

export default GlobalStyles;
