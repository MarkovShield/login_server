function setLoginCookie(req, res, next) {
  res.cookie("LOGON", "ok", { secure: true, httpOnly: true })
  res.cookie("MOD_MSHIELD_REDIRECT", "/private/xy", { secure: true, httpOnly: true })
  res.send({
    "code":200,
    "success": "login sucessfull"
  });
}

module.exports = { setLoginCookie };