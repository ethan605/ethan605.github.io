import React from 'react';
import styled from 'styled-components';

import detectSystem from 'src/utils/detectSystem';

const Container = styled.div`
  margin: 1rem;
`;

const Result = styled.code`
  white-space: pre-wrap;
`;

const SystemInfo: React.FC = () => {
  const systemInfo = {
    navigator: {
      appVersion: window.navigator.appVersion,
      platform: window.navigator.platform,
      userAgent: window.navigator.userAgent,
      vendor: window.navigator.vendor,
    },
    os: detectSystem('os'),
    browser: detectSystem('browser'),
  };

  return (
    <Container>
      <Result>{JSON.stringify(systemInfo, null, 2)}</Result>
    </Container>
  );
};

export default SystemInfo;
