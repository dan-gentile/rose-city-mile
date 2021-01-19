import React from "react";
import styled from "styled-components";
import NavLink from "./Links/NavLink";
import ExternalLink from "./Links/ExternalLink";
import DropDown from "./DropDown";
import SmallCTAButton from "./Buttons/SmallCTAButton";
import { useState } from "react";
import NavButton from "./Buttons/NavButton";

const Nav = styled.nav`
  width: 200px;
  height: 100vh;
  background-color: var(--grey);
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: var(--box-shadow);
  transition: transform 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 2;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 35px;
    margin-top: 60px;

    li,
    a,
    button {
      transition: transform 1s ease-in-out;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(50%)")};
      margin: 25px 0;
    }
  }
`;

const TopNavbar = ({ open }) => {
  const [show, setShow] = useState(false);

  return (
    <Nav open={open}>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/details/">Details</NavLink>
        <NavButton
          name="Results"
          type="button"
          onClick={() => setShow(!show)}
        />
        {show && <DropDown />}
        <ExternalLink href="https://shop.rosecitytrack.com/">Shop</ExternalLink>
        <SmallCTAButton name="Register" type="button" />
      </ul>
    </Nav>
  );
};

export default TopNavbar;
