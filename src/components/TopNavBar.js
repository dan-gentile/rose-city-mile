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
    width: 200px;
    height: 100vh;
    background-color: var(--grey);
    position: fixed;
    top: 0;
    right: 0;
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
        margin: 25px 0;
      }
    }
  }
`;

const TopNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/details/">Details</NavLink>
        <ExternalLink onClick={() => setOpen(!open)}>
          Results
          {open && <DropDown />}
        </ExternalLink>
        <ExternalLink href="https://shop.rosecitytrack.com/">Shop</ExternalLink>
        <SmallCTAButton name="Register" type="button" />
      </ul>
    </Nav>
  );
};

export default TopNavbar;
