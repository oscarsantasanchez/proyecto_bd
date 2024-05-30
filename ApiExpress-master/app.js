var express = require('express');
var path = require('path');
var routes = require('./routes');
var mongoose = require('mongoose');
var importData = require('./importData'); // Importar la función importData

var app = express();

// Configurar el motor de vistas
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './public'));

// Conexión con MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ApiExpress')
  .then(() => {
    console.log('Connected to MongoDB');
    return mongoose.connection.dropDatabase();
  })
  .then(() => {
    console.log('Database dropped successfully');
    return importData(); // Llamar a la función importData después de borrar la base de datos
  })
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });

// Definir rutas de la aplicación   
app.use('/', routes());

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
