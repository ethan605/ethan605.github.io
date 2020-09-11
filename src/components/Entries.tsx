import React from 'react';
import styled from 'styled-components';

import decorationIcons from '../helpers/decorationIcons';
import { buildIteratorKey } from '../helpers/utils';
import { EntryData } from '../types/resume';

type Props = {
  items: EntryData[];
};

const Container = styled.ul``;

const Item = styled.li<{ hasDecoration?: boolean }>`
  align-items: center;
  display: ${({ hasDecoration }): string =>
    hasDecoration ? 'flex' : 'list-item'};
  line-height: ${({ theme }): string => theme.spacing.lineHeight};
  margin-bottom: ${({ theme }): string => theme.spacing.item};

  ::before {
    color: ${({ theme }): string => theme.colors.prompts.tertiary};
    content: ${({ hasDecoration, theme }): string =>
      hasDecoration ? 'none' : `'${theme.prompts.item}'`};
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
  display: inline-block;
  line-height: 1.5rem;
`;

const Entries: React.FC<Props> = ({ items }) => (
  <Container>
    {items.map(({ attributes, content, decoration, href }) => (
      <Item
        hasDecoration={decoration != null}
        key={`entry_content_${buildIteratorKey(content)}`}
      >
        {decoration && decorationIcons[decoration]}
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
      </Item>
    ))}
  </Container>
);

export default Entries;
