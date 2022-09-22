const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

router.get('/add-coffee', (req, res) => {
    res.render('admin/edit-coffee', {
        pageTitle: 'Add Coffee',
        path: '/admin/add-coffee',
        editing: false
    });
});

router.get('/edit-coffee/:coffeeId', (req, res) => {
    const editMode = req.query.edit;
    if (editMode && editMode !== 'true') {
        return res.redirect('/');
    }
    const coffeeId = req.params.coffeeId;
    req.user.getCoffees({
        where: {
            id: coffeeId
        }
    })
    //Coffees.findbyPk(coffeeId)
    .then((coffees) => {
        const coffee = coffees[0];
        if (!coffee) {
            return res.redirect('/');
        }
        res.render('admin/edit-coffee', {
            pageTitle: 'Edit Coffee',
            path: '/admin/edit-coffee',
            editing: editMode === undefined || editMode === 'true',
            coffee: coffee
        });
    })
    .catch(err => console.error(err));
});

router.post('/add-coffee', (req, res) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createCoffee({
        name: name,
        imageUrl: imageUrl,
        price: price,
        description: description
    })
    .then(result => {
        res.redirect('admin/coffees');
    })
    .catch(err => console.log(err));
});

router.post('edit-coffee', (req, res) => {
    const id = req.body.coffeeId;
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    Coffee.findByPk(id)
        .then(coffee => {
            coffee.name = name;
            coffee.imageUrl = imageUrl;
            coffee.price = price;
            coffee.description = description;
            return coffee.save();
        })
        .then(result => res.redirect('admin/coffees'))
        .catch(err => console.log(err));
});

router.get('/coffees', (req, res) => {
    req.user.getCoffees()
    //Coffee.findAll()
        .then((coffees) => {
            res.render('admin/coffees', {
                coffs: coffees,
                pageTitle: 'Admin Coffees',
                path: '/admin/coffees'
            });
        })
        .catch(err => console.error(err));
});
router.post('/delete-coffee', (req, res) => {
    const coffeeId = req.body.coffeeId;
    coffee.destroy({
        where: {
            id: coffeeId
        }
    })
    .then(() => res.redirect('/admin/coffees'))
    .catch(err => console.error(err));
});

module.exports = router;