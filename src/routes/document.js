// Document routes are for demo purposes only.
const database = require("../database");

function postDocumentRoute(req, res) {
  const result = database.add(req.body);
  res.status(201).send(result);
}

function getDocumentRoute(req, res) {
  const result = database.get(+req.params.id);
  if (result) {
    res.status(200).send(result);
  } else {
    res.sendStatus(404);
  }
}

function deleteDocumentRoute(req, res) {
  const result = database.remove(+req.params.id);
  if (result.success) {
    res.status(200).send(result);
  } else {
    res.sendStatus(404);
  }
}

module.exports = {
  post: postDocumentRoute,
  get: getDocumentRoute,
  delete: deleteDocumentRoute,
};
