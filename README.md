# microservice

Microservice boilerplate built in Node.js

## Yarn scripts

`yarn test`

Placeholder script to run tests.

`yarn lint`

Run ESLint on .js files in /src and return a report on syntax warnings/errors.

`yarn dev`

Start Express server in development mode with nodemon watching for file changes.

`yarn start`

Start Express server in production mode.

`yarn pm2-start`

Start pm2 processes defined in ecosystem.config.js.

`yarn pm2-restart`

Restart pm2 processes defined in ecosystem.config.js.

## Helpful Links

### PM2

- [Installation guide.](https://pm2.io/docs/runtime/guide/installation/)

- [Configuring an ecosystem config.](https://pm2.keymetrics.io/docs/usage/application-declaration/)

- [Log rotator.](https://github.com/keymetrics/pm2-logrotate)

#### Configuration Example

```js
const ecosystemConfig = {
  apps: [
    {
      name: "microservice",
      script: "./src/index.js",
      env: {
        TZ: "America/New_York",
      },
    },
  ],
};

module.exports = ecosystemConfig;
```

### Nginx & Certbot

- [Official documentation.](https://nginx.org/en/)

- [How to install Nginx in Amazon Linux 2023.](https://awswithatiq.com/how-to-install-nginx-in-amazon-linux-2023/)

- [Certbot instructions for Nginx website on Pip.](https://certbot.eff.org/instructions?ws=nginx&os=pip)
