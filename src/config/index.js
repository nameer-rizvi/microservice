require("dotenv").config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  nodeEnvInDevelopment: process.env.NODE_ENV === "development",
  nodeEnvInProduction: process.env.NODE_ENV === "production",
  port: process.env.PORT,
};

module.exports = config;

// https://www.npmjs.com/package/dotenv
