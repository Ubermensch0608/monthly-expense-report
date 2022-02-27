import NewExpense, {
  ExpenseDataProps,
} from "./components/NewExpense/NewExpense";
import { Fragment, useState } from "react";
import Expenses from "./components/Expenses/ExpenseList";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const MOCK_DATA = [
  {
    id: "a1",
    title: "와인",
    amount: "25,000",
    date: "2022.02.12",
  },
  {
    id: "a2",
    title: "커피",
    amount: "5,000",
    date: "2022.02.15",
  },
  {
    id: "a3",
    title: "의자",
    amount: "70,000",
    date: "2022.01.09",
  },
];

const App = () => {
  const [expenseList, setExpenseList] = useState<ExpenseDataProps[]>(MOCK_DATA);

  const saveExpenseHandler = (newExpenses: ExpenseDataProps) => {
    setExpenseList((expenseList) => [newExpenses, ...expenseList]);
  };

  const filterExpenseHandler = () => {};

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <NewExpense onNewExpense={saveExpenseHandler} />
        <Expenses
          expenses={expenseList}
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
