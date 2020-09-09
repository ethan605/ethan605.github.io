import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Noto Sans:400', 'Source Code Pro:300,400,500'],
  },
});

const GlobalStyles = createGlobalStyle`
 :root {
    margin: 0;
    font-family: 'Noto Sans', 'Segoe UI', 'Roboto', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  code {
    font-family: 'Source Code Pro', Menlo, Monaco, Consolas, monospace;
  }

  #resume {
    font-family: 'Source Code Pro', Menlo, Monaco, Consolas, monospace;
  }
`;

export default GlobalStyles;
