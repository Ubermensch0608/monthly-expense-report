import NewExpense, {
  ExpenseDataProps,
} from "./components/NewExpense/NewExpense";
import { Fragment } from "react";
import Expenses from "./components/Expenses/ExpenseList";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  const saveExpenseHandler = (expenses: ExpenseDataProps) => {
    console.log(expenses, "in App.tsx");
  };

  return (
    <Fragment>
      <GlobalStyle />
      <NewExpense onNewExpense={saveExpenseHandler} />
      <Expenses />
    </Fragment>
  );
};

export default App;
