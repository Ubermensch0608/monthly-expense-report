import React, { FC } from "react";
import Expense, { ExpenseProps } from "./Expense";

const Expenses: FC<{ expenses: ExpenseProps[] }> = ({ expenses }) => {
  if (expenses.length === 0) {
    return <div>지출하신 내역이 없습니다.</div>;
  }

  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <Expense
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
            title={expense.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
