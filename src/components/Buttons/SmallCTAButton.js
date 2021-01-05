import React from "react";
import styled from "styled-components";

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
    color: #141414;
  }
`;

const SmallCTAButton = (props) => {
  return <StyledCTAButton {...props}>{props.name}</StyledCTAButton>;
};

export default SmallCTAButton;
