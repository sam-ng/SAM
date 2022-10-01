/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Samuel Ng`,
    description: `Samuel Ng's Personal Website`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://sam-ng.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/data/projects`,
      },
    },
    'gatsby-plugin-mdx',
    `gatsby-plugin-gatsby-cloud`,
  ],
};
