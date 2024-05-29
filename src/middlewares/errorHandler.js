/* eslint no-unused-vars: 0 */
function errorHandler(error, req, res, next) {
  res.locals.error = `${error} at ${error.stack.split(" at ")[1].trim()}`; // This is logged in the logger middleware.
  // ** Create error packet to save in the database here. **
  if (error.status && error.status !== 500) {
    // If there is a status provided with the error and it's not 500, share it with the client.
    res.status(error.status).send(error.toString());
  } else {
    res.sendStatus(500);
  }
}

module.exports = errorHandler;

// https://expressjs.com/en/guide/error-handling.html
