import React from 'react';
import styled from 'styled-components';
import { Moon, Sun } from 'react-feather';

import { SupportedThemes } from '../types/themes';

// Page sizes in *portrait* mode
const PAGE_SIZES = {
  A3: { width: '29.7cm', height: '42cm' },
  A4: { width: '21cm', height: '29.7cm' },
  A5: { width: '14cm', height: '21cm' },
};

type Props = {
  children: React.ReactNode;
  currentTheme: SupportedThemes;
  onChangeTheme: () => void;
};

const UtilsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  // background-color: pink;

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
  margin-left: 0.25rem;
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

  :hover {
    .utils {
      display: block;
    }
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
  }
`;

const PrintPaper: React.FC<Props> = ({
  children,
  currentTheme,
  onChangeTheme,
}) => (
  <Sheet>
    <UtilsContainer className="utils">
      <UtilButton onClick={onChangeTheme}>
        {currentTheme === 'light' ? <Moon /> : <Sun />}
      </UtilButton>
    </UtilsContainer>
    {children}
  </Sheet>
);

export default PrintPaper;
