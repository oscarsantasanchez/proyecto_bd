// En el archivo modules/nosotros.js

const mongoose = require('mongoose');

const nosotrosSchema = new mongoose.Schema({
    // Define los campos del esquema según tus necesidades
    titulo: String,
    descripcion: String,
    imagen: String
});

const Nosotros = mongoose.model('Nosotros', nosotrosSchema);

module.exports = Nosotros;
