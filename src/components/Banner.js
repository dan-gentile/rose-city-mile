import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const StyledBanner = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 40px;
  background: var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  color: #fff;
  font-weight: 600;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 0 80px;
  }
  @media (max-width: 500px) {
    padding: 0 40px;
  }

  @media (max-width: 350px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  color: #fff;
  font-weight: 600;
  font-size: 1.25rem;
  border: none;
  outline: none;
  background-color: var(--grey);
  cursor: pointer;

  :hover {
    color: #000;
  }
`;

const Banner = (props) => {
  return (
    <StyledBanner id="home">
      <div></div>
      <StaticQuery
        query={graphql`
          {
            allSanityBanner {
              edges {
                node {
                  id
                  banner
                }
              }
            }
          }
        `}
        render={(data) =>
          data.allSanityBanner.edges.map(({ node }) => {
            return <p key={node.id}>{node.banner}</p>;
          })
        }
      />
      <CloseButton onClick={props.handleClick}>X</CloseButton>
    </StyledBanner>
  );
};

export default Banner;
