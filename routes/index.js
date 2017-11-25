const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controller/markov-controller');

router.get('/', function (req, res, next) {
  res.render('login')
});

router.post('/login', passport.authenticate('ldapauth', {session: false, failureRedirect: '/'}), function(req, res) {
  controller.setLoginCookie;
  res.send({
    "code":200,
    "success": "login sucessfull"
  });
});

module.exports = router;