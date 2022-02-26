import { FC } from "react";
import styled from "styled-components";

const Card: FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled.div`
  display: flex;
  justify-content: center;

  border: 2px solid #f5f2e7;
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px;
  color: #fff;
`;

export default Card;
