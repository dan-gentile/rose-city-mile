import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ExternalLink from "./Links/ExternalLink";

const StyledDropDown = styled.div`
  position: absolute;
  top: 58px;
  width: 180px;
  transform: translateX(-20%);
  background-color: var(--grey);
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
`;

const MenuItem = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const DropDown = () => {
  return (
    <>
      <StyledDropDown>
        <MenuItem>
          <ExternalLink href="https://www.facebook.com">Facebook</ExternalLink>
        </MenuItem>
        <MenuItem>
          <ExternalLink href="https://www.facebook.com">
            2018 Results
          </ExternalLink>
        </MenuItem>
      </StyledDropDown>
    </>
  );
};

export default DropDown;
