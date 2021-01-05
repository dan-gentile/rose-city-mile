import React from "react";
import styled from "styled-components";

const StyledNavButton = styled.button`
  border: none;
  outline: none;
  background-color: var(--grey);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color: #141414;
  }
`;

const NavButton = (props) => {
  return <StyledNavButton {...props}>{props.name}</StyledNavButton>;
};

export default NavButton;
