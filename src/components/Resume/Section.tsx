import React from 'react';
import styled from 'styled-components';

import { buildIteratorKey } from 'src/helpers/utils';
import { SectionData } from 'src/types/resume';

const Container = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.section};
`;

const Title = styled.h4`
  color: ${({ theme }): string => theme.colors.prompts.secondary};
  line-height: ${({ theme }): string => theme.spacing.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.title};

  ::before {
    content: ${({ theme }): string =>
      theme.prompts.section ? `'${theme.prompts.section}'` : 'none'};
    margin-right: ${({ theme }): string => theme.spacing.prompt};
  }
`;

const BriefsContainer = styled.ul``;

const Brief = styled.li`
  line-height: ${({ theme }): string => theme.spacing.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.item};

  ::before {
    color: ${({ theme }): string => theme.colors.prompts.tertiary};
    content: ${({ theme }): string =>
      theme.prompts.item ? `'${theme.prompts.item}'` : 'none'};
    margin-right: ${({ theme }): string => theme.spacing.prompt};
  }
`;

const Org = styled(Brief)`
  ::before {
    content: '@';
  }
`;

const Section: React.FC<SectionData> = ({ briefs, org, timeframe, title }) => (
  <Container>
    <Title>{title}</Title>
    <BriefsContainer>
      <Org>{org}</Org>
      <Brief>
        {timeframe.from} - {timeframe.to}
      </Brief>
      {briefs.map((brief) => (
        <Brief key={`brief_${buildIteratorKey(brief)}`}>{brief}</Brief>
      ))}
    </BriefsContainer>
  </Container>
);

export default Section;
