import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  width: 60%;
  height: 800px;
  padding: 100px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h3 {
    text-align: center;
  }

  p {
    margin: 20px 0;
  }
`;

const Article = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export default Article;
