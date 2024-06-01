const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Menu = require('./modules/Menu');
const Productos = require('./modules/Productos');
const Clientes = require('./modules/clientes');
const Proveedores = require('./modules/Proveedores');
const Mesa = require('./modules/Mesa');
const Empleados = require('./modules/empleados');

const dataFolder = path.resolve(__dirname, 'data');

mongoose.connect('mongodb://localhost:27017/Restaurante')
  .then(() => {
    console.log('Connected to MongoDB');
    return mongoose.connection.dropDatabase();
  })
  .then(() => {
    console.log('Database dropped successfully');
    return importData();
  })
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });

const importData = async () => {
  try {
    const menuData = JSON.parse(fs.readFileSync(path.resolve(dataFolder, 'menus.json'), 'utf-8'));
    await Menu.create(menuData.map(data => ({ ...data, _id: mongoose.Types.ObjectId(data._id['$oid']) })));

    const productosData = JSON.parse(fs.readFileSync(path.resolve(dataFolder, 'productos.json'), 'utf-8'));
    await Productos.create(productosData.map(data => ({ ...data, _id: mongoose.Types.ObjectId(data._id['$oid']) })));

    const clientesData = JSON.parse(fs.readFileSync(path.resolve(dataFolder, 'clientes.json'), 'utf-8'));
    await Clientes.create(clientesData.map(data => ({ ...data, _id: mongoose.Types.ObjectId(data._id['$oid']) })));

    const proveedoresData = JSON.parse(fs.readFileSync(path.resolve(dataFolder, 'proveedores.json'), 'utf-8'));
    await Proveedores.create(proveedoresData.map(data => ({ ...data, _id: mongoose.Types.ObjectId(data._id['$oid']) })));

    const mesasData = JSON.parse(fs.readFileSync(path.resolve(dataFolder, 'mesas.json'), 'utf-8'));
    await Mesa.create(mesasData.map(data => ({ ...data, _id: mongoose.Types.ObjectId(data._id['$oid']) })));

    const empleadosData = JSON.parse(fs.readFileSync(path.resolve(dataFolder, 'empleados.json'), 'utf-8'));
    await Empleados.create(empleadosData.map(data => ({ ...data, _id: mongoose.Types.ObjectId(data._id['$oid']) })));

    const reseñasData = JSON.parse(fs.readFileSync(path.resolve(dataFolder, 'reseñas.json'), 'utf-8'));
    await Reseñas.create(reseñasData.map(data => ({ ...data, _id: mongoose.Types.ObjectId(data._id['$oid']) })));

    console.log('Datos importados exitosamente');

    process.exit();
  } catch (err) {
    console.error(err);
  }
  
};
