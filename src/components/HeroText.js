import React from "react";
import styled from "styled-components";

const StyledHeroText = styled.div`
  height: 220px;
  width: 600px;
  margin: 40px auto;
  padding: 16px;
  text-align: center;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  background-color: var(--white);
  color: var(--black);
  overflow: hidden;
  opacity: 0.9;
  z-index: 2;

  p {
    margin-top: 5px;
    font-size: 17px;
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
        this reason, we have not yet opened registration
      </p>
    </StyledHeroText>
  );
};

export default HeroText;
