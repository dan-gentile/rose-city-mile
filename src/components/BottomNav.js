import React from "react";
import styled from "styled-components";
import ExternalLink from "./Links/ExternalLink";
import NavLink from "./Links/NavLink";

const StyledBottomNav = styled.nav`
  height: 100%;
  width: 180px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  li {
    margin-top: 10px;
  }
`;
const BottomNav = () => {
  return (
    <StyledBottomNav>
      <StyledUl>
        <ExternalLink href="https://www.rosecitytrack.com/">
          Rose City Track Club
        </ExternalLink>
        <NavLink to="/landacknowledgement">Land Acknowledgement</NavLink>
      </StyledUl>
    </StyledBottomNav>
  );
};

export default BottomNav;
