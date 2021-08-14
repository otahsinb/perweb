/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic imags
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

  ],
  siteMetadata: {
    title: 'O.Tahsin Berktaş',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 o.tahsin.b',
    contact: 'o.tahsin.b@gmail.com'
  },
}
