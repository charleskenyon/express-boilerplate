const routes = require('express').Router();
const main = require('./main');

routes.use('/', main);

module.exports = routes;