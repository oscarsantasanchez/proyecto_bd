const Menu = require('../modules/Menu');
const Productos = require('../modules/Productos');
const Clientes = require('../modules/clientes'); 

exports.getMenu = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.render('menu', { menus });
    } catch (error) {
        console.log("Problemas al renderizar la página del menú");
    }
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


exports.getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.render('productos', { productos });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos");
    }
}


exports.home = (req, res) => {
    res.render('home');
}
