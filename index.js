
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    app = express();
    //expressJwt = require('express-jwt');
    //jwt = require('jsonwebtoken');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    envConfig = require('./server/env')[env];

mongoose.connect(envConfig.db);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:') );

//passport configuration
require('./server/passport')(passport);

//express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
//app.use(methodOverride());
//app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(require('express-session')({
    secret: 'Keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/app'));

//Routes
require('./server/routes')(app, passport);

//Start server
app.listen(envConfig.port, function(){
    console.log('listenning on Port' + envConfig.port )
})



