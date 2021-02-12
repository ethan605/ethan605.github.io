import { memo, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'src/contexts';
import HOME_DATA from 'src/data/home.json';
import { EndpointData } from 'src/types/home';
import Terminal, {
  Command,
  Path,
  TextBlock,
  TextLine,
} from 'src/components/Terminal';
import { flexCenterStyles } from 'src/styles/reusables';
import { buildIteratorKey, sampleArr } from 'src/utils';

import Corners from './Corners';
import Endpoint from './Endpoint';

const Container = styled.div<{ backgroundUrl?: string }>`
  ${flexCenterStyles}

  background: ${({ backgroundUrl }) =>
    backgroundUrl && `url('${backgroundUrl}') no-repeat center`};
  height: 100vh;
  min-width: 320px;
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
          <Path>{HOME_DATA.path}</Path>
        </TextBlock>
        <TextBlock>
          <Command>{sampleArr(HOME_DATA.commands)}</Command>
        </TextBlock>
        <TextBlock>
          <TextLine>
            {HOME_DATA.description}
            <br />
            <br />
          </TextLine>
        </TextBlock>
        <TextBlock>
          <TextLine>
            Endpoints:
            <br />
            <br />
          </TextLine>
          {(HOME_DATA.endpoints as EndpointData[]).map((endpoint) => (
            <Endpoint
              {...endpoint}
              key={`endpoint_${buildIteratorKey(endpoint.href)}`}
            />
          ))}
        </TextBlock>
      </Terminal>
      <Corners />
    </Container>
  );
};

export default memo(Home);
