import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  z-index: 1;
`;

const Header = () => {
  return (
    <StyledHeader id="home">
      <Burger />
    </StyledHeader>
  );
};

export default Header;
