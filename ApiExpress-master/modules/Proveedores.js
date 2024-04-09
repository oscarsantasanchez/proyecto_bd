const mongoose = require('mongoose');

// Definir el esquema para el modelo de Productos
const proveedoresSchema = new mongoose.Schema({
    nombre_proveedor: {
        type: String,
        required: true
    },
    tipo_producto: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    calidad_producto: {
        type: String,
        required: true
    },


});

// Definir el modelo de Productos utilizando el esquema definido
module.exports = mongoose.model('Proveedores', proveedoresSchema);
