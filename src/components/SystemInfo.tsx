import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import detectSystem from 'src/utils/detectSystem';

const Result = styled.pre`
  white-space: pre-wrap;
`;

const SystemInfo: React.FC = () => {
  const [systemInfo, setSystemInfo] = useState({});

  useEffect(() => {
    setSystemInfo({
      ua: {
        appVersion: window.navigator.appVersion,
        platform: window.navigator.platform,
        userAgent: window.navigator.userAgent,
        vendor: window.navigator.vendor,
      },
      os: detectSystem('os'),
      browser: detectSystem('browser'),
    });
  }, []);

  return (
    <Result style={{ textAlign: 'left' }}>
      {JSON.stringify(systemInfo, null, 2)}
    </Result>
  );
};

export default SystemInfo;
