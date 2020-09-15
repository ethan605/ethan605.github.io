import React, { useContext } from 'react';
import styled from 'styled-components';
import { Moon, Sun } from 'react-feather';

import { ThemeContext } from 'src/contexts';
import {
  HoverToolbar,
  HoverControl,
  flexCenterStyles,
  shadowStyles,
} from 'src/styles/primitives';
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
  { maxWidth: '1024px', width: '70vw' },
  { maxWidth: '768px', width: '80vw' },
  { maxWidth: '425px', width: '90vw' },
];

const buildWindowSize = (width: string): string => `
  height: calc(${width} * 2 / 3);
  width: ${width};
`;

const buildMediaBreak = ({ maxWidth, width }: MediaBreak): string => `
  @media (max-width: ${maxWidth}) {
    ${buildWindowSize(width)}
  }
`;

const Container = styled.div`
  ${flexCenterStyles}
  ${shadowStyles}

  align-items: stretch;
  background-color: ${getColor('background')};
  color: ${getColor('foreground')};
  border-radius: 5px;
  flex-direction: column;
  margin: 0 auto;
  max-height: 90vh;
  overflow: hidden;
  position: relative;

  ${buildWindowSize('60vh')}
  ${MEDIA_BREAKS.map(buildMediaBreak).join('\n')}

  ${HoverToolbar} {
    display: none;
    justify-content: flex-end;
  }

  &:active ${HoverToolbar}, &:hover ${HoverToolbar} {
    display: flex;
  }
`;

const Content = styled.div`
  ${flexCenterStyles}

  color: #eff0eb;
  justify-content: space-evenly;
  flex: 1;
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

export default Terminal;
