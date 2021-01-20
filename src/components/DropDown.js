import React from "react";
import styled from "styled-components";
import ExternalLink from "./Links/ExternalLink";
import { StaticQuery, graphql } from "gatsby";

const StyledDropDown = styled.div`
  position: absolute;
  width: 180px;
  background-color: var(--primary-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  padding: 1rem;
  overflow: hidden;

  transform: translateX(-115%);
  top: 200px;
`;

const MenuItem = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const DropDown = () => {
  return (
    <StyledDropDown>
      <StaticQuery
        query={graphql`
          {
            allSanityResultUrl(sort: { fields: [title], order: DESC }) {
              edges {
                node {
                  title
                  id
                  link
                }
              }
            }
          }
        `}
        render={(data) =>
          data.allSanityResultUrl.edges.map(({ node }) => {
            return (
              <MenuItem key={node.id}>
                <ExternalLink
                  href={node.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  {node.title}
                </ExternalLink>
              </MenuItem>
            );
          })
        }
      />
    </StyledDropDown>
  );
};

export default DropDown;
