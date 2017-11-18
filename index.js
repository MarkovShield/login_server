"use strict";

/**
 * Server configuration
 */
const https = require('https');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const routes = require('./routes/index');
const secrets = require('./services/markov-secrets');
const pug = require('pug');

const allowCrossDomain = function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,POST');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

/**
 * Basic server
 */
const app = express();
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(favicon(__dirname + '/public/img/icon.png'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Server start
 */
const appPort = 8080;
https.createServer(secrets.servercert, app).listen(appPort);
console.log('https server running on port ' + appPort);


