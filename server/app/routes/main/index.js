const main = require('express').Router();
const {home} = require('./handlers');

main.get('/', home);

module.exports = main;