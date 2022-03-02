// log in log out
const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {

        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {

        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog', async (req, res) => {
    try {
        res.render('blog', {

        })
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;