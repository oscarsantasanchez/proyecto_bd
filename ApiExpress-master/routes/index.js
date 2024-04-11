const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

module.exports = () => {
    router.get('/', webController.home);

    router.get('/menu', webController.getMenu);

    router.get('/productos', webController.getProductos);

    router.get('/menu/menu-del-dia', webController.getMenuDelDia);

    router.get('/menu/menu-infantil', webController.getMenuInfantil);

    router.get('/menu/plato-unico', webController.getPlatoUnico);

    router.get('/productos/productosdecantabria', webController.getProductosDeCantabria);
    
    router.get('/mesas', webController.getMesas);

    router.get('/contacto', webController.contacto);
    return router;
}
