var User = require('./models/user'),
    LocalStrategy = require('passport-local');

module.exports = function(passport){
    passport.use(User.createStrategy());

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser() );

}