var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection = require('./models');
var hbs = require('hbs');
var methodoverride = require('method-override');
var session = require('express-session');
var passaport = require('passport-remember-me');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carsRouter = require('./routes/car');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//helpers hbs
hbs.registerHelper('equals', function (val1, val2, options) {
  return val1==val2 ? options.fn(this) : options.inverse(this);

});
app.use(session({
        secret: 'parkingsystem',
        resave: true,
        saveUninitialized: true
}));
//app.use(passaport)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodoverride(function (req, res, next) {
  if (req.body && typeof req.body=='object' && req.body._method){
    var method  = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
