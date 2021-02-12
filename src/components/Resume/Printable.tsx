import { useContext, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ArrowLeft, Moon, Printer, Sun } from 'react-feather';
import { useReactToPrint } from 'react-to-print';

import { ThemeContext } from 'src/contexts';
import { HoverToolbar, HoverControl, shadowStyles } from 'src/styles/reusables';
import { getColor, getPageSize } from 'src/utils/themes';

type Props = {
  children: React.ReactNode;
};

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

    ${HoverToolbar} {
      display: none;
    }
  }

  @media only screen {
    overflow: auto;

    @media (min-width: ${getPageSize('width')}) {
      ${shadowStyles}

      margin: 0.5cm auto;
      width: ${getPageSize('width')};
    }
  }

  ${HoverToolbar} {
    display: none;
  }

  &:active ${HoverToolbar}, &:hover ${HoverToolbar} {
    display: flex;
  }
`;

const Printable: React.FC<Props> = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const history = useHistory();
  const sheetRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => sheetRef.current });

  return (
    <Sheet ref={sheetRef}>
      <HoverToolbar>
        <HoverControl
          onClick={(): void => {
            // Replace if current location is on top of history stack
            history.length === 2 ? history.replace('/') : history.goBack();
          }}
          title="Back to home page"
        >
          <ArrowLeft />
        </HoverControl>
        <div>
          {window.print && (
            <HoverControl
              onClick={(): void => handlePrint && handlePrint()}
              title="Save as PDF"
            >
              <Printer />
            </HoverControl>
          )}
          <HoverControl onClick={toggleTheme} title="Toggle dark mode">
            {theme === 'light' ? <Moon /> : <Sun />}
          </HoverControl>
        </div>
      </HoverToolbar>
      {children}
    </Sheet>
  );
};

export default Printable;
