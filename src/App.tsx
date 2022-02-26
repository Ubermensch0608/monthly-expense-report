import React, { Fragment } from "react";
import NewExpense, {
  ExpenseDataProps,
} from "./components/NewExpense/NewExpense";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  const saveExpenseHandler = (expenses: ExpenseDataProps) => {
    console.log(expenses, "in App.tsx");
  };

  return (
    <Fragment>
      <GlobalStyle />
      <NewExpense onNewExpense={saveExpenseHandler} />
    </Fragment>
  );
};

export default App;
