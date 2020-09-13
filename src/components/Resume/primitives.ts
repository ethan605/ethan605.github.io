import styled from 'styled-components';

import { getColor } from 'src/utils/themes';

export const Anchor = styled.a`
  color: inherit;
  highlight: none;
  text-decoration: none;

  &:active,
  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
    color: ${getColor('url')};
  }
`;

Anchor.defaultProps = {
  rel: 'noreferrer',
  target: '_blank',
};
