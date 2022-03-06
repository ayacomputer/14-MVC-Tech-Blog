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


router.post('/', async (req, res) => {
    try {
        if (req.session) {
            const newBlog = await Blog.create({
                id: req.body.id,
                title: req.body.title,
                content: req.body.content,
                user_id: req.session.user_id,
            })
            res.status(200).json(newBlog);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});



router.delete('/', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(blogData);
    } catch (err) {
        res.status(404).json({ message: 'No blog found with this id.' });
    }
});

module.exports = router;