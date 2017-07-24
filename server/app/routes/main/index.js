const main = require('express').Router();
const {home, getProducts} = require('./handlers');

main.get('/', home);
main.get('/products/:amount', getProducts);

module.exports = main;