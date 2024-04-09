const Menu = require('../modules/Menu');
const Productos = require('../modules/Productos');
const ProductosDeCantabria = require('../modules/ProductosDeCantabria');


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

exports.getProductosDeCantabria = async (req, res) => {
    try {
        const productosdecantabria = await Productos.find({esCantabro : true});
        res.render('productosdecantabria', { productosdecantabria });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos de Cantabria");
    }
}

exports.home = (req, res) => {
    res.render('home');
}

