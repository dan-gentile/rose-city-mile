import React from "react";
import styled from "styled-components";

const StyledHeaderImg = styled.img`
  height: 40px;
`;

const HeaderImg = (props) => {
  return <StyledHeaderImg {...props} />;
};

export default HeaderImg;
