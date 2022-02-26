import React, { FC } from "react";
import { ExpenseProps } from "./Expense";
import Expenses from "./Expenses";

export interface ExpenseListProps {
  expenses: ExpenseProps[];
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default ExpenseList;
