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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    'gatsby-plugin-mdx',
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-netlify',
  ],
};
