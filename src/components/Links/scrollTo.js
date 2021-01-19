import React from "react";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

const StyledScroll = styled.button`
  border: none;
  outline: none;
  background-color: var(--grey);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color: var(--black);
  }
`;

const ScrollToBtn = ({ id, name }) => {
  return <StyledScroll onClick={() => scrollTo(`#${id}`)}>{name}</StyledScroll>;
};

export default ScrollToBtn;
