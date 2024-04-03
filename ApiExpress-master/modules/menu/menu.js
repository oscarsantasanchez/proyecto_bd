const fs = require('fs');

// Datos de los menús y productos asociados
const menuProductos = [
    { menuId: 1, productoIds: [5, 7, 9, 11, 21] }, // Menu del Dia
    { menuId: 2, productoIds: [7, 10, 18, 20, 29] }, // Menu Infantil
    { menuId: 3, productoIds: [9, 12, 16, 24, 28] } // Plato Unico
];

// Datos de los productos
const productos = [
    { id: 1, nombre: 'Cerveza', precio: 5 },
    { id: 2, nombre: 'Vino', precio: 10 },
    { id: 3, nombre: 'Gaseosa', precio: 2 },
    { id: 4, nombre: 'Agua', precio: 1.5 },
    // Añade los datos de los productos restantes aquí...
    { id: 30, nombre: 'Batido de chocolate', precio: 4.5 }
];

// Función para obtener el nombre de un producto por su ID
function obtenerNombreProducto(idProducto) {
    const producto = productos.find(producto => producto.id === idProducto);
    return producto ? producto.nombre : 'Producto no encontrado';
}

// Función para generar los datos del menú en formato JSON
function generarDatosMenu(menuProducto) {
    const menu = {
        id: menuProducto.menuId,
        nombre: obtenerNombreMenu(menuProducto.menuId),
        productos: menuProducto.productoIds.map(idProducto => ({
            id: idProducto,
            nombre: obtenerNombreProducto(idProducto),
            precio: obtenerPrecioProducto(idProducto)
        }))
    };
    return menu;
}

// Función para obtener el nombre de un menú por su ID
function obtenerNombreMenu(idMenu) {
    switch (idMenu) {
        case 1:
            return 'Menu del Dia';
        case 2:
            return 'Menu Infantil';
        case 3:
            return 'Plato Unico';
        default:
            return 'Menú no encontrado';
    }
}

// Función para obtener el precio de un producto por su ID
function obtenerPrecioProducto(idProducto) {
    const producto = productos.find(producto => producto.id === idProducto);
    return producto ? producto.precio : 0;
}

// Generar los datos de los menús
const menus = menuProductos.map(generarDatosMenu);

// Escribir los datos de los menús en un archivo JSON
fs.writeFile('menu.json', JSON.stringify(menus, null, 2), err => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo menu.json generado con éxito');
    }
});
