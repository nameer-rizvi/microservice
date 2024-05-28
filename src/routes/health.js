function getHealthRoute(req, res) {
  res.sendStatus(200);
}

module.exports = { get: getHealthRoute };
