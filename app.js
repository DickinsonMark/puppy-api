// *** dependencies *** //
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// *** creating instance of express *** //
const app = express();

// *** app middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// *** register routes to app *** //
const puppies = require('./routes/puppies');
app.use('/api/v1/puppies', puppies);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('request hit here');
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});

const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || '3000';
server.listen(3000);


module.exports = app;
