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

router.put('/:id', withAuth, async (req, res) => {
    console.log("req.body:", req.body, "req.param.id:", req.params.id);
    try {
        const updatedCommentData = await Comment.update({
            comment: req.body.comment,
            // blog_id: req.body.blog_id
        },
            {
                where: {
                    id: req.params.id
                }
            });

        if (!updatedCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.status(200).json(updatedCommentData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
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