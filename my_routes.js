var index = require('./routes/index.route.js');
var local = require('./routes/local-auth.route.js');
var face = require('./routes/face-auth.route.js');
var user = require('./routes/user.route.js');

module.exports = function(app) {

    /**
     * Initial routes
     */
    app.use('/', index);
    /**
     * local authentication
     */
    app.use('/', local);
    /**
     * Facebook authentication
     */
    app.use('/', face);
    /**
     * Api user
     */
    app.use('/', user);

    return app;
}
