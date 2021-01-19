import React from "react";
import styled from "styled-components";
import ExternalLink from "./Links/ExternalLink";

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
