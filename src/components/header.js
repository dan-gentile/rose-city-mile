import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const StyledHeader = styled.header`
  width: 100%;
  height: 40px;
  z-index: 2;
  margin-top: 40px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Burger />
    </StyledHeader>
  );
};

export default Header;
