import React from 'react';
import styled, { css } from 'styled-components';

import packageInfo from '../../../package.json';
import { ExternalLink } from 'src/styles/primitives';
import { getColor } from 'src/utils/themes';

const bottomStyles = css`
  bottom: 1rem;
  color: ${getColor('foreground')};
  font-size: 0.8rem;
  position: absolute;
`;

const Credit = styled.span`
  ${bottomStyles}

  left: 1rem;
`;

const Version = styled.code`
  ${bottomStyles}

  right: 1rem;

  ::before {
    color: ${getColor('foreground')};
    content: '@';
    margin-right: 0.2rem;
  }
`;

const Corners: React.FC = () => {
  const commitHash = process.env.REACT_APP_GITHUB_SHA || '';

  const repoUrl = packageInfo.repository.url.replace(/\.git$/i, '/commit');
  const shortHash = commitHash.substr(0, 7);

  return (
    <>
      <Credit>
        {'Images by '}
        <ExternalLink href="https://picsum.photos">Unsplash</ExternalLink>
      </Credit>
      {commitHash && (
        <Version>
          <ExternalLink href={`${repoUrl}/${commitHash}`}>
            {shortHash}
          </ExternalLink>
        </Version>
      )}
    </>
  );
};

export default Corners;
