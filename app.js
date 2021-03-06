
// general libraries
var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks')

// internal app libraries
var index = require('./routes/index')
var contact = require('./routes/contact')

var app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.set('view engine', 'nunjucks')
// config view engine with Nunjucks setup
nunjucks.configure(path.join(__dirname, '/views'), {autoescape: true, noCache: true, watch: true, express: app})
// static files exposed to client side
// http://localhost:3000/public/stylesheets/...
// http://localhost:3000/public/javascript/...
// http://localhost:3000/public/images/...

app.use('/public', express.static(path.join(__dirname, 'public')))

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/contact', contact)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Pagina no encontrada')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error.njk', {error: err})
})

module.exports = app
