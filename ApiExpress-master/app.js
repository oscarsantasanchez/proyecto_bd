// app.js

var express = require('express');
var path = require('path');
var routes = require('./routes');
var mongoose = require('mongoose');

var app = express();

// Configurar el motor de vistas
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './public'));

//Conexión con MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ApiExpress')
  .then(() => {})
  .catch(() => {});

//Definir rutas de la aplicación   
app.use('/', routes());

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
