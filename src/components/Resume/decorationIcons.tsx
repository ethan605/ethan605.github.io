import React from 'react';
import styled, { css } from 'styled-components';
import {
  Home as FeatherHome,
  Mail as FeatherMail,
  MapPin as FeatherMapPin,
  Phone as FeatherPhone,
} from 'react-feather';

import { DecorationTypes } from 'src/types/resume';

const featherIconStyles = css`
  margin-right: ${({ theme }): string => theme.spacing.prompt || ''};
  width: ${({ theme }): string => theme.page.fontSize};
`;

export const Home = styled(FeatherHome)`
  ${featherIconStyles}
`;

export const Mail = styled(FeatherMail)`
  ${featherIconStyles}
`;

export const MapPin = styled(FeatherMapPin)`
  ${featherIconStyles}
`;

export const Phone = styled(FeatherPhone)`
  ${featherIconStyles}
`;

const decorationIcons: { [key in DecorationTypes]: React.ReactNode } = {
  email: <Mail />,
  homepage: <Home />,
  location: <MapPin />,
  phone: <Phone />,
};

export default decorationIcons;
