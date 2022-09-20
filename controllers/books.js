const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", async (req, res) => {
  try {
    const bookAll = await db.book.findAll({raw: true});
    console.log(`Test`);
    console.log(bookAll);
    return res.render("books/home", { books: bookAll });
  } catch(error) {
    console.log(error)
    res.status(400).render('main/404')
  }
});


//routes for individual book pages (discuss routes) if time allows



module.exports = router;