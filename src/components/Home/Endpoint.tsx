import { memo } from 'react';
import styled, { css } from 'styled-components';
import { Facebook, File, GitHub, Linkedin, Twitter } from 'react-feather';

import { ExternalLink, InternalLink } from 'src/styles/reusables';
import { EndpointTypes, EndpointData } from 'src/types/home';
import { getColor, getSpacing } from 'src/utils/themes';
import { ReactComponent as Keybase } from './keybase.svg';

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
const KeybaseIcon = styled(Keybase)`
  ${iconStyles}
  fill: ${getColor('foreground')};
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
  keybase: <KeybaseIcon />,
  linkedin: <LinkedinIcon />,
  resume: <FileIcon />,
  twitter: <TwitterIcon />,
};

const BRANDING_COLORS: Record<Exclude<EndpointTypes, 'resume'>, string> = {
  facebook: '#0076b2',
  github: '#181616',
  keybase: '#ff6f21',
  linkedin: '#0076b2',
  twitter: '#1da1f2',
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
      color: ${BRANDING_COLORS.facebook};
    }

    ${FileIcon},
    ${FileIcon} + ${Value} > a {
      color: ${getColor('primary')};
    }

    ${GitHubIcon},
    ${GitHubIcon} + ${Value} > a {
      color: ${BRANDING_COLORS.github};
    }

    ${KeybaseIcon} {
      fill: ${BRANDING_COLORS.keybase};
    }

    ${KeybaseIcon} + ${Value} > a {
      color: ${BRANDING_COLORS.keybase};
    }

    ${LinkedinIcon},
    ${LinkedinIcon} + ${Value} > a {
      color: ${BRANDING_COLORS.linkedin};
    }

    ${TwitterIcon},
    ${TwitterIcon} + ${Value} > a {
      color: ${BRANDING_COLORS.twitter};
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

export default memo(Endpoint);
