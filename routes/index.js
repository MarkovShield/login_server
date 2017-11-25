const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controller/markov-controller');

router.get('/', function (req, res, next) {
  res.render('login')
});

router.post('/login', passport.authenticate('ldapauth', {session: false}), controller.setLoginCookie);

module.exports = router;