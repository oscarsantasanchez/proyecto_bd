var express = require('express');
var path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// Configurar el motor de vistas
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Servir el archivo estático index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Middleware para manejar errores 404
app.use(function (req, res, next) {
    next(createError(404));
});

// Middleware para manejar otros errores
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        message: res.locals.message,
        error: res.locals.error
    });
});

module.exports = app;
