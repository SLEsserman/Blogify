const express = require('express');
const router = express.Router();
const { makeCommentToBlogPost } = require('../controllers/comment');
const ensureLoggedIn = require("../config/ensureLoggedIn")

// Route to make comment on blog post
router.post('/', ensureLoggedIn, makeCommentToBlogPost);

module.exports = router;