var express = require("express")
var moment = require("moment")
var router = express.Router()
const passport = require("passport")
const ensureLoggedIn = require("../config/ensureLoggedIn")
const blogRoute = require("./blog")

router.use("/blog", blogRoute)

// Route for the profile page
router.get("/profile", ensureLoggedIn, function (req, res, next) {
  console.log("was reached", req.user)
  return res.send({
    user: req.user,
  })
})

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", {
    // Requesting the user's profile and email
    scope: ["profile", "email"],
    // Optionally force picking an account every time
    prompt: "select_account",
  })
)

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "http://localhost:5173/login",
  })
)

// OAuth logout route
router.get("/logout", function (req, res) {
  // Call req.logout to log the user out
  req.logout(function () {
    // Redirect to the home page
    res.status(200).end();
  })
})

// Export the router
module.exports = router
