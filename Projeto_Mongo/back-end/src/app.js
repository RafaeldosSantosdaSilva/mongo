const express = require('express');
const cors = require('cors');
const routes = require('./routes');
global.db = require('./config/connect')


class App {
  constructor() {
    this.server = express();
    this.appConfig();
    this.routes();
  }

  appConfig() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

const app = new App;

module.exports = app.server;