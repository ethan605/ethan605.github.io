import React from 'react';
import styled from 'styled-components';

import { SectionData } from 'src/types/resume';
import { getPrompt, getSpacing } from 'src/utils/themes';
import { buildIteratorKey } from 'src/utils';
import { Anchor } from './primitives';

const Container = styled.div`
  margin-bottom: ${getSpacing('section')};
`;

const Title = styled.h4`
  color: ${({ theme }): string => theme.colors.secondary};
  line-height: ${({ theme }): string => theme.page.lineHeight};
  margin-bottom: ${getSpacing('title')};

  ::before {
    content: ${getPrompt('section')};
    margin-right: ${getSpacing('prompt')};
  }
`;

const BriefsContainer = styled.ul``;

const Brief = styled.li`
  line-height: ${({ theme }): string => theme.page.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.item || ''};

  ::before {
    color: ${({ theme }): string => theme.colors.tertiary};
    content: ${getPrompt('item')};
    margin-right: ${getSpacing('prompt')};
  }
`;

const Org = styled.strong`
  ::before {
    content: '@';
    margin: 0 ${getSpacing('prompt')};
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
