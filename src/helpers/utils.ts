import MD5 from 'md5.js';
import { ThemedStyledProps, DefaultTheme } from 'styled-components';

import { PAGE_SIZES_MAPPING } from 'src/styles/themes';
import { PaperDimensions } from 'src/types/themes';

export const buildIteratorKey = (content: string): string =>
  new MD5().update(content).digest('hex');

export const getPageSize = (dimension: PaperDimensions) => ({
  theme,
}: ThemedStyledProps<{}, DefaultTheme>): string => {
  const otherDimension = dimension === 'width' ? 'height' : 'width';
  const { [dimension]: size, [otherDimension]: otherSize } = PAGE_SIZES_MAPPING[
    theme.page.type
  ];
  return theme.page.orientation === 'landscape' ? otherSize : size;
};
