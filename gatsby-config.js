module.exports = {
  siteMetadata: {
    title: `Rose City Mile`,
    description: `The Rose City Mile is a track event held in Portland, OR every June`,
    author: `@dangentile`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rose.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
  ],
};
