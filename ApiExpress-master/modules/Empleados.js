const fs = require('fs');

const mongoose = require('mongoose');

const empleadosSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    nombre: {
        type: String
    },
    profesion: {
        type: String
    }
});

module.exports = mongoose.model('Empleado', empleadosSchema);
