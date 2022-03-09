const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, User, Blog } = require('../models');
const withAuth = require('../utils/auth');


router.get('/:id/edit', async (req, res) => {
    try {
        const updatingCommentData = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const updatingComment = updatingCommentData.get({ plain: true });
        console.table(updatingComment);
        res.render('updateComment', {
            ...updatingComment,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;