import React, { FC } from "react";
import Card from "src/layout/Card";
import styled from "styled-components";
import Expense, { ExpenseProps } from "./Expense";

const Expenses: FC<{ expenses: ExpenseProps[] }> = ({ expenses }) => {
  if (expenses.length === 0) {
    return <div>지출하신 내역이 없습니다.</div>;
  }

  return (
    <Card>
      <ExpensesUl>
        {expenses.map((expense) => (
          <Expense
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
            title={expense.title}
          />
        ))}
      </ExpensesUl>
    </Card>
  );
};

const ExpensesUl = styled.ul`
  width: 90%;
`;

export default Expenses;
