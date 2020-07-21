module.exports = {
  siteMetadata: {
    title: `DemandCluster`,
    description: `DemandCluster brings rocket science for ecommerce using a headless graphql API built upon the Mailchimp Open Commerce Platform`,
    author: `@rondlite`,
    github: `https://github.com/demandcluster`,
    backend: `https://backend.demandcluster.com`,
    blog: `https://blog.appseed.us/tag/gatsbyjs`,
    product: `https://appseed.us/apps/gatsbyjs`,
    docs: `https://docs.demandcluster.com`

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `demandcluster`,
        short_name: `demand`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#274093`,
        display: `minimal-ui`,
        icon: `src/images/demand-beeldmerk.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    }
  ]
};
