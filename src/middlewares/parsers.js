const express = require("express");

// Express's parsers are required to parse request bodies as json.

const jsonParser = express.json({ limit: "1mb" });

const urlEncodedParser = express.urlencoded({ extended: true });

module.exports = [jsonParser, urlEncodedParser];

// https://expressjs.com/en/api.html
