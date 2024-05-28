const compression = require("compression");

// The middleware will attempt to compress response bodies for all request that traverse through the middleware.

const compressionMiddleware = compression();

module.exports = compressionMiddleware;

// https://www.npmjs.com/package/compression
