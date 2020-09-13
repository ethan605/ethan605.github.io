import { ThemedStyledProps, DefaultTheme } from 'styled-components';

import { PAGE_SIZES_MAPPING } from 'src/styles/themes';
import { ContentSettings, PaperDimensions } from 'src/types/themes';

export const getPageSize = (dimension: PaperDimensions) => ({
  theme,
}: ThemedStyledProps<{}, DefaultTheme>): string => {
  const otherDimension = dimension === 'width' ? 'height' : 'width';
  const { [dimension]: size, [otherDimension]: otherSize } = PAGE_SIZES_MAPPING[
    theme.page.type
  ];
  return theme.page.orientation === 'landscape' ? otherSize : size;
};

export const getPrompt = (key: keyof ContentSettings) => ({
  theme,
}: ThemedStyledProps<{}, DefaultTheme>): string =>
  theme.prompts.section ? `'${theme.prompts[key]}'` : 'none';

export const getSpacing = (
  key: keyof ContentSettings,
  fallbackValue?: string
) => ({ theme }: ThemedStyledProps<{}, DefaultTheme>): string =>
  theme.spacing[key] || fallbackValue || '';
