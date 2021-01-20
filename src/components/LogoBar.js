import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

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
      <StaticQuery
        query={graphql`
          {
            allSanitySponsorLogo {
              edges {
                node {
                  sponsor
                  sponsorWebsite
                  sponsorImage {
                    asset {
                      fixed {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) =>
          data.allSanitySponsorLogo.edges.map(({ node }) => {
            return (
              <Logo
                key={node.id}
                url={node.sponsorWebsite}
                alt={node.sponsor}
                src={node.sponsorImage.asset.fixed.src}
              />
            );
          })
        }
      />
    </StyledLogoBar>
  );
};

export default LogoBar;
