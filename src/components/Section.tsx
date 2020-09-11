import React from 'react';
import styled from 'styled-components';

import { buildIteratorKey } from '../helpers/utils';
import { SectionData } from '../types/resume';

const Container = styled.div`
  margin-bottom: ${({ theme }): string => theme.spacing.section};
`;

const Title = styled.h4`
  display: inline-block;
  line-height: ${({ theme }): string => theme.spacing.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.title};

  ::before {
    content: '${({ theme }): string => theme.prompts.section}';
    margin-right: ${({ theme }): string => theme.spacing.prompt};
  }
`;

const Duration = styled.span``;

const Org = styled.strong`
  ::before {
    content: '@';
    margin: 0 ${({ theme }): string => theme.spacing.prompt};
  }
`;

const BriefsContainer = styled.ul``;

const Brief = styled.li`
  line-height: ${({ theme }): string => theme.spacing.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.item};

  ::before {
    color: rgb(220, 220, 220);
    content: '${({ theme }): string => theme.prompts.item}';
    margin-right: ${({ theme }): string => theme.spacing.prompt};
  }
`;

const Section: React.FC<SectionData> = ({ briefs, org, timeframe, title }) => (
  <Container>
    <Title>{title}</Title>
    <BriefsContainer>
      <Brief>
        <Duration>
          {timeframe.from} - {timeframe.to}
        </Duration>
        <Org>{org}</Org>
      </Brief>
      {briefs.map(
        (brief): React.ReactNode => (
          <Brief key={`brief_${buildIteratorKey(brief)}`}>{brief}</Brief>
        )
      )}
    </BriefsContainer>
  </Container>
);

export default Section;
