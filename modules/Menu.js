const fs = require('fs');

const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    nombre: {
        type: String
    },
    precio: {
        type: Number
    }
});


module.exports = mongoose.model('Menu', menuSchema);