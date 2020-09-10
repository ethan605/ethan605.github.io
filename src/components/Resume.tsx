import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import logo from '../assets/logo.svg';
import { resumeTheme } from '../styles/themes';
import LIPSUM from '../data/lipsum.json';
import RESUME_DATA from '../data/resume.json';
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

const Logo = styled.img`
  display: block;
  width: 10rem;
  margin: 0 auto;
  pointer-events: none;
`;

const Link = styled.a`
  color: #282c34;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
              {[0, 1, 2, 3, 4].map((val) => (
                <div key={`block_${val}`}>
                  <Logo alt="logo" src={logo} />
                  <Link
                    href="https://reactjs.org"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {`${val + 1}. ${LIPSUM[val]}`}
                  </Link>
                </div>
              ))}
            </Column>
          </Container>
        </Container>
      </Sheet>
    </ThemeProvider>
  );
};

export default Resume;
