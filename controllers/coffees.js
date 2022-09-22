const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

//show route for menu of coffees to purchase 
router.get("/", async (req, res) => {
  Coffee.findAll()
    .then(coffees => {
      res.render('/coffees/shop', {
        coffs: coffees,
        pageTitle: 'Shop'
      });
    })
    .catch(err => console.log(err));
    });

  //route to show details for coffees
  router.get('/details', (req, res) => {
    const coffId = req.params.coffeeId;
    coffee.findByPk(coffId)
    .then((coffee) => {
      res.render('coffees/detail', {
        coffee: coffee,
        pageTitle: coffee.name,
      });
    })
    .catch(err => console.log(err));
  });

  //route to put coffee in cart
  router.get('/cart', (req, res) => {
    req.user.getCart()
    .then(cart => {
      return cart.getCoffees()
    })
    .then(coffees => {
      res.render('coffees/cart', {
        pageTitle: 'Cart',
        coffees: coffees
      })
    })
    .catch(err => console.log(err));
  });
//post route for coffees added to cart
  router.post('/cart', (req, res) => {
    const coffId = req.body.coffeeId;
    let fetchedCart;
    let newQty = 1;
    req.user
      .getCart()
      .then(cart => {
        fetchedCart = cart;
        return cart.getCoffees({
          where: {
            id: coffId
          }
        });
      })
      .then(coffees => {
        let coffee;
        if (coffees.length > 0) {
          coffee = coffees[0];
        }
        if (coffee) {
          const oldQty = coffee.cartItem.quantity;
          newQty = oldQty +1;
          return coffee;
        } else {
          return coffee.findByPk(coffId);
        }
      })
      .then((coffee) => {
        return fetchedCart.addCoffee(coffee, {
          through: {
            quantity: newQty
          }
        });
      })
      .then(() => res.redirect('/cart'))
      .catch(err => console.log(err));
  });

//delete route for coffees removed from cart
router.delete('/cart', (req, res) => {
  const coffId = req.body.coffeeId;
  req.user.getCart()
    .then(cart => {
      return cart.getCoffees({
        where: {
          id: coffId
        }
      });
    })
    .then(coffees => {
      const coffee = coffees[0];
      return coffee.cartItem.destroy();
    })
    .then(() => res.redirect('/cart'))
    .catch(err => console.log(err));
});

router.get()











module.exports = router;