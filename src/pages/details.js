import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Article from "../components/Article";

const SecondPage = () => (
  <Layout>
    <SEO title="Details" />
    <Article>
      <h1>Details</h1>
      <p>
        Rose City Mile is a fun, competitive, and accessible opportunity for
        runners of all ages and abilities to test themselves in the mile. We’re
        hopeful that we’ll be able to gather safely for our fourth annual Rose
        City Mile on June 26th, 2021 at Duniway Park. To receive updates on our
        2021 event, sign up for our newsletter.
      </p>
      <h3>Why the Mile?</h3>
      <p>
        The mile has maintained a mythical status since Sir Roger Bannister did
        what many considered humanly impossible by breaking the four minute
        barrier in 1954. We invite participants to consider, “What is your
        sub-4?” There are few opportunities to compete in the mile, as the 1500m
        / 1600m are typically the college and high school standards. Considering
        most American runners measure their daily runs and average race pace in
        terms of miles, our hope is participants will challenge themselves in
        the ultimate test: how fast can you run the mile?
      </p>
      <h3>Duniway Park</h3>
      <p>
        Our traditional annual event takes place at Duniway Park in Portland,
        Oregon. Tucked away among lush fir trees and lilacs, beloved by local
        runners since 1995 and fully reconstructed in 2017, there couldn’t be a
        more fitting setting than Duniway Track for this classic distance event.
        Some fun facts about the park: In the lilac garden of Duniway Park is a
        large Japanese Tree Lilac which blooms in June, the same month of the
        inaugural Rose City Mile. In 1918, Duniway Park was named in honor of
        Abigail Scott Duniway – writer, newspaper publisher, and advocate for
        women’s right to vote. In 1912, Duniway became the first legal female
        voter in Multnomah County.
      </p>
      <h3>Who Are We?</h3>
      <p>
        Rose City Track Club is a grassroots running club and 501(c)(3)
        nonprofit organization created by friends that value the spirit of
        competition, camaraderie, hard work, and love for the sport. Our mission
        is to provide a supportive, team-based training platform for distance
        runners ranging from locally competitive to national class, and to
        conduct accessible running events for all. Learn more about us by
        visiting rosecitytrack.com.
      </p>
    </Article>
  </Layout>
);

export default SecondPage;
