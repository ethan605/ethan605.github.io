import React from 'react';
import styled from 'styled-components';

import decorationIcons from '../helpers/decorationIcons';
import { buildIteratorKey } from '../helpers/utils';
import { EntryData } from '../types/resume';

type Props = {
  items: EntryData[];
};

const Container = styled.ul``;

const InteractiveItem = styled.li`
  align-items: center;
  display: flex;
`;

const Item = styled.li`
  line-height: ${({ theme }): string => theme.spacing.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.item};

  ::before {
    color: ${({ theme }): string => theme.colors.prompts.tertiary};
    content: ${({ theme }): string =>
      theme.prompts.item ? `'${theme.prompts.item}'` : 'none'};
    margin-right: ${({ theme }): string => theme.spacing.prompt};
  }
`;

const TextContent = styled.span<{ hasAttributes?: boolean }>`
  ::after {
    content: ${({ hasAttributes }): string => (hasAttributes ? `':'` : 'none')};
    margin-right: ${({ theme }): string => theme.spacing.prompt};
  }
`;

const LinkContent = styled.a`
  color: inherit;
  highlight: none;
  text-decoration: none;

  &,
  &:active,
  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
    color: ${({ theme }): string => theme.colors.url};
  }
`;

const Attributes = styled.strong`
  line-height: 1.5rem;
`;

const Entries: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      {items.map(({ attributes, content, decoration, href }) => {
        const key = `entry_content_${buildIteratorKey(content)}`;

        const children = (
          <React.Fragment>
            {href ? (
              <LinkContent href={href} target="_blank">
                {content}
              </LinkContent>
            ) : (
              <TextContent hasAttributes={attributes != null}>
                {content}
              </TextContent>
            )}
            {!href && attributes && (
              <Attributes>{attributes.join(', ')}</Attributes>
            )}
          </React.Fragment>
        );

        if (decoration != null) {
          return (
            <InteractiveItem key={key}>
              {decorationIcons[decoration]}
              {children}
            </InteractiveItem>
          );
        }

        return <Item key={key}>{children}</Item>;
      })}
    </Container>
  );
};

export default Entries;
