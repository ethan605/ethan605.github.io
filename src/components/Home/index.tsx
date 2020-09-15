import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InternalLink } from 'src/styles/primitives';
import themes from 'src/styles/themes';
import Terminal from './Terminal';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
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
