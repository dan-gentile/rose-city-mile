import React from "react";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

const StyledScroll = styled.button`
  color: #fff;
  :hover {
    color: var(--black);
  }
  :active {
    color: #ed1f24;
  }
`;

const ScrollToBtn = ({ id, name }) => {
  return <button onClick={() => scrollTo(`#${id}`)}>{name}</button>;
};

export default ScrollToBtn;
