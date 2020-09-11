import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import RESUME_DATA from '../data/resume.json';
import { dark as darkTheme } from '../styles/themes';
import { ResumeData } from '../types/resume';

import Block from './Block';
import Sheet from './Sheet';

type ColumnSide = 'left' | 'right';

const Container = styled.div`
  color: ${({ theme }): string => theme.colors.forground};
  font-family: ${({ theme }): string => theme.page.fontFamily};
  font-size: ${({ theme }): string => theme.page.fontSize};
  padding: ${({ theme }): string => theme.page.margin};

  @media print {
    padding-bottom: 0;
  }
`;

const Header = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.block};
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.prompts.primary};
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.h2`
  color: ${({ theme }): string => theme.colors.prompts.tertiary};
  font-size: 1.25rem;
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
    <ThemeProvider theme={darkTheme}>
      <Sheet>
        <Container id="resume">
          <Header>
            <Title>{header.title}</Title>
            <Subtitle>{header.subtitle}</Subtitle>
          </Header>
          <div>
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
          </div>
        </Container>
      </Sheet>
    </ThemeProvider>
  );
};

export default Resume;
