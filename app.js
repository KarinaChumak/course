var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var busboyBodyParser = require('busboy-body-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require ('mongoose');


var index = require('./routes/index');
var admin = require('./routes/admin');
var apiRouter = require('./routes/api');
var profile = require('./routes/profile');

var app = express();


mongoose.connect('mongodb://KarinaChumak:12345@ds143777.mlab.com:43777/chumakdb');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboyBodyParser({ limit: '5mb' }));
app.use(cookieParser());
app.use(session({secret: 'GytR5'}));

app.use(express.static(path.join(__dirname, 'public')));
require('./config/passport')(app);


app.use('/', index);
app.use('/admin', admin);
app.use('/profile',profile);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
