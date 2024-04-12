const mongoose = require('mongoose');

// Definición del esquema para biólogos
const biologoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true // Indica que el nombre es obligatorio
    },
    correoElectronico: {
        type: String,
        required: true, // Indica que el correo electrónico es obligatorio
        unique: true // Indica que el correo electrónico debe ser único
    }
});

// Definición del esquema para químicos
const quimicoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true // Indica que el nombre es obligatorio
    },
    correoElectronico: {
        type: String,
        required: true, // Indica que el correo electrónico es obligatorio
        unique: true // Indica que el correo electrónico debe ser único
    }
});

// Creación de los modelos Biologo y Quimico
const Biologo = mongoose.model('Biologo', biologoSchema);
const Quimico = mongoose.model('Quimico', quimicoSchema);

module.exports = { Biologo, Quimico };
