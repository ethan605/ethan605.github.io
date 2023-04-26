import { memo } from 'react';
import styled from 'styled-components';

import * as webgl from 'src/utils/webgl';

const Container = styled.div`
  margin: 1rem;
`;

const Result = styled.code`
  white-space: pre-wrap;
`;

const SystemInfo: React.FC = () => {
  const systemInfo = {
    user_agent: window.navigator.userAgent,
    webgl: webgl.getWebGLAttributes(),
  };

  return (
    <Container>
      <Result>{JSON.stringify(systemInfo, null, 2)}</Result>
    </Container>
  );
};

export default memo(SystemInfo);
