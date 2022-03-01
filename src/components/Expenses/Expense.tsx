import React, { FC } from "react";
import { Card, Button } from "src/layout";
import styled from "styled-components";

export interface ExpenseProps {
  id?: string;
  date: string;
  title: string;
  amount: string;
}

const Expense: FC<ExpenseProps> = ({ id, date, title, amount }) => {
  return (
    <Card>
      <ExpenseLi key={id}>
        <div>{date}</div>
        <h3>{title}</h3>
        <div>{amount}원</div>
        <Button secondary>X</Button>
      </ExpenseLi>
    </Card>
  );
};

const ExpenseLi = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 30px;
`;

export default Expense;
