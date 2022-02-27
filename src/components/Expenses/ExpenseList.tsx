import React, { FC } from "react";

import { ExpenseProps } from "./Expense";
import Expenses from "./Expenses";

export interface ExpenseListProps {
  expenses: ExpenseProps[];
  onSelectedYear: (selectedYear: string) => void;
}

const ExpenseList: FC<ExpenseListProps> = ({ expenses, onSelectedYear }) => {
  return (
    <div>
      <Expenses expenses={expenses} onSelectedYear={onSelectedYear} />
    </div>
  );
};

export default ExpenseList;
