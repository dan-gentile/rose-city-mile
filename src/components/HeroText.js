import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import LargeCTAButton from "./Buttons/LargeCTAButton";

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
            <>
              <StyledHeroText key={node.id}>
                <h1>{node.headline}</h1>
                <h4>{node.eventDate}</h4>
                <p>{node.shortDescription}</p>
              </StyledHeroText>
              {node.ctaButton.ctaButtonText ? (
                <LargeCTAButton
                  name={node.ctaButton.ctaButtonText}
                  url={node.ctaButton.ctaButtonUrl}
                />
              ) : null}
            </>
          );
        })
      }
    />
  );
};

export default HeroText;
