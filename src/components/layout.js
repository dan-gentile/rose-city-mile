import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyle";
import { MainWrapper } from "./LayoutComponents";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./footer";

const Layout = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);

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
            2021 Rose Cite Mile Announced!
          </Banner>
        )}
        <main>{children}</main>
        <Footer />
      </MainWrapper>
    </>
  );
};

export default Layout;
