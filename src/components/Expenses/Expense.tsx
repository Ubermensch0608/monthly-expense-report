import React, { FC } from "react";

export interface ExpenseProps {
  id?: string;
  date: string;
  title: string;
  amount: number;
}

const Expense: FC<ExpenseProps> = ({ id, date, title, amount }) => {
  return (
    <li key={id}>
      <div>{date}</div>
      <h3>{title}</h3>
      <div>{amount}</div>
    </li>
  );
};

export default Expense;
