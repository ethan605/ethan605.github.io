import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import RESUME_DATA from 'src/data/resume.json';
import themes from 'src/styles/themes';
import { ResumeData } from 'src/types/resume';
import { SupportedThemes } from 'src/types/themes';
import { buildIteratorKey } from 'src/utils';
import { getColor, getPageSize, getSpacing } from 'src/utils/themes';

import Block from './Block';
import Printable from './Printable';

type ColumnSides = 'left' | 'right';

const {
  header: HEADER_DATA,
  columns: COLUMNS_DATA,
} = RESUME_DATA as ResumeData;

const COLUMN_SIDES: ColumnSides[] = ['left', 'right'];

const Header = styled.div`
  margin-bottom: ${getSpacing('block')};
  text-align: center;
`;

const Title = styled.h1`
  color: ${getColor('primary')};
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.h2`
  color: ${getColor('secondary')};
  font-size: 1.25rem;
`;

const Column = styled.div<{ side: ColumnSides }>`
  float: ${({ side }): string => (side === 'left' ? 'left' : 'unset')};
  margin-right: ${({ side, theme }): string =>
    side === 'left' ? theme.page.columnsGap : 'unset'};
  overflow: hidden;
  width: ${({ side, theme }): string =>
    side === 'left' ? theme.page.smallColumnProportion : 'auto'};

  @media only screen and (max-width: calc(${getPageSize('width')} * 0.75)) {
    float: unset;
    width: unset;
  }
`;

const Resume: React.FC = () => {
  const [currentTheme, changeTheme] = useState<SupportedThemes>('dark');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Printable
        currentTheme={currentTheme}
        onChangeTheme={(): void =>
          changeTheme(currentTheme === 'light' ? 'dark' : 'light')
        }
      >
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
                  key={`block_${buildIteratorKey(block.title)}`}
                />
              ))}
            </Column>
          ))}
        </div>
      </Printable>
    </ThemeProvider>
  );
};

export default Resume;
