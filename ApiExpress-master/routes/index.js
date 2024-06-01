const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

module.exports = () => {
    router.get('/', webController.home);

    router.get('/menu', webController.getMenu);

    router.get('/clientesmes', webController.getClientes);

    router.post('/clientesmes',webController.createCliente);

    router.delete('/clientesmes/:id', webController.deleteCliente);

    router.get('/productos', webController.getProductos);

    router.post('/productos', webController.createProducto);

    router.get('/menu/menu-del-dia', webController.getMenuDelDia);

    router.get('/menu/menu-infantil', webController.getMenuInfantil);

    router.get('/menu/plato-unico', webController.getPlatoUnico);

    router.get('/productos/productosdecantabria', webController.getProductosDeCantabria);

    router.get('/contacto', webController.contacto);
    
    router.get('/pedidos', webController.getPedidos);

    router.get('/empleados', webController.getEmpleados);
	
    router.get('/proveedores', webController.getProveedores);

    router.get('/mesas', webController.getMesas);
    
    router.get('/proveedores/postularseproveedor', webController.getPostular);  

    router.get('/nosotros', webController.getNosotros);

    router.get('/apiresenas', webController.getResenas);

    router.post('/apiresenas', webController.createResenas);

    router.get('/resenas', webController.getPresenas);

    router.delete('/apiresenas/:nombre', webController.deleteResenas);

    return router;
}
