const Menu = require('../modules/Menu');

exports.getMenu = async(req, res)=>{
    try {
        const menus = await Menu.find();
        res.render('menu', {menus});
    } catch (error) {
        console.log("Problemas al renderizar la pagina");
    }
}

exports.home = (req, res) => {
    res.render('home');
}


