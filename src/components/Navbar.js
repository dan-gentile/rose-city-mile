import React from "react";
import styled from "styled-components";
import NavLink from "../components/Links/NavLink";
import ExternalLink from "../components/Links/ExternalLink";
import DropDown from "./DropDown";
import { useState } from "react";

const Nav = styled.nav`
  width: 600px;
  margin: 0 20px;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/">About</NavLink>
        <ExternalLink onClick={() => setOpen(!open)}>
          DropDown
          {open && <DropDown />}
        </ExternalLink>
        <ExternalLink>Shop</ExternalLink>
      </Ul>
    </Nav>
  );
};

export default Navbar;
