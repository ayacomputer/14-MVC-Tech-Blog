const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });
        console.log(user);
        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;