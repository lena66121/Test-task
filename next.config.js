const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = {
  env: {
    BASE_API_URL: 'https://simple-blog-api.crew.red',
  },
};
