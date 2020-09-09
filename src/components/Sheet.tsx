import React from 'react';
import styled from 'styled-components';

type PageSize = 'a3' | 'a4' | 'a5';

interface Props {
  children?: React.ReactNode;
  landscape?: boolean;
  size: PageSize;
}

// Page sizes in *portrait* mode
const PAGE_SIZES = {
  a3: { width: '29.7cm', height: '42cm' },
  a4: { width: '21cm', height: '29.7cm' },
  a5: { width: '14cm', height: '21cm' },
};

const Sheet = styled.div<Props>`
  box-sizing: border-box;
  padding: 2cm;
  width: ${({ landscape, size }): string => {
    const { width, height } = PAGE_SIZES[size];
    return landscape ? height : width;
  }};
  height: ${({ landscape, size }): string => {
    const { width, height } = PAGE_SIZES[size];
    return landscape ? width : height;
  }};

  @media screen {
    background: white;
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
    margin: 0.5cm auto;
  }
`;

export default Sheet;
