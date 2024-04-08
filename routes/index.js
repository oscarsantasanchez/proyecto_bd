const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

module.exports = () => {
    router.get('/', webController.home);

    router.get('/menu', webController.getMenu);

    router.get('/clientesmes', webController.getClientes);

    router.get('/productos', webController.getProductos);
    
    return router;
}