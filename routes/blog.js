const express = require("express")
const router = express.Router()
const { postBlog } = require("../controllers/blog");
const ensureLoggedIn = require("../config/ensureLoggedIn")

// Route to post blog
router.post("/new", ensureLoggedIn, postBlog);

module.exports = router
