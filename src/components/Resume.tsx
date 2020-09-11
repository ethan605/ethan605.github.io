import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import RESUME_DATA from '../data/resume.json';
import { light as lightTheme } from '../styles/themes';
import { ResumeData } from '../types/resume';

import Block from './Block';
import Sheet from './Sheet';

type ColumnSide = 'left' | 'right';

const Container = styled.div`
  font-family: ${({ theme }): string => theme.page.fontFamily};
  font-size: ${({ theme }): string => theme.page.fontSize};
`;

const Header = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.block};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.75rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
`;

const Column = styled.div<{ side: ColumnSide }>`
  float: ${({ side }): string => (side === 'left' ? 'left' : 'unset')};
  margin-right: ${({ side, theme }): string =>
    side === 'left' ? theme.page.columnsGap : 'unset'};
  overflow: hidden;
  width: ${({ side, theme }): string =>
    side === 'left' ? theme.page.smallColumnProportion : 'auto'};
`;

const Resume: React.FC = () => {
  const { header, columns } = RESUME_DATA as ResumeData;

  return (
    <ThemeProvider theme={lightTheme}>
      <Sheet>
        <Container id="resume">
          <Header>
            <Title>{header.title}</Title>
            <Subtitle>{header.subtitle}</Subtitle>
          </Header>
          <Container>
            {(['left', 'right'] as ColumnSide[]).map((side) => (
              <Column key={`column_${side}`} side={side}>
                {columns[side].map((block) => (
                  <Block
                    {...block}
                    key={`block_${block.title.toLowerCase()}`}
                  />
                ))}
              </Column>
            ))}
          </Container>
        </Container>
      </Sheet>
    </ThemeProvider>
  );
};

export default Resume;
