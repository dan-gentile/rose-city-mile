import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Home from "../components/Home/home";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `rose city mile`,
        `rose city track club`,
        `portland or`,
        `track race`,
      ]}
    />
    <Home />
  </Layout>
);

export default IndexPage;
