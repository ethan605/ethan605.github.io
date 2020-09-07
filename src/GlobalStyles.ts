import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Noto Sans:400'],
  },
});

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Noto Sans', 'Segoe UI', 'Roboto', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyles;
