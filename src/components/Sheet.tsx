import styled from 'styled-components';

// Page sizes in *portrait* mode
const PAGE_SIZES = {
  A3: { width: '29.7cm', height: '42cm' },
  A4: { width: '21cm', height: '29.7cm' },
  A5: { width: '14cm', height: '21cm' },
};

const Sheet = styled.div`
  background-color: white;
  box-sizing: border-box;
  width: ${({ theme }): string => {
    const { width, height } = PAGE_SIZES[theme.paperSize];
    return theme.landscape ? height : width;
  }};

  @page {
    size: ${({ theme }): string => theme.paperSize}
      ${({ theme }): string => (theme.landscape ? 'landscape' : '')};
    margin: ${({ theme }): string => theme.paperMargin};
  }

  @media print {
    background-color: pink;
    height: ${({ theme }): string => {
      const { width, height } = PAGE_SIZES[theme.paperSize];
      return theme.landscape ? width : height;
    }};
  }

  @media screen {
    overflow: auto;
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
    margin: 0.5cm auto;
    padding: ${({ theme }): string => theme.paperMargin};
  }
`;

export default Sheet;
