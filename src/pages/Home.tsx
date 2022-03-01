import React, { Fragment, useState } from "react";
import Chart from "src/components/ExpenseRateChart/Chart";
import { ExpenseProps } from "src/components/Expenses/Expense";
import Expenses from "src/components/Expenses/Expenses";
import NewExpense, {
  ExpenseDataProps,
} from "src/components/NewExpense/NewExpense";
import { MOCK_DATA } from "src/utils/expense-list";

export interface ExpenseListProps {
  expenses: ExpenseProps[];
  onSelectedYear: (selectedYear: string) => void;
}

const Home = () => {
  const [expenseList, setExpenseList] = useState<ExpenseDataProps[]>(MOCK_DATA);
  const [filteredList, setFilteredList] = useState<ExpenseDataProps[]>([]);

  const saveExpenseHandler = (newExpenses: ExpenseDataProps) => {
    setExpenseList((expenseList) => [newExpenses, ...expenseList]);
  };

  const filterExpenseHandler = (clickedYear: string) => {
    const filteredExpenses = expenseList.filter(
      (prevExpenses) => prevExpenses.date.split(".")[0] === clickedYear
    );

    setFilteredList(filteredExpenses);
  };

  return (
    <Fragment>
      <NewExpense onNewExpense={saveExpenseHandler} />
      <Chart filteredList={filteredList} />
      <Expenses expenses={filteredList} onSelectedYear={filterExpenseHandler} />
    </Fragment>
  );
};

export default Home;
