const fs = require('fs');

const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    cantidad: {
        type: Number
    }
});


module.exports = mongoose.model('Mesa', menuSchema);
