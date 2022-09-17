const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/books", (req, res) => {
  res.render("books/home");
});

router.get("/", (req, res) => {
  res.render("auth/login");
});
//routes for individual book pages (discuss routes) if time allows

//Logout Route
router.get('/logout', (req, res) => {
  req.logOut(() => {
    console.log('I am logged out')
  }); // logs the user out of the session
  req.flash('success', 'Logging out... See you next time!');
  res.redirect('/');
});

module.exports = router;