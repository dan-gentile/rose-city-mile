import React from "react";
import styled from "styled-components";

const StyledHeroText = styled.div`
  height: 220px;
  width: 600px;
  margin: 40px auto;
  padding: 16px;
  color: var(--grey);
  z-index: 2;

  h1 {
    margin-bottom: 10px;
    text-align: center;
  }

  h4 {
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 1400px) {
    height: 260px;
    width: 500px;
  }

  @media (max-width: 600px) {
    height: 260px;
    width: 400px;
  }

  @media (max-width: 500px) {
    height: 300px;
    width: 340px;
  }
`;
const HeroText = () => {
  return (
    <StyledHeroText>
      <h1>2021 Rose City Mile</h1>
      <h4>June 26th 2021</h4>
      <p>
        Save the date for the 4th Annual Rose City Mile! We’re hoping to host an
        in-person event this summer, but it depends on whether we’re able to
        resume group activities safely in light of the ongoing pandemic. For
        this reason, we have not yet opened registration.
      </p>
    </StyledHeroText>
  );
};

export default HeroText;
