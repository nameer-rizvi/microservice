/* eslint no-unused-vars: 0 */
function errorHandler(error, req, res, next) {
  res.locals.error = `${error} at ${error.stack.split(" at ")[1].trim()}`; // This gets logged in the logger middleware.
  if (!error.status) error.status = 500;
  // <<< Create error packet to save in the database here. >>>
  res.status(error.status).send(error.toString()); // Do not share stack trace with client, for security.
}

module.exports = errorHandler;

// https://expressjs.com/en/guide/error-handling.html
