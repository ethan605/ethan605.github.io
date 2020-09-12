import React, { useRef } from 'react';
import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components';
import { Moon, Printer, Sun } from 'react-feather';
import { useReactToPrint } from 'react-to-print';

import {
  PaperDimensions,
  PaperSizesMapping,
  SupportedThemes,
} from 'src/types/themes';

type Props = {
  children: React.ReactNode;
  currentTheme: SupportedThemes;
  onChangeTheme: () => void;
};

// Page sizes in *portrait* mode
const PAGE_SIZES: PaperSizesMapping = {
  A4: { width: '210mm', height: '297mm' },
  B4: { width: '250mm', height: '353mm' },
  legal: { width: '8.5in', height: '14in' },
  letter: { width: '8.5in', height: '11in' },
};

const getPageSize = (dimension: PaperDimensions) => ({
  theme,
}: ThemedStyledProps<{}, DefaultTheme>): string => {
  const otherDimension = dimension === 'width' ? 'height' : 'width';
  const { [dimension]: size, [otherDimension]: otherSize } = PAGE_SIZES[
    theme.page.type
  ];
  return theme.page.orientation === 'landscape' ? otherSize : size;
};

const UtilsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;

  @media print {
    display: none;
  }
`;

const UtilButton = styled.button`
  background-color: ${({ theme }): string => theme.colors.foreground};
  border-radius: 0.25rem;
  border: none;
  color: ${({ theme }): string => theme.colors.background};
  cursor: pointer;
  font-size: 1.75rem;
  margin-left: 0.5rem;
  opacity: 0.5;
  outline: none;
  padding: 0.5rem;
  padding-bottom: 0.3rem;

  &:focus,
  &:focus-within,
  &:hover {
    opacity: 1;
  }
`;

const Sheet = styled.div`
  background-color: ${({ theme }): string => theme.colors.background};
  box-sizing: border-box;
  position: relative;

  .utils {
    display: none;
  }

  @page {
    size: ${({ theme }): string => theme.page.type}
      ${({ theme }): string => theme.page.orientation};
    margin: 0;
  }

  @media print {
    height: ${getPageSize('height')};
    width: ${getPageSize('width')};
  }

  @media screen {
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
    margin: 0.5cm auto;
    overflow: auto;

    @media (min-width: ${getPageSize('width')}) {
      width: ${getPageSize('width')};
    }

    &:hover {
      .utils {
        display: block;
      }
    }
  }
`;

const PrintPaper: React.FC<Props> = ({
  children,
  currentTheme,
  onChangeTheme,
}) => {
  const sheetRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => sheetRef.current });

  return (
    <Sheet ref={sheetRef}>
      <UtilsContainer className="utils">
        {window.print && (
          <UtilButton
            onClick={(): void => handlePrint && handlePrint()}
            title="Save as PDF"
          >
            <Printer />
          </UtilButton>
        )}
        <UtilButton onClick={onChangeTheme} title="Toggle dark mode">
          {currentTheme === 'light' ? <Moon /> : <Sun />}
        </UtilButton>
      </UtilsContainer>
      {children}
    </Sheet>
  );
};

export default PrintPaper;
