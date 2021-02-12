import { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

const ControlsBar: React.FC = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="14"
        viewBox="0 0 54 14"
      >
        <g fill="none" fillRule="evenodd">
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="#ff5f56"
            stroke="#e0443e"
            strokeWidth=".5"
          />
          <circle
            cx="26"
            cy="6"
            r="6"
            fill="#ffbd2e"
            stroke="#dea123"
            strokeWidth=".5"
          />
          <circle
            cx="46"
            cy="6"
            r="6"
            fill="#27c93f"
            stroke="#1aab29"
            strokeWidth=".5"
          />
        </g>
      </svg>
    </Container>
  );
};

export default memo(ControlsBar);
