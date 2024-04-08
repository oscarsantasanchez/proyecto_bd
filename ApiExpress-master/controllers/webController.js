const Menu = require('../modules/Menu');
const Productos = require('../modules/Productos');

exports.getMenu = async(req, res)=>{
    try {
        const menus = await Menu.find();
        res.render('menu', {menus});
    } catch (error) {
        console.log("Problemas al renderizar la pagina");
    }
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
