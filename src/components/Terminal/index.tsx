import React, { useContext } from 'react';
import styled from 'styled-components';
import { Moon, Sun } from 'react-feather';

import { ThemeContext } from 'src/contexts';
import {
  HoverToolbar,
  HoverControl,
  flexCenterStyles,
  shadowStyles,
} from 'src/styles/reusables';
import { getColor } from 'src/utils/themes';

import ControlsBar from './ControlsBar';

type MediaBreak = {
  maxWidth: string;
  width: string;
};

type Props = {
  children: React.ReactNode;
};

const MEDIA_BREAKS: MediaBreak[] = [
  { maxWidth: '1280px', width: '60vw' },
  { maxWidth: '1024px', width: '70vw' },
  { maxWidth: '768px', width: '80vw' },
  { maxWidth: '425px', width: '90vw' },
];

const buildMediaBreak = ({ maxWidth, width }: MediaBreak): string => `
  @media (max-width: ${maxWidth}) {
    width: ${width};
  }
`;

const Container = styled.div`
  ${flexCenterStyles}
  ${shadowStyles}

  align-items: stretch;
  background-color: ${getColor('background')};
  border-radius: 5px;
  color: ${getColor('foreground')};
  flex-direction: column;
  height: auto;
  max-height: 85vh;
  margin: 0 5vw 2rem;
  position: relative;
  width: 50vw;

  ${MEDIA_BREAKS.map(buildMediaBreak)}

  ${HoverToolbar} {
    display: none;
    justify-content: flex-end;
  }

  &:active ${HoverToolbar}, &:hover ${HoverToolbar} {
    display: flex;
  }
`;

const Content = styled.div`
  color: ${getColor('foreground')};
  flex: 1;
  font-family: ${({ theme }): string => theme.page.fontFamily};
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 1rem;
  overflow: auto;
`;

const Terminal: React.FC<Props> = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <ControlsBar />
      <HoverToolbar>
        <HoverControl onClick={toggleTheme} title="Toggle dark mode">
          {theme === 'light' ? <Moon /> : <Sun />}
        </HoverControl>
      </HoverToolbar>
      <Content>{children}</Content>
    </Container>
  );
};

export * from './primitives';
export default Terminal;
