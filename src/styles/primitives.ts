import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { getColor } from 'src/utils/themes';

const anchorStyles = css`
  color: ${getColor('foreground')};
  highlight: none;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${getColor('url')};
  }
`;

export const shadowStyles = css`
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.55);
`;

export const ExternalLink = styled.a`
  ${anchorStyles}
`;

ExternalLink.defaultProps = {
  rel: 'noreferrer',
  target: '_blank',
};

export const InternalLink = styled(Link)`
  ${anchorStyles}
`;
