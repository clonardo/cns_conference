const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

/**
 * Next config object, pre-compose
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader",
      });
    }

    return config;
  },
};

module.exports = withPlugins(
  [
    [withSass],
    [withCss],
    /*
        [
            optimizedImages,
            {
                optimizeImages: true,
                optimizeImagesInDev: true,
                handleImages: ['jpeg', 'jpg', 'jpe', 'ico', 'png', 'svg', 'webp', 'gif'],
                pngquant: true,
                gifsicle: {
                    interlaced: true,
                    optimizationLevel: 3
                }
            }
        ]
        */
  ],
  nextConfig
);
