import { Fragment, memo } from 'react';
import styled from 'styled-components';

import { ExternalLink, flexCenterStyles } from 'src/styles/reusables';
import { EntryData } from 'src/types/resume';
import { buildIteratorKey } from 'src/utils';
import { getColor, getPrompt, getSpacing } from 'src/utils/themes';
import decorationIcons from './decorationIcons';

type Props = {
  items: EntryData[];
};

const InteractiveItem = styled.li`
  ${flexCenterStyles}

  justify-content: flex-start;
`;

const Item = styled.li`
  line-height: ${({ theme }): string => theme.page.lineHeight};
  margin-bottom: ${getSpacing('item')};

  ::before {
    color: ${getColor('tertiary')};
    content: ${getPrompt('item')};
    margin-right: ${getSpacing('prompt')};
  }
`;

const TextContent = styled.span<{ hasAttributes?: boolean }>`
  ::after {
    content: ${({ hasAttributes }): string => (hasAttributes ? '":"' : 'none')};
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
          <Fragment>
            {href ? (
              <ExternalLink href={href}>{content}</ExternalLink>
            ) : (
              <TextContent hasAttributes={attributes != null}>
                {content}
              </TextContent>
            )}
            {!href && attributes && (
              <Attributes>{attributes.join(', ')}</Attributes>
            )}
          </Fragment>
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

export default memo(Entries);
