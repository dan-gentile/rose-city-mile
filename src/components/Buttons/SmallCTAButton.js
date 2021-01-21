import React from "react";
import styled from "styled-components";
import ExternalLink from "../Links/ExternalLink";

const StyledCTAButton = styled.button`
  height: 40px;
  width: 120px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 700;
  background-color: var(--primary-color);
  border-radius: 40px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  :hover {
    color: #000;
  }
  :active {
    color: var(--black);
  }
`;

const SmallCTAButton = (props) => {
  return (
    <StyledCTAButton {...props}>
      <ExternalLink
        href={props.url}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        {props.name}
      </ExternalLink>
    </StyledCTAButton>
  );
};

export default SmallCTAButton;
