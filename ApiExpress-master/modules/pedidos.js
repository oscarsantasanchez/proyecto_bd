const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define el esquema para pedidos
const pedidosSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    nombre: {
        type: String,
        required: true
    },
    productos: [
        {
            nombre: String,
            // Agrega más propiedades según tus necesidades
        }
    ]
});

// Agrega el plugin para hacer que el campo "id" sea autoincremental
pedidosSchema.plugin(AutoIncrement, { inc_field: 'id' });

// Crea y exporta el modelo para pedidos
module.exports = mongoose.model('Pedido', pedidosSchema);
