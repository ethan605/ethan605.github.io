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

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [backgroundUrl, setBackgroundUrl] = useState<string | undefined>();

  useEffect(() => {
    const { clientHeight = 0, clientWidth = 0 } =
      document.getElementById('root') || {};

    const params = qs.stringify({
      blur: 3,
      grayscale: theme === 'dark' ? '' : undefined,
    });

    console.log('params:', params);

    setBackgroundUrl(
      `https://picsum.photos/${clientWidth}/${clientHeight}?${params}`
    );
  }, [theme]);

  return (
    <Container backgroundUrl={backgroundUrl}>
      <Terminal>
        <CommandLine>
          <InternalLink to="/resume">resume</InternalLink>
        </CommandLine>
      </Terminal>
    </Container>
  );
};

export default Home;
