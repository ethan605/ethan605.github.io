import React from 'react';
import styled from 'styled-components';

import Terminal from 'src/components/Terminal';
import { InternalLink, flexCenterStyles } from 'src/styles/primitives';
import { getColor, getPrompt, getSpacing } from 'src/utils/themes';

const Container = styled.div`
  ${flexCenterStyles}

  height: 100vh;
`;

const CommandLine = styled.code`
  display: block;
  margin-bottom: ${getSpacing('item')};

  ::before {
    color: ${getColor('primary')};
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
      </Terminal>
    </Container>
  );
};

export default Home;
