import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Container = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.block};
`;

const Title = styled.h3`
  margin-bottom: ${({ theme }): string => theme.spacing.title};

  ::before {
    content: '${({ theme }): string => theme.prompts.block}';
    margin-right: ${({ theme }): string => theme.spacing.prompt};
  }
`;

const Block: React.FC<Props> = ({ children, title }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default Block;
