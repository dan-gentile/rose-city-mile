import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled((props) => <Link {...props} />)`
  color: #fff;
  :hover {
    color: #141414;
  }
  :active {
    color: #ed1f24;
  }
`;

const NavLink = (props) => {
  return (
    <li>
      <StyledLink
        activeStyle={{ fontWeight: "bold", color: "#FFFAFF" }}
        {...props}
      >
        {props.children}
      </StyledLink>
    </li>
  );
};

export default NavLink;
