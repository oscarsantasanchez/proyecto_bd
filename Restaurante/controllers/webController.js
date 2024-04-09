const Menu = require('../modules/Menu');
const Productos = require('../modules/Productos');
const Clientes = require('../modules/clientes');
const Pedidos = require('../modules/pedidos'); 



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



exports.getProductosDeCantabria = async (req, res) => {
    try {
        const productosdecantabria = await Productos.find({esCantabro : true});
        res.render('productosdecantabria', { productosdecantabria });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos de Cantabria");
    }
}


exports.contacto = (req, res) => {
    res.render('contacto');
}

exports.getMenuDelDia = async (req, res) => {
    try {
        const menuDelDia = await Productos.find({ esDelDia: true });
        res.render('menu-Del-Dia', { menuDelDia });
    } catch (error) {
        console.log("Problemas al renderizar la página del menú del día:", error);
        res.status(500).send("Error interno del servidor");
    }
};
exports.getPlatoUnico = async (req, res) => {
    try {
        const platoUnico = await Productos.find({ esPlatoUnico: true });
        res.render('plato-unico', { platoUnico });
    } catch (error) {
        console.log("Problemas al renderizar la página de plato único:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getMenuInfantil = async (req, res) => {
    try {
        const menuInfantil = await Productos.find({ esMenuInfantil: true });
        res.render('menu-infantil', { menuInfantil });
    } catch (error) {
        console.log("Problemas al renderizar la página del menú infantil:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.find(); // Utiliza el modelo Pedidos y el método find()
        res.render('pedidos', { pedidos });
    } catch (error) {
        console.log("Error al obtener los pedidos:", error);
        res.status(500).send("Error al obtener los pedidos");
    }
}

exports.home = (req, res) => {
    res.render('home');
}
