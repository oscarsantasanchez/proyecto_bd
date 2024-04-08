const fs = require('fs');

const mongoose = require('mongoose');

const mesaSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    cantidad: {
        type: Number
    }
});


module.exports = mongoose.model('Mesa', mesaSchema);
