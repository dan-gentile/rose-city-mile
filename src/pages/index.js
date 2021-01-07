import React from "react";
import HeroImage from "../components/HeroImage";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Article from "../components/Article";
import LogoBar from "../components/LogoBar";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroImage />
  </Layout>
);

export default IndexPage;
