var express = require('express');
var passport = require('passport');
var router = express.Router();

//setting up dot env file and loading it
var dotenv = require('dotenv');
dotenv.load();

//Passport credentials
var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};


var login_page_link = ['/','/login']
/* GET login page. */
router.get(login_page_link, function(req, res, next) {

  console.log("Coming to initial login");
  var toSend = {
    title: 'Express',
    env: env
  }
  res.render('login', {tosend : toSend});
});


//Log Out page
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


//Callback link
router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/home');
  });


module.exports = router;
