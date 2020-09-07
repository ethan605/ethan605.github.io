import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const spinningKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spinningKeyframe} infinite 20s linear;
  }
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo alt="logo" src={logo} />
        <Link
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Created with React
        </Link>
      </Header>
    </Container>
  );
};

export default App;
