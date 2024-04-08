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

