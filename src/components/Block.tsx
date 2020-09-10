import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;

  ::before {
    content: '~';
    margin-right: 0.5rem;
  }
`;

const Block: React.FC<Props> = ({ children, title }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default Block;
