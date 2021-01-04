import React from "react";
import { GlobalStyle } from "./globalStyle";
import { MainWrapper } from "./LayoutComponents";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Header />
        <main>{children}</main>
      </MainWrapper>
    </>
  );
};

export default Layout;
