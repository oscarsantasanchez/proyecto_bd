    const mongoose = require('mongoose');

    // Define the schema for clientes
    const reseñasSchema = new mongoose.Schema({
        nombre: {
            type: String,
            required: true
        },
        comentario:{
            type: String,
            required: true
        }
    });

    // Create and export the Clientes model
    module.exports = mongoose.model('Reseñas', reseñasSchema);
