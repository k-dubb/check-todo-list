var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var Firebase = require("firebase");

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


// Firebase //

// new Firebase('https://check-todo-list.firebaseio.com/web/data');

// var ref = new Firebase("https://check-todo-list.firebaseio.com");
// ref.createUser({
//   email    : "bobtony@firebase.com",
//   password : "correcthorsebatterystaple"
// }, function(error, userData) {
//   if (error) {
//     console.log("Error creating user:", error);
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//   }
// });

// var ref = new Firebase("https://check-todo-list.firebaseio.com");
// ref.authWithPassword({
//   email    : "bobtony@firebase.com",
//   password : "correcthorsebatterystaple"
// }, function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





module.exports = app;
