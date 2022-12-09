exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
     resolve: {
        fallback: {
            assert: false,
            process: false,
            fs: false, // require.resolve('fs'),
            os: false, //require.resolve("os"),
            util: false,//require.resolve("util"),
            stream: false,
            path: false, //require.resolve("path-browserify"),
            crypto: false,//require.resolve("crypto-browserify"),
            os: false,//require.resolve("os-browserify/browser"),


        },
      },
    })
  }