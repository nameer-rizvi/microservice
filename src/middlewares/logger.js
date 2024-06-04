// Log information for the request and the response in development.

function loggerMiddleware(req, res, next) {
  const start = Date.now(); // Date.now() is 4 times faster than performance.now() (https://stackoverflow.com/a/70545051).

  res.on("finish", function handleResFinish() {
    const timestamp = new Date().toLocaleString().replace(", ", " ");

    let statusCodeColor = 0;

    if (res.statusCode < 200) {
      statusCodeColor = 37;
    } else if (res.statusCode < 300) {
      statusCodeColor = 32;
    } else if (res.statusCode < 400) {
      statusCodeColor = 36;
    } else if (res.statusCode < 500) {
      statusCodeColor = 33;
    } else if (res.statusCode < 600) {
      statusCodeColor = 31;
    }

    const end = Date.now();

    const duration = (end - start).toLocaleString();

    const log = `[${timestamp}] \x1b[${statusCodeColor}m${res.statusCode}\x1b[0m ${req.method} ${req.path} by ${req.ip} took ${duration} ms.`;

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
