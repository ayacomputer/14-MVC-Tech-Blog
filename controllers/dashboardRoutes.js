const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        console.log('working')

    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/', async (req, res) => {
    try {
        console.log('working')
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
