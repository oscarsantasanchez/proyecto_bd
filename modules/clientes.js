    const mongoose = require('mongoose');

    // Define the schema for clientes
    const clientesSchema = new mongoose.Schema({
        id: {
            type: Number,
            required: true
        },
        nombre: {
            type: String,
            required: true
        }
    });

    // Create and export the Clientes model
    module.exports = mongoose.model('clientes', clientesSchema);
