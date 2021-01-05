import React from "react";
import styled from "styled-components";
import HeaderImg from "./HeaderImg";
import Rose from "../images/rose.png";

import TopNavbar from "./TopNavBar";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
  background: var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    justify-content: center;
    margin-right: 300px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImg src={Rose} alt="Rose Flower Logo" />
      <TopNavbar />
    </StyledHeader>
  );
};

export default Header;
