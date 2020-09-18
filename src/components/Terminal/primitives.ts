import styled from 'styled-components';
import { getColor, getPrompt, getSpacing } from 'src/utils/themes';

export const TextBlock = styled.div`
  margin-bottom: ${getSpacing('item')};
`;

export const TextLine = styled.code`
  line-height: 1.5rem;
`;

export const Path = styled.code`
  color: ${getColor('secondary')};
`;

export const Command = styled.code`
  ::before {
    color: ${getColor('primary')};
    content: ${getPrompt('block')};
    margin-right: ${getSpacing('prompt')};
  }

  ::after {
    color: ${getColor('tertiary')};
    content: '↵';
    margin-left: ${getSpacing('prompt')};
  }
`;
