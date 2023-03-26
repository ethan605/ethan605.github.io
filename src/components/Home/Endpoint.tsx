import { memo } from 'react';
import styled, { css } from 'styled-components';
import {
  Facebook,
  File,
  GitHub,
  Linkedin,
  Twitter,
  Key as XKPasswd,
} from 'react-feather';

import { ExternalLink } from 'src/styles/reusables';
import { EndpointTypes, EndpointData } from 'src/types/home';
import { getColor, getSpacing } from 'src/utils/themes';
import { ReactComponent as Keybase } from './keybase.svg';
import { useTheme } from 'src/contexts';

import packageInfo from '../../../package.json';

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
const XKPasswdIcon = styled(XKPasswd)`
  ${iconStyles}
`;

const ICONS_MAPPING: Record<EndpointTypes, React.ReactNode> = {
  facebook: <FacebookIcon />,
  github: <GitHubIcon />,
  keybase: <KeybaseIcon />,
  linkedin: <LinkedinIcon />,
  resume: <FileIcon />,
  twitter: <TwitterIcon />,
  xkpasswd: <XKPasswdIcon />,
};

const BRANDING_COLORS: Record<Exclude<EndpointTypes, 'resume'>, string> = {
  facebook: '#0076b2',
  github: '#181616',
  keybase: '#ff6f21',
  linkedin: '#0076b2',
  twitter: '#1da1f2',
  xkpasswd: '#ff5c57',
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

    ${XKPasswdIcon},
    ${XKPasswdIcon} + ${Value} > a {
      color: ${BRANDING_COLORS.xkpasswd};
    }
  }
`;

const Endpoint: React.FC<EndpointData> = ({
  interpolated = false,
  href,
  type,
  value,
}) => {
  const { theme } = useTheme();

  let url = href;

  if (interpolated) {
    url = href
      .replaceAll('{theme}', theme)
      .replaceAll('{version}', packageInfo.resume_version);
  }

  return (
    <Container>
      {ICONS_MAPPING[type]}
      <Value>
        <ExternalLink href={url}>{value}</ExternalLink>
      </Value>
    </Container>
  );
};

export default memo(Endpoint);
