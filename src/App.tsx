import React from 'react';
import styled from 'styled-components';

import Sheet from './Sheet';
import logo from './logo.svg';
import LIPSUM from './data/lipsum.json';

const Container = styled.div`
  display: block;
  text-align: center;
`;

const Logo = styled.img`
  display: block;
  height: 40vmin;
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

const App: React.FC = () => (
  <React.Fragment>
    <Sheet size="a4">
      {[0, 1, 2, 3, 4].map((val) => (
        <Container className="page-break" key={`fragment_${val}`}>
          <Logo alt="logo" src={logo} />
          <Link
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            {LIPSUM[val]}
          </Link>
        </Container>
      ))}
    </Sheet>
    {/* <Sheet size="a4">
      {[3, 4].map((val) => (
        <Container className="page-break" key={`fragment_${val}`}>
          <Logo alt="logo" src={logo} />
          <Link
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            {LIPSUM[val]}
          </Link>
        </Container>
      ))}
    </Sheet> */}
  </React.Fragment>
);

export default App;
