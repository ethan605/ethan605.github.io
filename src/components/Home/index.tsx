import React from 'react';
import styled from 'styled-components';

import { InternalLink, flexCenterStyles } from 'src/styles/primitives';
import Terminal from 'src/components/Terminal';

const Container = styled.div`
  ${flexCenterStyles}

  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Terminal>
        <InternalLink to="/resume">Resume</InternalLink>
        <InternalLink to="/system">System info</InternalLink>
      </Terminal>
    </Container>
  );
};

export default Home;
