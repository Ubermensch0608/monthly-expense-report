import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  margin: 100px auto;
  width: 100vh;
`;
export default App;
