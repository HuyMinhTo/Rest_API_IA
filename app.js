var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var salesmanRouter = require('./routes/salesman'); // Salesman-Route importieren
var performanceRouter = require('./routes/performance'); // Performance-Route importieren
var cookiesRouter = require('./routes/cookies'); // Cookies-Route importieren

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // cookie-parser als Middleware hinzufügen
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/salesman', salesmanRouter); // Route /api/salesman einbinden
app.use('/api/performance', performanceRouter); // Route /api/performance einbinden
app.use('/cookies', cookiesRouter); // Cookies-Route einbinden

// 404-Fehler fangen und an den Fehlerhandler weiterleiten
app.use(function(req, res, next) {
  next(createError(404));
});

// Fehlerhandler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
