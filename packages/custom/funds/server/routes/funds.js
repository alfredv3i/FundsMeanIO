(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Funds, app, auth, database, circles) {

        // var requiresAdmin = circles.controller.hasCircle('admin');
        // var requiresLogin = circles.controller.hasCircle('authenticated');

        // app.get('/api/funds/example/anyone', function(req, res) {
        //     res.send('Anyone can access this');
        // });
        //
        // app.get('/api/funds/example/auth', function(req, res) {
        //     res.send('Only authenticated users can access this');
        // });
        //
        // app.get('/api/funds/example/admin', function(req, res) {
        //     res.send('Only users with Admin role can access this');
        // });
        //
        // app.get('/api/funds/example/render', function(req, res) {
        //     Funds.render('index', {
        //         package: 'funds'
        //     }, function(err, html) {
        //         //Rendering a view from the Package server/views
        //         res.send(html);
        //     });
        // });

        // app.use('/', function(req, res) {
        //     console.log('getting request');
        // });

        // var user = require('../controllers/UserController');

        // app.post('/api/login', user.login);
        // app.post('/api/users', user.create);

        var fund = require('../controllers/FundController');

        app.get('/api/funds/:id', fund.getFunds);
        app.route('/api/funds')
           .get(fund.getPendingFunds)
           .post(fund.create)
           .put(fund.update);
    };
})();
