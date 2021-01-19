import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

import RoseCity from "../images/Logos/rctc-01.png";
import Goodr from "../images/Logos/goodr-01.png";
import TheFeed from "../images/Logos/the-feed-01.png";
import Athletic from "../images/Logos/athletic-net-01.png";
import ShowersPass from "../images/Logos/showerpass-01.png";

const StyledLogoBar = styled.div`
  width: 100%;
  height: 200px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1007px) {
    height: 400px;
  }
  @media (max-width: 475px) {
    height: 500px;
  }
`;

const LogoBar = () => {
  return (
    <StyledLogoBar>
      <Logo src={Goodr} alt="Goodr Logo" />
      <Logo src={Athletic} alt="Athletic Net Logo" />
      <Logo src={RoseCity} alt="Rose City Logo" />
      <Logo src={ShowersPass} alt="Showers Pass Logo" />
      <Logo src={TheFeed} alt="The Feed Logo" />
    </StyledLogoBar>
  );
};

export default LogoBar;
