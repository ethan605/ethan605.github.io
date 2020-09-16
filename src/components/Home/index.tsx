import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Facebook, File, GitHub, Linkedin, Twitter } from 'react-feather';

import { ThemeContext } from 'src/contexts';
import Terminal from 'src/components/Terminal';
import {
  ExternalLink,
  InternalLink,
  flexCenterStyles,
} from 'src/styles/primitives';
import { buildIteratorKey } from 'src/utils';
import { getColor, getPrompt, getSpacing } from 'src/utils/themes';

import Corners from './Corners';

type EndpointData = {
  href: string;
  icon: React.ReactNode;
  internal?: boolean;
  value: string;
};

const ENDPOINTS_DATA: EndpointData[] = [
  {
    icon: <Linkedin />,
    value: 'ethan605',
    href: 'https://linkedin.com/in/ethan605',
  },
  {
    icon: <GitHub />,
    value: 'ethan605',
    href: 'https://github.com/ethan605',
  },
  {
    icon: <Facebook />,
    value: 'ethan605',
    href: 'https://facebook.com/ethan605',
  },
  {
    icon: <Twitter />,
    value: '@ethan605',
    href: 'https://twitter.com/@ethan605',
  },
  {
    icon: <File />,
    value: 'resume',
    href: '/resume',
    internal: true,
  },
];

const Container = styled.div<{ backgroundUrl?: string }>`
  ${flexCenterStyles}

  background: ${({ backgroundUrl }) =>
    backgroundUrl && `url('${backgroundUrl}') no-repeat center`};
  height: 100vh;
  min-width: 320px;
`;

const TextBlock = styled.div`
  margin-bottom: ${getSpacing('item')};
`;

const Path = styled.code`
  color: ${getColor('secondary')};

  ::before {
    color: ${getColor('secondary')};
    content: ${getPrompt('section')};
  }
`;

const Command = styled.code`
  ::before {
    color: ${getColor('primary')};
    content: ${getPrompt('block')};
    margin-right: ${getSpacing('prompt')};
  }

  ::after {
    color: ${getColor('tertiary')};
    content: '↵';
    margin-left: ${getSpacing('prompt')};
  }
`;

const Endpoint = styled.div`
  margin-bottom: ${getSpacing('item')};
  margin-left: calc(${getSpacing('block')} * 2);
`;

const EndpointValue = styled.code`
  ::before {
    content: '/';
  }
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
        <TextBlock>
          <Path>/ethanify</Path>
        </TextBlock>
        <TextBlock>
          <Command>about</Command>
        </TextBlock>
        <TextBlock>
          Passionate about creating awesome products that help plenty of people
          improving their lives.
          <br />
          <br />
        </TextBlock>
        <TextBlock>
          Endpoints:
          <br />
          <br />
          {ENDPOINTS_DATA.map(({ href, icon, internal, value }) => (
            <Endpoint key={`endpoint_${buildIteratorKey(href)}`}>
              {icon}
              <EndpointValue>
                {internal ? (
                  <InternalLink to={href}>{value}</InternalLink>
                ) : (
                  <ExternalLink href={href}>{value}</ExternalLink>
                )}
              </EndpointValue>
            </Endpoint>
          ))}
        </TextBlock>
      </Terminal>
      <Corners />
    </Container>
  );
};

export default Home;
