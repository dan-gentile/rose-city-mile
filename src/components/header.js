import React from "react";
import styled from "styled-components";
import HeaderImg from "./HeaderImg";
import Rose from "../images/rose.png";
import Burger from "./Burger";

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  z-index: 3;
  background: var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    justify-content: space-between;
    padding: 0 80px;
  }

  @media (max-width: 500px) {
    padding: 0 40px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImg src={Rose} alt="Rose Flower Logo" />
      <Burger />
    </StyledHeader>
  );
};

export default Header;
