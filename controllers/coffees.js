const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

router.get("/", async (req, res) => {
  try {
    const coffeeAll = await db.coffee.findAll({raw: true});
    return res.render("coffees/menu", { coffees: coffeeAll });
  } catch(error) {
    console.log(error)
    res.status(400).render('main/404')
  }
});






module.exports = router;