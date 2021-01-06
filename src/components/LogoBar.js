import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

import RoseCity from "../images/Logos/RCTC.png";
import Goodr from "../images/Logos/Goodr.png";
import PdxTrack from "../images/Logos/Our-thing.png";
import TheFeed from "../images/Logos/The-Feed.png";
import Athletic from "../images/Logos/athletic-net.png";
import Wine from "../images/Logos/Division-Wine.png";
import ShowersPass from "../images/Logos/showers-pass.png";

const StyledLogoBar = styled.div`
  width: 100%;
  height: 200px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const LogoBar = () => {
  return (
    <StyledLogoBar>
      <Logo src={PdxTrack} alt="Our Thing Logo" />
      <Logo src={Athletic} alt="Athletic Net Logo" />
      <Logo src={Wine} alt="Division Wine Logo" />
      <Logo src={RoseCity} alt="Rose City Logo" />
      <Logo src={Goodr} alt="Goodr Logo" />
      <Logo src={ShowersPass} alt="Showers Pass Logo" />
      <Logo src={TheFeed} alt="The Feed Logo" />
    </StyledLogoBar>
  );
};

export default LogoBar;
