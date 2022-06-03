const {BlogComment} = require('../models');

module.exports = {
    index(req, res) {
        BlogComment.findAll({
            order: [
                ['updatedAt', 'DESC']]
        })
            .then(blogComments => res.json({
                error: false,
                data: blogComments
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },

    queryComments(req, res) {
        BlogComment.findAll(
            {
                where: {url: req.params.id},
                order: [
                    ['updatedAt', 'DESC']]
            })
            .then(blogComments => res.json({
                error: false,
                data: blogComments
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },

    queryChildComments(req, res) {
        BlogComment.findAll({
            where: {rid: req.params.id},
            order: [
                ['updatedAt', 'DESC']]
        })
            .then(blogComments => res.json({
                error: false,
                data: blogComments
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },

    addComment(req, res) {
        const {QQAvatar, comment, insertedAt, link, mail, nick, objectId, ua, url, pid, rid} = req.body;
        BlogComment.create({
            QQAvatar, comment, insertedAt, link, mail, nick, objectId, ua, url, pid, rid
        })
            .then(comment => res.status(201).json({
                error: false,
                data: comment,
                message: "new comment has been created"
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },

    updateComment(req, res) {
        const comment_id = req.params.id;

        const {comment} = req.body;

        BlogComment.update({
            comment
        }, {
            where: {
                id: comment_id
            }
        })
            .then(comment => res.status(201).json({
                error: false,
                data: comment,
                message: 'comment has been updated'
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    },

    deleteComment(req, res) {
        const user_id = req.params.id;

        BlogComment.destroy({
            where: {
                id: user_id
            }
        })
            .then(status => res.status(201).json({
                error: false,
                message: 'comment has been deleted'
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    }
}
