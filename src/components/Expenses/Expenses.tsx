import React from "react";

const MOCK_DATA = [
  {
    id: "a1",
    title: "wine",
    amount: 25000,
    date: "2022.02.12",
  },
  {
    id: "a2",
    title: "coffee",
    amount: 5000,
    date: "2022.02.15",
  },
  {
    id: "a3",
    title: "chair",
    amount: 70000,
    date: "2022.01.09",
  },
];

const Expenses = () => {
  return (
    <div>
      <ul>
        {MOCK_DATA.map((expense) => (
          <li key={expense.id}>
            <div>{expense.date}</div>
            <h3>{expense.title}</h3>
            <div>{expense.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
