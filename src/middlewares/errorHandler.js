/* eslint no-unused-vars: 0 */
function errorHandler(error, req, res, next) {
  res.locals.error = `${error} at ${error.stack.split(" at ")[1].trim()}`; // This gets logged in the logger middleware.
  // <<< Create error packet to save in the database here. >>>
  if (error.status) {
    // If there is a status provided with the error share it with the client.
    res.status(error.status).send(error.toString());
  } else {
    res.sendStatus(500);
  }
}

module.exports = errorHandler;

// https://expressjs.com/en/guide/error-handling.html
