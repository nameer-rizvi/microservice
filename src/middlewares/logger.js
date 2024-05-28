// Log information for the request and the response in development.

function loggerMiddleware(req, res, next) {
  const start = Date.now();

  res.on("finish", function handleResFinish() {
    const statusCodeColor =
      res.statusCode < 300
        ? "32m"
        : res.statusCode < 400
        ? "36m"
        : res.statusCode < 500
        ? "33m"
        : "31m";

    const end = Date.now();

    const duration = (end - start).toLocaleString();

    const log = `\x1b[${statusCodeColor}${res.statusCode}\x1b[0m ${req.method} ${req.path} by ${req.ip} took ${duration} ms.`;

    if (res.locals.error) {
      console.error([log, res.locals.error].join(" "));
    } else if (req.query && Object.keys(req.query).length) {
      console.info(`${log} Request query: ${JSON.stringify(req.query)}.`);
    } else if (req.params && Object.keys(req.params).length) {
      console.info(`${log} Request params: ${JSON.stringify(req.params)}.`);
    } else if (req.body && Object.keys(req.body).length) {
      console.info(`${log} Request body: ${JSON.stringify(req.body)}.`);
    } else {
      console.info(log);
    }
  });

  next();
}

module.exports = loggerMiddleware;
