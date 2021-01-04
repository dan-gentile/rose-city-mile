import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import HeaderImg from "./HeaderImg";
import Rose from "../images/rose.png";
import SmallCTAButton from "./SmallCTAButton";

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

const Header = () => (
  <StyledHeader>
    <HeaderImg src={Rose} alt="Rose Flower Logo" />
    <SmallCTAButton name="Register" type="button" />
  </StyledHeader>
);

export default Header;
