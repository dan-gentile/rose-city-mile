import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100%;
  height: 40px;
  background: #ed1f24;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  color: #fff;
  font-weight: 600;
  z-index: 2;

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
  background-color: var(--primary-color);
  cursor: pointer;

  :hover {
    color: #000;
  }
`;

const Banner = (props) => {
  return (
    <StyledBanner>
      <div></div>
      {props.children}
      <CloseButton onClick={props.handleClick}>X</CloseButton>
    </StyledBanner>
  );
};

export default Banner;
