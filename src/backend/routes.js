const express = require('express');
const BlogCommentController = require('./app/controllers/BlogCommentController');

const router = new express.Router();

router.get('/', BlogCommentController.index);

router.get('/queryComments/:id', BlogCommentController.queryComments);

router.get('/queryChildComments/:id', BlogCommentController.queryChildComments);

router.post('/addComment', BlogCommentController.addComment);

router.put('/updateComment/:id', BlogCommentController.updateComment);

router.delete('/deleteComment/:id', BlogCommentController.deleteComment);

module.exports = router;
