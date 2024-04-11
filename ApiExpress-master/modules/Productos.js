const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    precio: {
        type: Number
    },
    esDelDia: {
        type: Boolean,
        default: false
    },
    esPlatoUnico: {
        type: Boolean,
        default: false
    },
    esMenuInfantil: {
        type: Boolean,
        default: false
    },
    esCantabro: {
        type: Boolean,
        default: false
    },
    tipo: { // Nuevo campo para indicar si el producto es comida o bebida
        type: String,
        enum: ['comida', 'bebida'], // Valores permitidos: 'comida' o 'bebida'
        required: true
    }
});

module.exports = mongoose.model('Productos', productosSchema);