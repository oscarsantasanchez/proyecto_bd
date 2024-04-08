const mongoose = require('mongoose');

// Definir el esquema para el modelo de Productos
const productosdecantabriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
   
});

// Definir el modelo de Productos utilizando el esquema definido
module.exports = mongoose.model('ProductosDeCantabriaSchema', productosdecantabriaSchema);

