const express = require('express');
const path = require('path');
const {logWorkerRequests, setDevelopmentLocals} = require('./utils');
const cache = require('./memory-cache');

const middleware = express.Router();
const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  require('./webpack-dev')(middleware);
  middleware.use(setDevelopmentLocals);
}

middleware.use(express.static(path.resolve(__dirname, '../public')));
middleware.use(cache(60));

module.exports = middleware;