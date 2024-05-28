const helmet = require("helmet");

// Helmet helps secure Express apps by setting HTTP response headers.

const helmetMiddleware = helmet();

module.exports = helmetMiddleware;

// https://helmetjs.github.io/
// https://www.npmjs.com/package/helmet
