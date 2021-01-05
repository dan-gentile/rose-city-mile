import React from "react";
import styled from "styled-components";
import NavLink from "./Links/NavLink";
import ExternalLink from "./Links/ExternalLink";
import DropDown from "./DropDown";
import SmallCTAButton from "./Buttons/SmallCTAButton";
import { useState } from "react";

const Nav = styled.nav`
  width: 600px;

  @media (max-width: 1024px) {
    display: ${({ open }) => (open ? "block" : "none")};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    width: 200px;
    height: 100vh;
    background-color: var(--grey);
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      margin-top: 60px;

      li,
      a,
      button {
        /* opacity: ${({ open }) => (open ? 1 : 0)};
        transition: all 0.2s linear; */
        margin: 25px 0;
      }
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
        <ExternalLink onClick={() => setShow(!show)}>
          Results
          {show && <DropDown />}
        </ExternalLink>
        <ExternalLink href="https://shop.rosecitytrack.com/">Shop</ExternalLink>
        <SmallCTAButton name="Register" type="button" />
      </ul>
    </Nav>
  );
};

export default TopNavbar;
