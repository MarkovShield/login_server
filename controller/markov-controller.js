function setLoginCookie(req, res, next) {
  res.cookie("LOGON", "ok", { secure: true, httpOnly: true })
  res.cookie("MOD_MSHIELD_REDIRECT", "/private/xy", { secure: true, httpOnly: true })
}

module.exports = { setLoginCookie };