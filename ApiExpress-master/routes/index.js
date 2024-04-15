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

    router.get('/contacto', webController.contacto);
	
	router.get('/clientesmes', webController.getClientes);

    router.get('/proveedores', webController.getProveedores);

    router.get('/proveedores/postularseproveedor', webController.getPostular);
	
	router.get('/mesas', webController.getMesas);

    router.get('/pedidos', webController.getPedidos);

    router.get('/nosotros', webController.getNosotros);

    return router;
}
