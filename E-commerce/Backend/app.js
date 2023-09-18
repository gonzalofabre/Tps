const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const createDb = require('./utils/createDb');
const checkIfDatabaseIsEmpty = require('./utils/checkIfDatabaseIsEmpty');

const { sequelize, syncDatabase } = require('./db/database');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(cors());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

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

// Creacion de base de datos EN CASO DE QUE NO EXISTA
async function startDb () {
  try {
    await syncDatabase();
    console.log('Base de datos sincronizada');
    const isDatabaseEmpty = await checkIfDatabaseIsEmpty();
    if(isDatabaseEmpty) {
      createDb();
      console.log('Datos creados en la base de datos')
    } else {
      console.log('Datos existentes en la base de datos, no hizo falta crear datos nuevos');
    }
  } catch (error) {
    console.error('Error al sincronizar/crear base de datos')
  }
}

startDb();




module.exports = app;
