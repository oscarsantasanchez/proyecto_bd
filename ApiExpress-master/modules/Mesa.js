const fs = require('fs');

const mongoose = require('mongoose');
const mesaSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
        unique: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    ocupada: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Mesa', mesaSchema);
