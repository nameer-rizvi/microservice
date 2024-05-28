const middlewares = [
  require("./cors"),
  require("./helmet"),
  require("./parsers"),
  require("./compression"),
];

module.exports = middlewares;
