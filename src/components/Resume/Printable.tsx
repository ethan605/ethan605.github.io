import React, { useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ArrowLeft, Moon, Printer, Sun } from 'react-feather';
import { useReactToPrint } from 'react-to-print';

import { SupportedThemes } from 'src/types/themes';
import { getColor, getPageSize } from 'src/utils/themes';

type Props = {
  children: React.ReactNode;
  currentTheme: SupportedThemes;
  onChangeTheme: () => void;
};

const UtilsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 1rem 0.5rem 0 0.5rem;
  position: absolute;
  right: 0;
  top: 0;

  @media only print {
    display: none;
  }
`;

const UtilButton = styled.button`
  background-color: ${getColor('foreground')};
  border-radius: 0.25rem;
  border: none;
  color: ${getColor('background')};
  cursor: pointer;
  font-size: 1.75rem;
  margin: 0 0.5rem;
  opacity: 0.5;
  outline: none;
  padding: 0.5rem;
  padding-bottom: 0.3rem;

  &:active,
  &:hover {
    opacity: 1;
  }
`;

const Sheet = styled.div`
  background-color: ${getColor('background')};
  box-sizing: border-box;
  color: ${getColor('foreground')};
  font-family: ${({ theme }): string => theme.page.fontFamily};
  font-size: ${({ theme }): string => theme.page.fontSize};
  padding: ${({ theme }): string => theme.page.margin};
  position: relative;
  min-width: 320px;

  @page {
    size: ${({ theme }): string => theme.page.type}
      ${({ theme }): string => theme.page.orientation};
    margin: 0;
  }

  @media only print {
    height: ${getPageSize('height')};
    padding-bottom: 0;
    width: ${getPageSize('width')};
  }

  @media only screen {
    overflow: auto;

    @media (min-width: ${getPageSize('width')}) {
      box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
      margin: 0.5cm auto;
      width: ${getPageSize('width')};
    }
  }

  ${UtilsContainer} {
    display: none;
  }

  &:active ${UtilsContainer}, &:hover ${UtilsContainer} {
    display: flex;
  }
`;

const Printable: React.FC<Props> = ({
  children,
  currentTheme,
  onChangeTheme,
}) => {
  const sheetRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => sheetRef.current });
  const history = useHistory();

  return (
    <Sheet ref={sheetRef}>
      <UtilsContainer>
        <UtilButton
          onClick={(): void => {
            // Replace if current location is on top of history stack
            history.length === 2 ? history.replace('/') : history.goBack();
          }}
          title="Back to home page"
        >
          <ArrowLeft />
        </UtilButton>
        <div>
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
        </div>
      </UtilsContainer>
      {children}
    </Sheet>
  );
};

export default Printable;
