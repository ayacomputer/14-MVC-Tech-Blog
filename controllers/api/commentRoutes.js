const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.status(200).json(comments);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/', withAuth, async (req, res) => {
    try {
        if (req.session) {
            const newComment = await Comment.create({
                ...req.body,
                user_id: req.session.user_id,
            })
            console.log(newComment);
            res.status(200).json(newComment);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {

    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(commentData);
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }



});

module.exports = router;