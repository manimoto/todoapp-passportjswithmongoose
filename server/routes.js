var express = require('express'),
    path = require('path'),
    User = require('./models/user'),
    rootPath = path.normalize(__dirname + '/../'),
    apiRouter = express.Router(),
    router = express.Router();
//expressJwt = require('express-jwt');
//jwt = require('jsonwebtoken');

module.exports = function (app, passport) {
 /*   app.all('/*', function(req, res, next) {
        // CORS headers
        res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        // Set custom headers for CORS
        res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
        if (req.method == 'OPTIONS') {
          res.status(200).end();
        } else {
          next();
        }
      });
*/
    app.use('/api', expressJwt({ secret: secret }));
    app.use(express.json());
    app.use(express.urlencoded());

    //api routes
    app.use('/api', apiRouter);
    app.use('/', router);


    //Api Routes
    require('./api/ninjas')(apiRouter);

    //home Routes
    router.get('/', function (req, res) {
        res.render('index');
    });

    router.get('/admin', function (req, res) {
        res.render('admin/login');
    });

    router.get('/admin/register', function (req, res) {
        res.render('admin/register');
    });

    router.get('/admin/dashboard', isAdmin, function (req, res) {
        res.render('admin/dashboard');
    });

    router.post('/register', function (req, res) {
        //passport-local-mongoose method to register
        User.register(new User({
            email: req.body.email
        }), req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                return;
            }
            //log the user after creation
            passport.authenticate('local')(req, res, function () {
                console.log("authenticated by passport");
                res.redirect('admin/dashboard');
            });


        })
    });

    router.post('/login', passport.authenticate('local'), function (req, res) {
        res.redirect('/admin/dashboard');
    });

    app.use(function (req, res) {
        res.status(404);
        res.render('404');
        return;
    })

};

function isAdmin(req, res) {
    if (req.isAuthenticated() && req.user.email === 'manish@gmail.com') {
        console.log('Welcom admin cool Here is dashboard ');
        next();
    }
    else {
        console.log('You are not an admin');
        res.redirect('/admin');
    }
}

