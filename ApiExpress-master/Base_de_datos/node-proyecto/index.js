import mongoose from 'mongoose';
import { getdata } from './api.js';

const { Schema, model } = mongoose;

let uri = 'mongodb://localhost:27017/ApiExpress';

// Trayendo la data del API
const query = await getdata().then(data => {
    return data;
}).catch(error => {
    console.log('Error obteniendo datos del API');
    process.exit(0);
});

// Conectando a la base de datos
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(uri, options).then(
    () => { console.log('Conexión exitosa a la base de datos') },
    err => { 
        console.log('No se ha podido conectar a la base de datos');
        process.exit(0);
    }
);

// Definiendo esquemas y modelos en Mongoose
const ClientesSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true }
});

const ProductosSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true }
});

const MenuSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true }
});

const MenuProductoSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    id_producto: { type: Number, required: true }
});

const MesaSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    capacidad: { type: Number, required: true }
});

const PedidosSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    id_cliente: { type: Number, required: true },
    id_mesa: { type: Number, required: true },
    fecha: { type: Date, required: true }
});

const PedidosMenuSchema = new mongoose.Schema({
    id_pedido: { type: Number, required: true },
    id_menu: { type: Number, required: true }
});

// Creando modelos
const Clientes = new mongoose.model('Clientes', ClientesSchema);
const Productos = new mongoose.model('Productos', ProductosSchema);
const Menu = new mongoose.model('Menu', MenuSchema);
const MenuProducto = new mongoose.model('MenuProducto', MenuProductoSchema);
const Mesa = new mongoose.model('Mesa', MesaSchema);
const Pedidos = new mongoose.model('Pedidos', PedidosSchema);
const PedidosMenu = new mongoose.model('PedidosMenu', PedidosMenuSchema);

// Insertando datos en la base de datos
try {
    await Clientes.insertMany(query.clientes);
    await Productos.insertMany(query.productos);
    await Menu.insertMany(query.menu);
    await MenuProducto.insertMany(query.menuProducto);
    await Mesa.insertMany(query.mesa);
    await Pedidos.insertMany(query.pedidos);
    await PedidosMenu.insertMany(query.pedidosMenu);
    console.log('Datos insertados correctamente');
    process.exit(0);
} catch (error) {
    console.log('Error al insertar datos en la base de datos');
    console.error(error);
    process.exit(0);
}
