import React from "react";
import styled from "styled-components";
import ExternalLink from "./Links/ExternalLink";
import DropDown from "./DropDown";
import SmallCTAButton from "./Buttons/SmallCTAButton";
import { useState } from "react";
import NavButton from "./Buttons/NavButton";
import ScrollToBtn from "./Links/scrollTo";
import { StaticQuery, graphql } from "gatsby";

const Nav = styled.nav`
  width: 400px;
  height: 100vh;
  background-color: var(--grey);
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: var(--box-shadow);
  transition: transform 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 1;

  @media (max-width: 600px) {
    width: 200px;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 80px;
    margin-top: 120px;

    @media (max-width: 600px) {
      padding-left: 40px;
    }

    li,
    a,
    button {
      transition: transform 1s ease-in-out;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(50%)")};
      margin: 25px 0;
    }
  }
`;

const TopNavbar = ({ open }) => {
  const [show, setShow] = useState(false);

  return (
    <Nav open={open}>
      <ul>
        <ScrollToBtn id="home" name="Home" />
        <ScrollToBtn id="details" name="Details" />
        <NavButton
          name="Results"
          type="button"
          onClick={() => setShow(!show)}
        />
        {show && <DropDown />}
        <ExternalLink href="https://shop.rosecitytrack.com/">Shop</ExternalLink>
        <StaticQuery
          query={graphql`
            {
              allSanityHomeText {
                edges {
                  node {
                    id
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
              return node.ctaButton.ctaButtonText ? (
                <SmallCTAButton
                  key={node.id}
                  name={node.ctaButton.ctaButtonText}
                  url={node.ctaButton.ctaButtonUrl}
                />
              ) : null;
            })
          }
        />
      </ul>
    </Nav>
  );
};

export default TopNavbar;
