import React from "react";
import styled from "styled-components";
import Image from "../images/hero-image.png";
import LargeCTAButton from "./Buttons/LargeCTAButton";
import HeroText from "./HeroText";

const StyledHeroImage = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 60px;
  width: 100%;
  height: 800px;
  background-image: url(${Image});
  background-size: cover;

  button {
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.6);
  }
`;

const HeroImage = () => {
  return (
    <StyledHeroImage>
      <HeroText />
      <LargeCTAButton name="Register" />
    </StyledHeroImage>
  );
};

export default HeroImage;
