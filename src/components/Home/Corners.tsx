import { memo } from 'react';
import styled, { css } from 'styled-components';

import packageInfo from '../../../package.json';
import { ExternalLink } from 'src/styles/reusables';
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
  const commitHash = import.meta.env.VITE_GIT_SHA || '';

  const repoUrl = packageInfo.repository.url.replace(/\.git$/i, '/commit');

  return (
    <>
      <Credit>
        {'Images by '}
        <ExternalLink href="https://picsum.photos">Unsplash</ExternalLink>
      </Credit>
      {commitHash && (
        <Version>
          <ExternalLink href={`${repoUrl}/${commitHash}`}>
            {commitHash}
          </ExternalLink>
        </Version>
      )}
    </>
  );
};

export default memo(Corners);
