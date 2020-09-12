import React from 'react';
import styled from 'styled-components';

import { buildIteratorKey } from 'src/helpers/utils';
import { BlockData } from 'src/types/resume';
import Entries from './Entries';
import Section from './Section';

const Container = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.block || ''};
`;

const Title = styled.h3`
  color: ${({ theme }): string => theme.colors.primary};
  margin-bottom: ${({ theme }): string => theme.spacing.title || ''};

  ::before {
    content: ${({ theme }): string =>
      theme.prompts.block ? `'${theme.prompts.block}'` : 'none'};
    margin-right: ${({ theme }): string => theme.spacing.prompt || ''};
  }
`;

const Block: React.FC<BlockData> = ({ entries, sections, title }) => (
  <Container>
    <Title>{title}</Title>
    {entries && <Entries items={entries} />}
    {sections &&
      sections.map((section) => (
        <Section
          {...section}
          key={`section_${buildIteratorKey(section.title + section.org)}`}
        />
      ))}
  </Container>
);

export default Block;
