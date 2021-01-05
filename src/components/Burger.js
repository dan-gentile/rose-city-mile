import React, { useState } from "react";
import styled from "styled-components";
import TopNavbar from "./TopNavBar";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  justify-content: space-around;
  z-index: 2;
  display: none;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: var(--white);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <TopNavbar open={open} />
    </>
  );
};

export default Burger;
