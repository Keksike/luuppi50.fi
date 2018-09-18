module.exports = {
  siteMetadata: {
    title: 'Luuppi ry - 50 vuotta',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f0ad00',
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
