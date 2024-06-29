const express = require('express');
const { loginWithGoogle, googleCallback, loginWithFacebook, facebookCallback, logout } = require('../controllers/authController');
const router = express.Router();

router.get('/google', loginWithGoogle);
router.get('/google/callback', googleCallback, (req, res) => {
  res.redirect('/dashboard');
});

router.get('/facebook', loginWithFacebook);
router.get('/facebook/callback', facebookCallback, (req, res) => {
  res.redirect('/dashboard');
});

router.get('/logout', logout);

module.exports = router;
