// Document routes are for demo purposes only.
const database = require("../database");

function postDocumentRoute(req, res) {
  const newDoc = database.add(req.body);
  res.status(201).send(newDoc);
}

function getDocumentRoute(req, res) {
  const doc = database.get(+req.params.id);
  if (doc) {
    res.status(200).send(doc);
  } else {
    res.sendStatus(404);
  }
}

function deleteDocumentRoute(req, res) {
  const result = database.delete(+req.params.id);
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
