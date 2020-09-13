import React from 'react';
import styled from 'styled-components';

import { EntryData } from 'src/types/resume';
import { buildIteratorKey } from 'src/utils';
import { getSpacing } from 'src/utils/themes';
import decorationIcons from './decorationIcons';
import { Anchor } from './primitives';

type Props = {
  items: EntryData[];
};

const InteractiveItem = styled.li`
  align-items: center;
  display: flex;
`;

const Item = styled.li`
  line-height: ${({ theme }): string => theme.page.lineHeight};
  margin-bottom: ${getSpacing('item')};

  ::before {
    color: ${({ theme }): string => theme.colors.tertiary};
    content: ${({ theme }): string =>
      theme.prompts.item ? `'${theme.prompts.item}'` : 'none'};
    margin-right: ${getSpacing('prompt')};
  }
`;

const TextContent = styled.span<{ hasAttributes?: boolean }>`
  ::after {
    content: ${({ hasAttributes }): string => (hasAttributes ? `':'` : 'none')};
    margin-right: ${getSpacing('prompt')};
  }
`;

const Attributes = styled.strong`
  line-height: 1.5rem;
`;

const Entries: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map(({ attributes, content, decoration, href }) => {
        const key = `entry_content_${buildIteratorKey(content)}`;

        const children = (
          <React.Fragment>
            {href ? (
              <Anchor href={href} target="_blank">
                {content}
              </Anchor>
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
    </ul>
  );
};

export default Entries;
