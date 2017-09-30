
const LocalStrategy = require('passport-local').Strategy;

const User = require("./user");


module.exports = (passport) => {
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {

        done(null, user.id);

    });

    passport.use('local-signup', new LocalStrategy({
            usernameField:'email',
            passwordField:'password',
            passReqToCallback:true
        }, function (req, email, password, done) {

            console.log(email, password);

    }));
};

