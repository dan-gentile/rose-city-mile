import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import Article from "../components/Article";

const SecondPage = () => (
  <Layout>
    <SEO title="Details" />
    <Article />
  </Layout>
);

export default SecondPage;
