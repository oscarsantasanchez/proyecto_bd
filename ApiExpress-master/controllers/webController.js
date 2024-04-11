const Menu = require('../modules/Menu');
const Productos = require('../modules/Productos');
const ProductosDeCantabria = require('../modules/ProductosDeCantabria');
const Mesa = require('../modules/Mesa'); // Importación del esquema de mesas

exports.getMenu = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.render('menu', { menus });
    } catch (error) {
        console.log("Problemas al renderizar la pagina");
        res.status(500).send("Error interno del servidor");
    }
}
exports.getMenuDelDia = async (req, res) => {
    try {
        const menuDelDia = await Productos.find({ esDelDia: true });
        const comida = menuDelDia.filter(producto => producto.tipo === 'comida');
        const bebida = menuDelDia.filter(producto => producto.tipo === 'bebida');
        res.render('menu-Del-Dia', { comida, bebida });
    } catch (error) {
        console.log("Problemas al renderizar la página del menú del día:", error);
        res.status(500).send("Error interno del servidor");
    }
};
exports.getPlatoUnico = async (req, res) => {
    try {
        const platoUnico = await Productos.find({ esPlatoUnico: true });
        const comida = platoUnico.filter(producto => producto.tipo === 'comida');
        const bebida = platoUnico.filter(producto => producto.tipo === 'bebida');
        res.render('plato-unico', { comida, bebida });
    } catch (error) {
        console.log("Problemas al renderizar la página de plato único:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getMenuInfantil = async (req, res) => {
    try {
        const menuInfantil = await Productos.find({ esMenuInfantil: true });
        const comida = menuInfantil.filter(producto => producto.tipo === 'comida');
        const bebida = menuInfantil.filter(producto => producto.tipo === 'bebida');
        res.render('menu-infantil', { comida, bebida });
    } catch (error) {
        console.log("Problemas al renderizar la página del menú infantil:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.render('productos', { productos });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos");
        res.status(500).send("Error interno del servidor");
    }
}
exports.getProductosDeCantabria = async (req, res) => {
    try {
        const productosdecantabria = await Productos.find({ esCantabro: true });
        res.render('productosdecantabria', { productosdecantabria });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos de Cantabria");
        res.status(500).send("Error interno del servidor");
    }
}

exports.getProductosComida = async (req, res) => {
    try {
        const productosComida = await Productos.find({ tipo: 'comida' });
        res.render('productosComida', { productosComida });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos de comida:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getProductosBebida = async (req, res) => {
    try {
        const productosBebida = await Productos.find({ tipo: 'bebida' });
        res.render('productosBebida', { productosBebida });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos de bebida:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getMesas = async (req, res) => {
    try {
        const mesas = await Mesa.find();
        res.render('mesas', { mesas });
    } catch (error) {
        console.log("Problemas al renderizar la página de mesas:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getInnovacion = (req, res) => {
    try {
        res.render('innovacion'); // Renderiza la vista de innovación
    } catch (error) {
        console.log("Problemas al renderizar la página de innovación:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.home = (req, res) => {
    res.render('home');
}

exports.contacto = (req, res) => {
    res.render('contacto');
}
