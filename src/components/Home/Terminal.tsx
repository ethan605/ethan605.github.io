import React from 'react';
import styled from 'styled-components';

import { shadowStyles } from 'src/styles/primitives';
import { getColor } from 'src/utils/themes';
import ControlsBar from './ControlsBar';

type Props = {
  children: React.ReactNode;
};

type MediaBreak = {
  maxWidth: string;
  width: string;
};

const MEDIA_BREAKS: MediaBreak[] = [
  { maxWidth: '1024px', width: '70vw' },
  { maxWidth: '768px', width: '80vw' },
  { maxWidth: '425px', width: '90vw' },
];

const buildMediaBreak = ({ maxWidth, width }: MediaBreak): string => `
  @media (max-width: ${maxWidth}) {
    height: calc(${width} * 2 / 3);
    width: ${width};
  }
`;

const Container = styled.div`
  ${shadowStyles}

  align-items: stretch;
  background-color: ${getColor('background')};
  color: ${getColor('foreground')};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: calc(60vw * 2 / 3);
  margin: 0 auto;
  max-height: 90vh;
  overflow: hidden;
  width: 60vw;

  ${MEDIA_BREAKS.map(buildMediaBreak).join('\n')}
`;

const Content = styled.div`
  align-items: center;
  color: #eff0eb;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`;

const Terminal: React.FC<Props> = ({ children }) => (
  <Container>
    <ControlsBar />
    <Content>{children}</Content>
  </Container>
);

export default Terminal;
