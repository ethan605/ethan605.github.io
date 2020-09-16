import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import qs from 'querystring';

import { ThemeContext } from 'src/contexts';
import Terminal from 'src/components/Terminal';
import { InternalLink, flexCenterStyles } from 'src/styles/primitives';
import { getColor, getPrompt, getSpacing } from 'src/utils/themes';

const Container = styled.div<{ backgroundUrl?: string }>`
  ${flexCenterStyles}
  background: ${({ backgroundUrl }) =>
    backgroundUrl && `url('${backgroundUrl}') no-repeat center`};

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

const Version = styled.code`
  bottom: 1rem;
  position: absolute;
  right: 1rem;
`;

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [backgroundUrl, setBackgroundUrl] = useState<string | undefined>();

  useEffect(() => {
    const { clientHeight = 0, clientWidth = 0 } =
      document.getElementById('root') || {};

    setBackgroundUrl(
      `https://picsum.photos/${clientWidth}/${clientHeight}?blur=3${
        theme === 'dark' ? '&grayscale' : ''
      }`
    );
  }, [theme]);

  return (
    <Container backgroundUrl={backgroundUrl}>
      <Terminal>
        <CommandLine>
          <InternalLink to="/resume">resume</InternalLink>
        </CommandLine>
      </Terminal>
      <Version>{process.env.REACT_APP_GITHUB_SHA || 'GITHUB_SHA'}</Version>
    </Container>
  );
};

export default Home;
