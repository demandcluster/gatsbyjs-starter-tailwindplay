
const path = require('path')
module.exports = {
  siteMetadata: {
    title: `DemandCluster`,
    description: `DemandCluster brings rocket science for ecommerce using a headless graphql API built upon the Mailchimp Open Commerce Platform`,
    author: `@rondlite`,
    github: `https://github.com/demandcluster`,
    backend: `https://backend.demandcluster.com`,
    blog: `https://discord.gg/Wfr4GJWy7C`,
    product: `https://appseed.us/apps/gatsbyjs`,
    docs: `https://docs.demandcluster.com`,
    siteUrl: `https://demandcluster.com`,
    og: {
      siteName: 'Demandcluster',
      twitterCreator: '@demandcluster',
    },

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
        icon: "src/images/maskable_icon.png",
        icon_options: [ 
          {
            "purpose": "maskable"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
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
         
        ],                           // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true,                   // boolean to turn off the default security headers
        mergeLinkHeaders: false,                      // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
        mergeCachingHeaders: true,                    // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      }
    }
  ]
};
