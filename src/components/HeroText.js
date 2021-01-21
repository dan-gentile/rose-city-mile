import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import LargeCTAButton from "./Buttons/LargeCTAButton";

const StyledHeroText = styled.div`
  height: 340px;
  width: 600px;
  margin: 40px auto;
  padding: 16px;
  color: var(--grey);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin-bottom: 30px;
  }

  @media (max-width: 1400px) {
    height: 360px;
    width: 500px;
  }

  @media (max-width: 600px) {
    height: 360px;
    width: 400px;
  }

  @media (max-width: 500px) {
    height: 400px;
    width: 340px;
  }
`;
const HeroText = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allSanityHomeText {
            edges {
              node {
                id
                headline
                eventDate
                shortDescription
                ctaButton {
                  ctaButtonUrl
                  ctaButtonText
                }
              }
            }
          }
        }
      `}
      render={(data) =>
        data.allSanityHomeText.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <StyledHeroText>
                <h1>{node.headline}</h1>
                <h4>{node.eventDate}</h4>
                <p>{node.shortDescription}</p>
                {node.ctaButton.ctaButtonText ? (
                  <LargeCTAButton
                    name={node.ctaButton.ctaButtonText}
                    url={node.ctaButton.ctaButtonUrl}
                  />
                ) : null}
              </StyledHeroText>
            </div>
          );
        })
      }
    />
  );
};

export default HeroText;
