import React, { useState } from "react";
import { GlobalStyle } from "./globalStyle";
import { MainWrapper } from "./LayoutComponents";
import Header from "./Header";
import Banner from "./Banner";

const Layout = ({ children }) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleClick = () => {
    setShowBanner(false);
  };

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Header />
        {showBanner && (
          <Banner handleClick={handleClick}>
            2020 Rose Cite Mile Announced!
          </Banner>
        )}
        <main>{children}</main>
      </MainWrapper>
    </>
  );
};

export default Layout;
