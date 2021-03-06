import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.a`
  color: #fff;
  cursor: pointer;
  :hover {
    color: #141414;
  }
  :active {
    color: #ed1f24;
  }
`;
const ExternalLink = (props) => {
  return <StyledAnchor {...props}>{props.children}</StyledAnchor>;
};

export default ExternalLink;
