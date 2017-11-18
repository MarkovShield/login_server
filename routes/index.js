const express = require('express');
const router = express.Router();
const controller = require('../controller/markov-controller');

router.get('/', function (req, res, next) {
  res.render('login')
});

router.post('/login', controller.login);

module.exports = router;