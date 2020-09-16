import React from 'react';
import styled from 'styled-components';

import packageInfo from '../../../package.json';
import { ExternalLink } from 'src/styles/primitives';

const Container = styled.code`
  font-size: 0.8rem;
  bottom: 1rem;
  position: absolute;
  right: 1rem;
`;

const Version: React.FC = () => {
  const commitHash = process.env.REACT_APP_GITHUB_SHA || '';

  if (!commitHash) {
    return null;
  }

  const repoUrl = packageInfo.repository.url.replace(/\.git$/i, '/commit');
  const shortHash = commitHash.substr(0, 6);

  return (
    <Container>
      <ExternalLink href={`${repoUrl}/${commitHash}`}>
        @{shortHash}
      </ExternalLink>
    </Container>
  );
};

export default Version;
