import React from "react";
import styled from "styled-components";
import LargeCTAButton from "./Buttons/LargeCTAButton";
import HeroText from "./HeroText";

const StyledHeroImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
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
