const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const bodyParser = require('body-parser');
// const sessions = require('express-session');
const cors = require('cors');

const { sequelize } = require('./db/database');
const Users = require('./models/users');

try {
  sequelize.authenticate()
  .then(() => {
    console.log('Conexión con la base de datos establecida')
  })
} catch {
  console.error('No se pudo conectar con la base de datos')
}

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')

const app = express();
app.use(cors());

// const oneDay = 1000*60*60*24;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//agregando sessions 
// app.use(sessions({
//   secret: "12345",
//   saveUninitialized: true,
//   cookie: {maxAge: oneDay},
//   resave: false
// }))
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/products', productsRouter);

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
