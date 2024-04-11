const Menu = require('../modules/Menu');


exports.getMenu = async(req, res)=>{
    try {
        const menus = await Menu.find();
        res.render('menu', {menus});
    } catch (error) {
        console.log("Problemas al renderizar la pagina");
    }
}
const Mesa = require('../modules/Mesa');

exports.getMesas = async (req, res) => {
    try {
        const mesas = await Mesa.find();
        res.render('mesas', { mesas });
    } catch (error) {
        console.log("Problemas al renderizar la página de mesas:", error);
        res.status(500).send("Error al obtener las mesas");
    }
}
exports.home = (req, res) => {
    res.render('home');
}


