const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');


module.exports = () => {
    router.get('/', webController.home);

    router.get('/menu', webController.getMenu);

    router.get('/productos', webController.getProductos);
	
	router.get('/productos/productosdecantabria', webController.getProductosDeCantabria);


    
    return router;
}
