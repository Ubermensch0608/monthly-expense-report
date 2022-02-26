import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

export interface ButtonProps {
  type?: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children} </StyledButton>;
};

const StyledButton = styled.button<ButtonHTMLAttributes<ButtonProps>>`
  border: none;
  border-radius: 4px;
  background: #2666cf;
  color: #fff;

  padding: 4px 8px;
`;

export default Button;
