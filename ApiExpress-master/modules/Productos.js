const mongoose = require('mongoose');

// Definir el esquema para el modelo de Productos
const productosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    esDelDia: {
        type: Boolean,
    }, 
    esCantabro: {
        type: Boolean
    }
});

// Definir el modelo de Productos utilizando el esquema definido
module.exports = mongoose.model('Productos', productosSchema);
