const express = require("express");
const config = require("./config");
const logger = require("./middlewares/logger");
const path = require("path");
const middlewares = require("./middlewares");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.set("trust proxy", config.nodeEnvInProduction); // For Express to run behind reverse proxies ("https://expressjs.com/en/guide/behind-proxies.html").

if (config.nodeEnvInDevelopment) app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", middlewares, routes, errorHandler);

app.listen(config.port, function appListener() {
  console.log(`🚀 App listening on port ${config.port} in ${config.nodeEnv}.`);
});

// https://expressjs.com/
