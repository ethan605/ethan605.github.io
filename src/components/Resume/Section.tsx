import React from 'react';
import styled from 'styled-components';

import { buildIteratorKey } from 'src/helpers/utils';
import { SectionData } from 'src/types/resume';
import { Anchor } from './primitives';

const Container = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.section || ''};
`;

const Title = styled.h4`
  color: ${({ theme }): string => theme.colors.secondary};
  line-height: ${({ theme }): string => theme.page.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.title || ''};

  ::before {
    content: ${({ theme }): string =>
      theme.prompts.section ? `'${theme.prompts.section}'` : 'none'};
    margin-right: ${({ theme }): string => theme.spacing.prompt || ''};
  }
`;

const BriefsContainer = styled.ul``;

const Brief = styled.li`
  line-height: ${({ theme }): string => theme.page.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.item || ''};

  ::before {
    color: ${({ theme }): string => theme.colors.tertiary};
    content: ${({ theme }): string =>
      theme.prompts.item ? `'${theme.prompts.item}'` : 'none'};
    margin-right: ${({ theme }): string => theme.spacing.prompt || ''};
  }
`;

const Org = styled.strong`
  ::before {
    content: '@';
    margin: 0 ${({ theme }): string => theme.spacing.prompt || ''};
    font-weight: normal;
  }
`;

const Section: React.FC<SectionData> = ({ briefs, org, timeframe, title }) => (
  <Container>
    <Title>{title}</Title>
    <BriefsContainer>
      <Brief>
        {timeframe.from} - {timeframe.to}
        <Org>
          {org.href ? (
            <Anchor href={org.href} target="_blank">
              {org.name}
            </Anchor>
          ) : (
            org.name
          )}
        </Org>
      </Brief>
      {briefs.map((brief) => (
        <Brief key={`brief_${buildIteratorKey(brief)}`}>{brief}</Brief>
      ))}
    </BriefsContainer>
  </Container>
);

export default Section;