const secrets = require('./markov-secrets.js');
const constants = require('./markov-constants');

function validateLogin(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  if (username = "testuser" && password == "12345") {
    return true;
  }
  return false;
}

module.exports = { validateLogin };