import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 100px;
  margin: 0 22px;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

const StyledAnchor = styled.a`
  cursor: pointer;
`;

const Logo = (props) => {
  return (
    <StyledAnchor
      href={props.link}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <StyledLogo src={props.src} alt={props.alt} />
    </StyledAnchor>
  );
};

export default Logo;
