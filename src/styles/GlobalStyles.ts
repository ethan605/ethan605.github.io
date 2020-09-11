import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import { normalize } from 'styled-normalize';

WebFont.load({
  google: {
    families: ['Fira Code', 'Oxygen'],
  },
});

const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    font-family: 'Oxygen', 'PT Sans', 'Segoe UI', 'Ubuntu', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0
  }

  ul {
    list-style: none;
    padding: 0;
  }

  code {
    font-family: 'Fira Code', Menlo, Monaco, Consolas, monospace;
  }
`;

export default GlobalStyles;
