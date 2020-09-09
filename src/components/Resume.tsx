import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import logo from '../assets/logo.svg';
import { resumeTheme } from '../styles/themes';
import LIPSUM from '../data/lipsum.json';
import RESUME_DATA from '../data/resume.json';
import Sheet from './Sheet';

const Container = styled.div`
  font-size: 12px;
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.h2`
  margin: 0;
`;

const Content = styled.div``;
const Column = styled.div<{ right?: boolean }>`
  overflow: hidden;
  margin-right: ${({ right }): string => (right ? 'unset' : '1rem')};
  float: ${({ right }): string => (right ? 'unset' : 'left')};
  width: ${({ right }): string => (right ? 'auto' : '35%')};
`;

const Wrapper = styled.div``;

const Logo = styled.img`
  display: block;
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

const Resume: React.FC = () => (
  <ThemeProvider theme={resumeTheme}>
    <Sheet>
      <Container id="resume">
        <Header>
          <Title>{RESUME_DATA.header.title}</Title>
          <Subtitle>{RESUME_DATA.header.subtitle}</Subtitle>
        </Header>
        <Content>
          <Column>
            {[0, 1, 2].map((val) => (
              <Wrapper className="page-break" key={`fragment_${val}`}>
                <Logo alt="logo" src={logo} />
                <Link
                  href="https://reactjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {`${val + 1}. ${LIPSUM[val]}`}
                </Link>
              </Wrapper>
            ))}
          </Column>
          <Column right>
            {[2, 3, 4].map((val) => (
              <Wrapper className="page-break" key={`fragment_${val}`}>
                <Logo alt="logo" src={logo} />
                <Link
                  href="https://reactjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {`${val + 1}. ${LIPSUM[val]}`}
                </Link>
              </Wrapper>
            ))}
          </Column>
        </Content>
      </Container>
    </Sheet>
  </ThemeProvider>
);

export default Resume;
