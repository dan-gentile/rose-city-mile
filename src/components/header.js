import React from "react";
import styled from "styled-components";
import HeaderImg from "./HeaderImg";
import Rose from "../images/rose.png";
import SmallCTAButton from "./Buttons/SmallCTAButton";
import Navbar from "./Navbar";

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
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImg src={Rose} alt="Rose Flower Logo" />
      <Navbar />
      <SmallCTAButton name="Register" type="button" />
    </StyledHeader>
  );
};

export default Header;
