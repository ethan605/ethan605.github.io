import React from 'react';
import styled, { css } from 'styled-components';
import { Facebook, File, GitHub, Linkedin, Twitter } from 'react-feather';

import { ExternalLink, InternalLink } from 'src/styles/primitives';
import { EndpointTypes, EndpointData } from 'src/types/home';
import { getColor, getSpacing } from 'src/utils/themes';

const iconStyles = css`
  margin-bottom: -0.25rem;
`;

const FacebookIcon = styled(Facebook)`
  ${iconStyles}
`;
const FileIcon = styled(File)`
  ${iconStyles}
`;
const GitHubIcon = styled(GitHub)`
  ${iconStyles}
`;
const LinkedinIcon = styled(Linkedin)`
  ${iconStyles}
`;
const TwitterIcon = styled(Twitter)`
  ${iconStyles}
`;

const ICONS_MAPPING: Record<EndpointTypes, React.ReactNode> = {
  facebook: <FacebookIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedinIcon />,
  resume: <FileIcon />,
  twitter: <TwitterIcon />,
};

const Value = styled.code`
  ::before {
    color: ${getColor('tertiary')};
    content: '/';
    margin-right: 0.25rem;
  }
`;

const Container = styled.div`
  margin-bottom: ${getSpacing('item')};
  margin-left: calc(${getSpacing('block')} * 2);
  width: fit-content;

  :hover {
    ${FacebookIcon},
    ${FacebookIcon} + ${Value} > a {
      color: #0076b2;
    }

    ${FileIcon},
    ${FileIcon} + ${Value} > a {
      color: ${getColor('primary')};
    }

    ${GitHubIcon},
    ${GitHubIcon} + ${Value} > a {
      color: #181616;
    }

    ${LinkedinIcon},
    ${LinkedinIcon} + ${Value} > a {
      color: #0076b2;
    }

    ${TwitterIcon},
    ${TwitterIcon} + ${Value} > a {
      color: #1da1f2;
    }
  }
`;

const Endpoint: React.FC<EndpointData> = ({ href, type, value }) => {
  const isExternalLink = /^http[s]*:\/\//i.test(href);

  return (
    <Container>
      {ICONS_MAPPING[type]}
      <Value>
        {isExternalLink ? (
          <ExternalLink href={href}>{value}</ExternalLink>
        ) : (
          <InternalLink to={href}>{value}</InternalLink>
        )}
      </Value>
    </Container>
  );
};

export default Endpoint;
