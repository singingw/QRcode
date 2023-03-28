module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      req.flash('warning_msg', '請先登入才能使用！')
      return next()
    }
    res.redirect('/users/login')
  }
}