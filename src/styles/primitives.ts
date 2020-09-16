import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { getColor } from 'src/utils/themes';

const anchorStyles = css`
  color: ${getColor('foreground')};
  highlight: none;
  text-decoration: none;

  &:hover {
    color: ${getColor('url')};
    text-decoration: underline;
  }
`;

export const flexCenterStyles = css`
  align-items: center;
  display: flex;
  justify-content: center;
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

export const HoverToolbar = styled.div`
  ${flexCenterStyles}

  justify-content: space-between;
  left: 0;
  padding: 1rem 0.5rem 0 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
`;

export const HoverControl = styled.button`
  background-color: ${getColor('foreground')};
  border-radius: 0.25rem;
  border: none;
  color: ${getColor('background')};
  cursor: pointer;
  font-size: 1.75rem;
  margin: 0 0.5rem;
  opacity: 0.5;
  outline: none;
  padding: 0.5rem;
  padding-bottom: 0.3rem;

  &:active,
  &:hover {
    opacity: 1;
  }
`;
