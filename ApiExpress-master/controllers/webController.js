const Menu = require('../modules/Menu');
const Productos = require('../modules/Productos');
const Clientes = require('../modules/clientes');
const Proveedores = require('../modules/Proveedores');
const Pedidos = require('../modules/pedidos');
const Mesa = require('../modules/Mesa');
const Nosotros = require('../modules/nosotros');

exports.getMenu = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.render('menu', { menus });
    } catch (error) {
        console.log("Problemas al renderizar la pagina");
    }
}

exports.getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.render('productos', { productos });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos");
    }
}

exports.getProductosDeCantabria = async (req, res) => {
    try {
        const productosdecantabria = await Productos.find({ esCantabro: true });
        res.render('productosdecantabria', { productosdecantabria });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos de Cantabria");
    }
}

exports.home = (req, res) => {
    res.render('home');
}

exports.contacto = (req, res) => {
    res.render('contacto');
}

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Clientes.find(); // Utiliza el modelo Cliente y el método find()
        res.render('clientes', { clientes });
    } catch (error) {
        console.log("Error al obtener los clientes:", error);
        res.status(500).send("Error al obtener los clientes");
    }
}

exports.getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.find();
        res.render('proveedores', { proveedores });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos");
    }
}

exports.getPostular = async (req, res) => {
    res.render('postularseproveedor');

}

exports.getMesas = async (req, res) => {
    try {
        const mesas = await Mesa.find();
        res.render('mesas', { mesas });
    } catch (error) {
        console.log("Problemas al renderizar la página de mesas:", error);
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
}

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
}

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
}

exports.getNosotros = async (req, res) => {
    try {
        const informacionNosotros = await Nosotros.findOne(); // Utiliza el modelo Nosotros y el método findOne()
        res.render('nosotros', { informacionNosotros });
    } catch (error) {
        console.log("Problemas al obtener la información sobre nosotros:", error);
        res.status(500).send("Error interno del servidor");
    }
}

exports.getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.find(); // Utiliza el modelo Pedidos y el método find()
        res.render('pedidos', { pedidos });
    } catch (error) {
        console.log("Error al obtener los pedidos:", error);
        res.status(500).send("Error al obtener los pedidos");
    }
};