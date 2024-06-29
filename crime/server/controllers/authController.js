const passport = require('passport');

// Login with Google
const loginWithGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });

// Google callback
const googleCallback = passport.authenticate('google', { failureRedirect: '/login' });

// Login with Facebook
const loginWithFacebook = passport.authenticate('facebook', { scope: ['email'] });

// Facebook callback
const facebookCallback = passport.authenticate('facebook', { failureRedirect: '/login' });

// Logout
const logout = (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
};

module.exports = {
  loginWithGoogle,
  googleCallback,
  loginWithFacebook,
  facebookCallback,
  logout,
};
