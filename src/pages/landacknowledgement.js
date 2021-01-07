import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Article from "../components/Article";

const SecondPage = () => (
  <Layout>
    <SEO title="Land Acknowledgement" />
    <Article>
      <h1>Land Acknowledgement</h1>
      <p>
        The Rose City Mile takes place in Southwest Portland. We would like to
        acknowledge the original inhabitants and traditional village sites of
        the land on which we are occupying and holding this event: the
        Multnomah, Kathlamet, Clackamas, Tumwater, Watlala bands of the Chinook,
        the Tualatin Kalapuya, Wasco, Molalla and many Indigenous nations of the
        Willamette Valley and Columbia River Plateau.
      </p>
      <p>
        We value their traditions, languages, and stories. We acknowledge their
        continued connection to this land, water, and community since time
        immemorial and pay our respects to these original stewards and their
        descendants of these lands. We also acknowledge the systemic policies of
        genocide, removal, relocation, and assimilation that have impacted – and
        continue to impact – Native communities today. We recognize we are able
        to run and move freely on this land because of the sacrifices forced
        upon its original inhabitants.
      </p>
      <p>
        To learn more about the diverse and vibrant Native American community in
        Portland, please read Leading with Tradition, a document created by the
        Portland Indian Leaders Roundtable.
      </p>
    </Article>
  </Layout>
);

export default SecondPage;
