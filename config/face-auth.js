var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./../models/user.model.js');

passport.use(new FacebookStrategy({
    clientID: "290046521330776",
    clientSecret: "d324100182cb0c1bc4d41595e45d5f02",
    callbackURL: "http://nodebase.herokuapp.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    User.findOne({id : profile.id}, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        var usuario = new User({
          id : profile.id,
          name : profile.name
        });
        usuario.save(function() {
          done(null, usuario);
        });
      } else {
        done(null, user);
      }
    });
  }
));

module.exports = function(app){
  app.use(passport.initialize());
  app.use(passport.session());

  return (passport, app);
}
