const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc      Authenticate with Passport Google Strategy
// @route     GET /auth/google
router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

// @desc      Passport google callback
// @route     GET /auth/google/callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Success authenticate, redirect
    res.status(200).redirect('/dashboard');
  }
);

// @desc      Handle logout
// @route     GET /logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;