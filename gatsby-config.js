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
        icons: [
          {"src": `src/images/demand-beeldmerk.png`,
           "purpose": "any"
          },
          {
            "src": "src/images/maskable_icon.png",
            "purpose": "maskable"
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ]
        },                                  // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "Link: </static/hero.png>; rel=preload; as=image",
        ],                           // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true,                   // boolean to turn off the default security headers
        mergeLinkHeaders: false,                      // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
        mergeCachingHeaders: true,                    // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      }
    }
  ]
};
