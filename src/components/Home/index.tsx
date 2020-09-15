import React from 'react';
import styled from 'styled-components';

import Terminal from 'src/components/Terminal';
import { InternalLink, flexCenterStyles } from 'src/styles/primitives';
import { getPrompt, getSpacing } from 'src/utils/themes';

const Container = styled.div`
  ${flexCenterStyles}

  height: 100vh;
`;

const CommandLine = styled.code`
  display: block;
  margin-bottom: ${getSpacing('item')};

  ::before {
    content: ${getPrompt('block')};
    margin-right: ${getSpacing('prompt')};
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Terminal>
        <CommandLine>
          <InternalLink to="/resume">resume</InternalLink>
        </CommandLine>
        <CommandLine>
          <InternalLink to="/sys-info">sys-info</InternalLink>
        </CommandLine>
      </Terminal>
    </Container>
  );
};

export default Home;
