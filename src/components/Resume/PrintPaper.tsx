import React, { useRef } from 'react';
import styled from 'styled-components';
import { Moon, Printer, Sun } from 'react-feather';
import { useReactToPrint } from 'react-to-print';

import { SupportedThemes } from 'src/types/themes';

type Props = {
  children: React.ReactNode;
  currentTheme: SupportedThemes;
  onChangeTheme: () => void;
};

// Page sizes in *portrait* mode
const PAGE_SIZES = {
  A3: { width: '29.7cm', height: '42cm' },
  A4: { width: '21cm', height: '29.7cm' },
  A5: { width: '14cm', height: '21cm' },
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
  outline: none;
  padding: 0.5rem;
  padding-bottom: 0.3rem;
`;

const Sheet = styled.div`
  background-color: ${({ theme }): string => theme.colors.background};
  box-sizing: border-box;
  position: relative;
  width: ${({ theme }): string => {
    const { width, height } = PAGE_SIZES[theme.page.size];
    return theme.page.orientation === 'landscape' ? height : width;
  }};

  .utils {
    display: none;
  }

  @page {
    size: ${({ theme }): string => theme.page.size}
      ${({ theme }): string => theme.page.orientation};
    margin: 0;
  }

  @media print {
    height: ${({ theme }): string => {
      const { width, height } = PAGE_SIZES[theme.page.size];
      return theme.page.orientation === 'landscape' ? width : height;
    }};
  }

  @media screen {
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
    margin: 0.5cm auto;
    overflow: auto;

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
        <UtilButton
          onClick={(): void => handlePrint && handlePrint()}
          title="Save as PDF"
        >
          <Printer />
        </UtilButton>
        <UtilButton onClick={onChangeTheme} title="Toggle dark mode">
          {currentTheme === 'light' ? <Moon /> : <Sun />}
        </UtilButton>
      </UtilsContainer>
      {children}
    </Sheet>
  );
};

export default PrintPaper;
