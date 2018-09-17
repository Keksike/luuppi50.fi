module.exports = {
  siteMetadata: {
    title: 'Luuppi ry - 50 vuotta',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `black`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Crimson Text', 'Raleway'],
      },
    },
  ],
}
