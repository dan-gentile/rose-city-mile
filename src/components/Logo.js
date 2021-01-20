import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 100px;
  margin: 0 22px;
`;

const StyledAnchor = styled.a`
  cursor: pointer;
`;

const Logo = (props) => {
  return (
    <StyledAnchor
      key={props.key}
      href={props.link}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <StyledLogo src={props.src} alt={props.alt} />
    </StyledAnchor>
  );
};

export default Logo;
