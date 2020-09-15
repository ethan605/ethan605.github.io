import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InternalLink, flexCenterStyles } from 'src/styles/primitives';
import themes from 'src/styles/themes';
import Terminal from './Terminal';

const Container = styled.div`
  ${flexCenterStyles}

  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Container>
        <Terminal>
          <InternalLink to="/resume">Resume</InternalLink>
          <InternalLink to="/system">System info</InternalLink>
        </Terminal>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
