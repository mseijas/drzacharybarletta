module.exports = {
  pathPrefix: `/gatsby-starter-hyperspace/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Dr. Zachary Barletta',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hyperspace GH',
        short_name: 'starter',
        start_url: '/',
        background_color: '#0079cc',
        theme_color: '#0079cc',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
