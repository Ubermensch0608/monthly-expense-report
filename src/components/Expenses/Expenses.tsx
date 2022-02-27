import React, { FC } from "react";
import Card from "src/layout/Card";
import styled from "styled-components";
import Expense, { ExpenseProps } from "./Expense";

const MOCK_YEAR = [
  {
    id: "y1",
    value: "2019",
  },
  {
    id: "y2",
    value: "2020",
  },
  {
    id: "y3",
    value: "2021",
  },
  {
    id: "y4",
    value: "2022",
  },
];

export interface ExpensesProps {
  expenses: ExpenseProps[];
  onSelectedYear: (selectedYear: string) => void;
}

const Expenses: FC<ExpensesProps> = ({ expenses, onSelectedYear }) => {
  const selectYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetYear = event.target.value;

    onSelectedYear(targetYear);
  };

  return (
    <Card>
      <div>
        <Card>
          <select onChange={selectYearHandler}>
            {MOCK_YEAR.map((year) => (
              <DropDownOption key={year.id}>{year.value}</DropDownOption>
            ))}
          </select>
        </Card>
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
      </div>
    </Card>
  );
};

const ExpensesUl = styled.ul`
  width: 90%;
`;

const DropDownOption = styled.option`
  &:hover {
    background: #f5f2e7;
    color: #000;
  }
`;

export default Expenses;
