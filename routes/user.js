// routes/user.js (Final)

const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savRedirectUrl, isLoggedIn } = require("../Middleware.js"); 
const userController = require("../controllers/users.js")

router.route("/signup")
.get(userController.renderSignup)
.post(wrapAsync(userController.signup));

router.route("/login")
.get( userController.renderLoginForm)
.post(
    savRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.login
);

router.get("/logout", userController.logout);

// ✅ ADDED: Route for the user's profile page
router.get("/profile", isLoggedIn, userController.getProfile); 

// ✅ ADDED: Route for updating wallet coins
// The body of the request must contain the field 'amount'
router.post("/wallet/add", isLoggedIn, userController.addCoins);

module.exports = router;