import React, { FC } from "react";
import Button from "src/layout/Button";
import Card from "src/layout/Card";
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
        <Button>X</Button>
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
