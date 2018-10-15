const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Luuppi ry - 50 vuotta',
  },
  plugins: [
    // Allows injecting tags to <head> without putting code to html.js
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    // Allows to use Gatsby 1.0 -styled layout architecture
    // --> we dont need to load header again on every page load
    'gatsby-plugin-layout',
    {
      // Shows progress bar on top of the page
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f0ad00',
      },
    },
    {
      // Allows Google fonts to load earlier
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Crimson Text', 'Raleway'],
      },
    },
    {
      // Allows to get images from graphql-queries
      // --> enables lazy loading
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'static', 'images'),
      },
    },
    // Image helper plugins
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
