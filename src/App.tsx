import NewExpense, {
  ExpenseDataProps,
} from "./components/NewExpense/NewExpense";
import { Fragment, useEffect, useState } from "react";
import Expenses from "./components/Expenses/ExpenseList";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { MOCK_DATA } from "./utils/expense-list";
import Chart from "./components/ExpenseRateChart/Chart";

const App = () => {
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
      <GlobalStyle />
      <Wrapper>
        <NewExpense onNewExpense={saveExpenseHandler} />
        <Chart filteredList={filteredList} />
        <Expenses
          expenses={filteredList}
          onSelectedYear={filterExpenseHandler}
        />
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  margin: 100px auto;
  width: 100vh;
`;
export default App;
