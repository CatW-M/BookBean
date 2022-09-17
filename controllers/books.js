const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res) => {
  res.render("books/home");
  console.log(`BOOKS!`)
});


//routes for individual book pages (discuss routes) if time allows



module.exports = router;