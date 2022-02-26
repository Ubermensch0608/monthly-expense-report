import React from "react";
import Expenses from "./Expenses";

const MOCK_DATA = [
  {
    id: "a1",
    title: "와인",
    amount: 25000,
    date: "2022.02.12",
  },
  {
    id: "a2",
    title: "커피",
    amount: 5000,
    date: "2022.02.15",
  },
  {
    id: "a3",
    title: "의자",
    amount: 70000,
    date: "2022.01.09",
  },
];

const ExpenseList = () => {
  return (
    <div>
      <Expenses expenses={MOCK_DATA} />
    </div>
  );
};

export default ExpenseList;
