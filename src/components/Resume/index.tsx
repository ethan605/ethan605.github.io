import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import RESUME_DATA from 'src/data/resume.json';
import themes from 'src/styles/themes';
import { ResumeData } from 'src/types/resume';
import { SupportedThemes } from 'src/types/themes';

import Block from './Block';
import PrintPaper from './PrintPaper';

type ColumnSides = 'left' | 'right';

const {
  header: HEADER_DATA,
  columns: COLUMNS_DATA,
} = RESUME_DATA as ResumeData;

const COLUMN_SIDES: ColumnSides[] = ['left', 'right'];

const Container = styled.div`
  color: ${({ theme }): string => theme.colors.foreground};
  font-family: ${({ theme }): string => theme.page.fontFamily};
  font-size: ${({ theme }): string => theme.page.fontSize};
  padding: ${({ theme }): string => theme.page.margin};

  @media print {
    padding-bottom: 0;
  }
`;

const Header = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.block || ''};
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.h2`
  color: ${({ theme }): string => theme.colors.tertiary};
  font-size: 1.25rem;
`;

const Column = styled.div<{ side: ColumnSides }>`
  float: ${({ side }): string => (side === 'left' ? 'left' : 'unset')};
  margin-right: ${({ side, theme }): string =>
    side === 'left' ? theme.page.columnsGap : 'unset'};
  overflow: hidden;
  width: ${({ side, theme }): string =>
    side === 'left' ? theme.page.smallColumnProportion : 'auto'};
`;

const Resume: React.FC = () => {
  const [currentTheme, changeTheme] = useState<SupportedThemes>('dark');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <PrintPaper
        currentTheme={currentTheme}
        onChangeTheme={(): void =>
          changeTheme(currentTheme === 'light' ? 'dark' : 'light')
        }
      >
        <Container id="resume">
          <Header>
            <Title>{HEADER_DATA.title}</Title>
            <Subtitle>{HEADER_DATA.subtitle}</Subtitle>
          </Header>
          <div>
            {COLUMN_SIDES.map((side) => (
              <Column key={`column_${side}`} side={side}>
                {COLUMNS_DATA[side].map((block) => (
                  <Block
                    {...block}
                    key={`block_${block.title.toLowerCase()}`}
                  />
                ))}
              </Column>
            ))}
          </div>
        </Container>
      </PrintPaper>
    </ThemeProvider>
  );
};

export default Resume;
