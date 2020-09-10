import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import RESUME_DATA from '../data/resume.json';
import { buildIteratorKey } from '../helpers/utils';
import { resumeTheme } from '../styles/themes';
import { ResumeData } from '../types/resume';

import Block from './Block';
import Entries from './Entries';
import Sheet from './Sheet';

const Container = styled.div``;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1``;
const Subtitle = styled.h2``;

const Column = styled.div<{ side: 'left' | 'right' }>`
  float: ${({ side }): string => (side === 'left' ? 'left' : 'unset')};
  margin-right: ${({ side }): string => (side === 'left' ? '1rem' : 'unset')};
  overflow: hidden;
  width: ${({ side, theme }): string =>
    side === 'left' ? theme.sideColumnProportion : 'auto'};
`;

const Resume: React.FC = () => {
  const { header, columns } = RESUME_DATA as ResumeData;

  return (
    <ThemeProvider theme={resumeTheme}>
      <Sheet>
        <Container id="resume">
          <Header>
            <Title>{header.title}</Title>
            <Subtitle>{header.subtitle}</Subtitle>
          </Header>
          <Container>
            <Column side="left">
              {columns.left.map(({ entries, title }) => (
                <Block key={`column_left_${title.toLowerCase()}`} title={title}>
                  <Entries items={entries} />
                </Block>
              ))}
            </Column>
            <Column side="right">
              {columns.right.map(({ sections, title }) => (
                <Block
                  key={`column_right_${title.toLowerCase()}`}
                  title={title}
                >
                  {sections.map(
                    (section): React.ReactNode => (
                      <div
                        key={`section_${buildIteratorKey(
                          section.title + section.org
                        )}`}
                      >
                        <span>{section.title}</span>
                        {'@'}
                        <span>{section.org}</span>
                        <ul>
                          {section.briefs.map(
                            (brief): React.ReactNode => (
                              <li key={`brief_${buildIteratorKey(brief)}`}>
                                {brief}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
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
