import { Fragment } from "react";
import Expenses from "./components/Expenses/Expenses";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Expenses />
    </Fragment>
  );
};

export default App;
