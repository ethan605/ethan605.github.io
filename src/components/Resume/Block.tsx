import React from 'react';
import styled from 'styled-components';

import { BlockData } from 'src/types/resume';
import { buildIteratorKey } from 'src/utils';
import { getSpacing } from 'src/utils/themes';
import Entries from './Entries';
import Section from './Section';

const Container = styled.div`
  margin-bottom: ${getSpacing('block')};
`;

const Title = styled.h3`
  color: ${({ theme }): string => theme.colors.primary};
  margin-bottom: ${getSpacing('title')};

  ::before {
    content: ${({ theme }): string =>
      theme.prompts.block ? `'${theme.prompts.block}'` : 'none'};
    margin-right: ${getSpacing('prompt')};
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
