const express = require('express');
const router = express.Router();
const { followUser } = require('../controllers/user');
const ensureLoggedIn = require("../config/ensureLoggedIn")

// Route to follow a user
router.post('/follow', ensureLoggedIn, followUser);

module.exports = router;