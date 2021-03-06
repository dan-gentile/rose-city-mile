import React from "react";
import styled from "styled-components";
import ExternalLink from "../Links/ExternalLink";

const StyledCTAButton = styled.button`
  height: 70px;
  width: 180px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  background-color: var(--primary-color);
  border-radius: 40px;
  box-shadow: var(--box-shadow);
  z-index: 2;
  cursor: pointer;
  :hover {
    color: #000;
  }
  :active {
    color: var(--black);
  }
`;

const LargeCTAButton = (props) => {
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

export default LargeCTAButton;
