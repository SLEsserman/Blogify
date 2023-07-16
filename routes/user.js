const express = require("express")
const router = express.Router()
const { followUser, getUserProfile } = require("../controllers/user")
const ensureLoggedIn = require("../config/ensureLoggedIn")
// Route to follow and unfollow a user
router.patch("/follow", ensureLoggedIn, followUser)
router.get("/:id", ensureLoggedIn, getUserProfile)

module.exports = router
