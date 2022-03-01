import styled, { css } from "styled-components";

const Button = styled.button<{ secondary?: boolean }>`
  border: none;
  border-radius: 4px;

  ${(props) =>
    props.secondary
      ? css`
          border: 2px solid #2666cf;

          background: #f5f2e7;
          color: #2666cf;
          padding: 4px 7px;
        `
      : css`
          background: #2666cf;
          color: #fff;
          padding: 8px;
        `}
`;

export { Button };
