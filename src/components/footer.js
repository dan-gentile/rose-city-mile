import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import SocialLink from "./SocialLink";
import { StaticQuery, graphql } from "gatsby";

const StyledFooter = styled.footer`
  width: 100%;
  height: 160px;
  background-color: var(--grey);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  margin: 0 400px;

  @media (max-width: 1440px) {
    margin: 0 300px;
  }

  @media (max-width: 1200px) {
    margin: 0 200px;
  }

  @media (max-width: 1024px) {
    margin: 0 100px;
  }

  @media (max-width: 620px) {
    margin: 0 40px;
  }

  @media (max-width: 500px) {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledUl>
        <StaticQuery
          query={graphql`
            {
              allSanitySocialLink {
                edges {
                  node {
                    twitter
                    instagram
                    facebook
                  }
                }
              }
            }
          `}
          render={(data) =>
            data.allSanitySocialLink.edges.map(({ node }) => {
              return (
                <>
                  <SocialLink
                    title="Facebook"
                    label="Link to Facebook Page"
                    socialLink={node.facebook}
                    fontAwesomeIcon={
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    }
                  />
                  <SocialLink
                    title="Twitter"
                    label="Link to Twitter Page"
                    socialLink={node.twitter}
                    fontAwesomeIcon={
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    }
                  />
                  <SocialLink
                    title="Instagram"
                    label="Link to Instagram Page"
                    socialLink={node.instagram}
                    fontAwesomeIcon={
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    }
                  />
                </>
              );
            })
          }
        />
      </StyledUl>
    </StyledFooter>
  );
};

export default Footer;
