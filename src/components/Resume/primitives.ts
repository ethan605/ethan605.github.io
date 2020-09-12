import styled from 'styled-components';

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
    color: ${({ theme }): string => theme.colors.url};
  }
`;
