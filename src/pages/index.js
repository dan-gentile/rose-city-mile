import React from "react";
import HeroImage from "../components/HeroImage";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Article from "../components/Article";
import LogoBar from "../components/LogoBar";
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
