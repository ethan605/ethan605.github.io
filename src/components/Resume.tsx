import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import RESUME_DATA from '../data/resume.json';
import { buildIteratorKey } from '../helpers/utils';
import { light as lightTheme } from '../styles/themes';
import { ResumeData } from '../types/resume';

import Block from './Block';
import Entries from './Entries';
import Section from './Section';
import Sheet from './Sheet';

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

const Column = styled.div<{ side: 'left' | 'right' }>`
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
            <Column side="left">
              {columns.left.map(({ entries, title }) => (
                <Block key={`block_${title.toLowerCase()}`} title={title}>
                  <Entries items={entries} />
                </Block>
              ))}
            </Column>
            <Column side="right">
              {columns.right.map(({ sections, title }) => (
                <Block key={`block_${title.toLowerCase()}`} title={title}>
                  {sections.map(
                    (section): React.ReactNode => (
                      <Section
                        {...section}
                        key={`section_${buildIteratorKey(
                          section.title + section.org
                        )}`}
                      />
                    )
                  )}
                </Block>
              ))}
            </Column>
          </Container>
        </Container>
      </Sheet>
    </ThemeProvider>
  );
};

export default Resume;
