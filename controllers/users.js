// controllers/users.js (Final)

const User = require("../models/user")
const wrapAsync = require("../utils/wrapAsync");

module.exports.renderSignup = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password, phoneNumber } = req.body;
        // walletCoins default of 0 is handled by the schema
        const newUser = new User({ email, username, phoneNumber }); 
        const registeredUser = await User.register(newUser, password);
        
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Homigo");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Homigo!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    });
}

module.exports.registerUser = async(req,res) => {
    // Keeping this redundant function for completeness based on your file
    try {
        let {username, email, password, phoneNumber} = req.body;
        const newUser = new User({email, username, phoneNumber});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Homigo");
            res.redirect("/listings");
        });
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

// ✅ FIXED: GetProfile to ensure the latest User data (with walletCoins) is passed
module.exports.getProfile = wrapAsync(async (req, res) => {
    if (!req.user) {
        req.flash("error", "You must be signed in to view your profile.");
        return res.redirect("/login");
    }
    
    // Fetch the latest user document from the DB, ensuring up-to-date walletCoins
    const user = await User.findById(req.user._id);

    // Pass the user object. The template now reads coins from user.walletCoins.
    res.render("users/profile", { user: user }); 
});


// ✅ CRITICAL: Function to update the wallet coins in the database
module.exports.addCoins = wrapAsync(async (req, res) => {
    const userId = req.user._id;
    // Get amount from form input named 'amount'
    const amountToAdd = parseInt(req.body.amount, 10); 
    
    if (isNaN(amountToAdd) || amountToAdd <= 0) {
        req.flash("error", "Invalid or missing coin amount.");
        return res.redirect("/profile");
    }

    // 1. Atomically update the coin balance in MongoDB
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $inc: { walletCoins: amountToAdd } }, 
        { new: true, runValidators: true } // {new: true} returns the updated doc
    );

    if (!updatedUser) {
        req.flash("error", "User not found or update failed in MongoDB.");
        return res.redirect("/error");
    }

    // 2. Update the session user object (req.user) 
    req.user = updatedUser;

    req.flash("success", `Successfully added ${amountToAdd} coins! New balance: ₹${updatedUser.walletCoins}.`);
    res.redirect("/profile");
});