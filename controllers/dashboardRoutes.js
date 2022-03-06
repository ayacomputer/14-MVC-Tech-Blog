const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userBlogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: Blog }, { model: Comment }],
        });

        const userBlogs = userBlogData.map((userBlog) => userBlog.get({ plain: true }));
        res.status(200).json(userBlogs);

        res.render('dashboard', {
            ...userBlog,
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
        const blogData = Blog.destroy({
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