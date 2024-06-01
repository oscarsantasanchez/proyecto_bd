const Menu = require('../modules/Menu');
const Productos = require('../modules/Productos');
const Clientes = require('../modules/clientes');
const Proveedores = require('../modules/Proveedores');
const Pedidos = require('../modules/pedidos');
const Mesa = require('../modules/Mesa');
const Nosotros = require('../modules/nosotros');
const Empleados = require('../modules/empleados'); 
const Resenas = require('../modules/Resenas');

exports.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleados.find();
        res.render('empleados', { empleados });
    } catch (error) {
        console.log("Problemas al renderizar la página de empleados:", error);
        res.status(500).send("Error interno del servidor");
    }
};


exports.getMenu = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.render('menu', { menus });
    } catch (error) {
        console.log("Problemas al renderizar la pagina");
    }
};

exports.getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.render('productos', { productos });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos");
    }
};

exports.createProducto = async (req, res) => {
    try {
        const { nombre, precio, tipo, esDelDia, esPlatoUnico, esMenuInfantil, esCantabro } = req.body;

        if (!nombre || !precio || !tipo) {
            return res.status(400).send("All fields are required");
        }

        const newProducto = new Productos({
            nombre,
            precio,
            esDelDia,
            esPlatoUnico,
            esMenuInfantil,
            esCantabro,
            tipo
        });

        await newProducto.save();
        res.status(201).send("Product created successfully");
    } catch (error) {
        console.log("Error creating new product:", error);
        res.status(500).send("Internal server error");
    }
};

exports.getProductosDeCantabria = async (req, res) => {
    try {
        const productosdecantabria = await Productos.find({ esCantabro: true });
        res.render('productosdecantabria', { productosdecantabria });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos de Cantabria");
    }
};

exports.home = (req, res) => {
    res.render('home');
};

exports.contacto = (req, res) => {
    res.render('contacto');
};

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Clientes.find(); // Utiliza el modelo Cliente y el método find()
        res.render('clientes', { clientes });
    } catch (error) {
        console.log("Error al obtener los clientes:", error);
        res.status(500).send("Error al obtener los clientes");
    }
};

exports.createCliente = async (req, res) => {
    try {
        const { id, nombre, telefono, frecuenciavisita } = req.body;

        if (!id || !nombre || !telefono || !frecuenciavisita) {
            return res.status(400).send("All fields are required");
        }

        const newCliente = new Clientes({
            id,
            nombre,
            telefono,
            frecuenciavisita
        });

        await newCliente.save();
        res.status(201).send("Client created successfully");
    } catch (error) {
        console.log("Error creating new client:", error);
        res.status(500).send("Internal server error");
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).send("Client ID is required");
        }

        await
        Clientes.findOneAndDelete({
            id
        });

        res.status(200).send("Client deleted successfully");
    } catch (error) {
        console.log("Error deleting client:", error);
        res.status(500).send("Internal server error");
    }
};

exports.getPresenas = async (req, res) => {
    try {
        const resenas = await Resenas.find(); 
        res.render('resenas', { resenas });
    } catch (error) {
        console.log("Error al obtener las reseñas:", error);
        res.status(500).send("Error al obtener las reseñas");
    }
};

exports.getResenas = async (req, res) => {
    try {
        const resenas = await Resenas.find();
        console.log('Fetched Resenas:', resenas);
        res.json({ resenas });
    } catch (error) {
        console.log("Problemas al leer las resenas",error);
        return res.status(500).json({error: "Error al obtener las resenas"});
    }
};

exports.createResenas = async (req, res) => {   
    try {
        const { nombre, comentario } = req.body;
        if (!nombre || !comentario) {
            return res.status(400).send("All fields are required");
        }
        const newResena = new Resenas({
            nombre,
            comentario
        });
        await newResena.save();
        res.status(201).json({ success: true, message: 'Review created successfully', resena: newResena });
    } catch (error) {
        console.log("Error al crear una nueva reseña:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.deleteResenas = async (req, res) => {
    try {
        const { nombre } = req.params;
        if (!nombre) {
            return res.status(400).send("El nombre de la reseña es requerido");
        }
        await Resenas.findOneAndDelete({
            nombre
        });
        res.status(200).send("Reseña eliminada correctamente");
    } catch (error) {
        console.log("Error al eliminar la reseña:", error);
        res.status(500).send("Error interno del servidor");
    }
};

exports.getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.find();
        res.render('proveedores', { proveedores });
    } catch (error) {
        console.log("Problemas al renderizar la página de productos");
    }
};

exports.getPostular = async (req, res) => {
    res.render('postularseproveedor');

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

exports.getNosotros = async (req, res) => {
    try {
        const informacionNosotros = await Nosotros.findOne(); // Utiliza el modelo Nosotros y el método findOne()
        res.render('nosotros', { informacionNosotros });
    } catch (error) {
        console.log("Problemas al obtener la información sobre nosotros:", error);
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
};