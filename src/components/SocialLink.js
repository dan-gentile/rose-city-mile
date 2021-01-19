import React from "react";
import styled from "styled-components";

const SocialA = styled.a`
  color: var(--background);

  :hover {
    color: var(--black);
  }
`;

const SocialLink = (props) => {
  return (
    <li>
      <SocialA
        name="social-link"
        href={props.socialLink}
        target="_blank"
        rel="noreferrer"
        title={props.title}
        aria-label={props.label}
      >
        {props.fontAwesomeIcon}
      </SocialA>
    </li>
  );
};

export default SocialLink;
