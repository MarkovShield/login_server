const fs = require('fs');
const loginService = require('../services/login.js');

function login(req, res, next) {
  if(loginService.validateLogin(req, res, next)) {
    res.cookie("LOGON", "ok", { secure: true, httpOnly: true })
    res.cookie("MOD_MSHIELD_REDIRECT", "/private/xy", { secure: true, httpOnly: true })
    res.send({
      "code":200,
      "success": "login sucessfull"
    });
  } else {
    res.send({
      "code":401,
      "success": "Unauthorized"
    });
  }
}

module.exports = { login };