import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  align-items: stretch;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 50vh;
  margin: 25vh auto;
  min-width: 50rem;
  min-height: 30rem;
  width: 50vw;
  overflow: hidden;
`;

const TopBar = styled.div`
  background-color: #26282a;
  border-bottom: 1px solid black;
  height: 2rem;
`;

const Content = styled.div`
  align-items: center;
  background-color: #282a36;
  color: #eff0eb;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Content>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
      </Content>
    </Container>
  );
};

export default Home;
