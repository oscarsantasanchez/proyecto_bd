Drop table Productos;
ALTER TABLE Productos
ADD COLUMN esDelDia BOOLEAN;
UPDATE Productos SET esDelDia = 1 WHERE id IN (
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 80, 83, 100
);
ALTER TABLE Productos
ADD COLUMN esPlatoUnico BOOLEAN DEFAULT false;

ALTER TABLE Productos
ADD COLUMN esMenuInfantil BOOLEAN DEFAULT false;
UPDATE Productos 
SET esPlatoUnico = true 
WHERE id IN (32, 38, 49, 51, 52, 59, 62, 64, 67, 68, 71, 75, 76, 78, 80, 83, 86, 90, 93);

UPDATE Productos 
SET esMenuInfantil = true 
WHERE id IN (5, 10, 16, 20, 28, 30, 33, 36, 39, 41, 43, 44, 47, 50, 53, 54, 55, 56, 57, 58, 61, 63, 65, 66, 69, 70, 72, 73, 74, 77, 79, 81, 82, 84, 85, 87, 88, 91, 92, 94, 95, 96, 97, 98, 99, 100);

create table Productos(
    id int primary key,
    nombre varchar(40),
    precio float,
    esCantabro boolean);
insert into Productos values(1, 'Cerveza', 5, 0);
insert into Productos values(2, 'Vino', 10, 0);
insert into Productos values(3, 'Gaseosa', 2, 0);
insert into Productos values(4, 'Agua', 1.5, 0);
insert into Productos values(5, 'Hamburguesa', 8, 0);
insert into Productos values(6, 'Pizza', 10, 0);
insert into Productos values(7, 'Refresco de cola', 2.5, 0);
insert into Productos values(8, 'Refresco de naranja', 2.5, 0);
insert into Productos values(9, 'Agua mineral', 1.75, 0);
insert into Productos values(10, 'Jugo de naranja', 2, 0);
insert into Productos values(11, 'Ensalada verde', 4, 0);
insert into Productos values(12, 'Sopa de pollo', 3.5, 0);
insert into Productos values(13, 'Spaghetti al pesto', 7, 0);
insert into Productos values(14, 'Pollo a la parrilla', 9, 0);
insert into Productos values(15, 'Filete de salmón', 12, 0);
insert into Productos values(16, 'Tacos al pastor', 6, 0);
insert into Productos values(17, 'Burrito de carne asada', 7, 0);
insert into Productos values(18, 'Papas fritas', 3, 0);
insert into Productos values(19, 'Tarta de queso', 5, 0);
insert into Productos values(20, 'Brownie con helado', 6, 0);
insert into Productos values(21, 'Café americano', 2, 0);
insert into Productos values(22, 'Café expreso', 2.5, 0);
insert into Productos values(23, 'Té verde', 2, 0);
insert into Productos values(24, 'Mojito', 7, 0);
insert into Productos values(25, 'Margarita', 8, 0);
insert into Productos values(26, 'Piña colada', 8.5, 0);
insert into Productos values(27, 'Mojito sin alcohol', 5, 0);
insert into Productos values(28, 'Cóctel de frutas', 4, 0);
insert into Productos values(29, 'Smoothie de fresa', 3.5, 0);
insert into Productos values(30, 'Batido de chocolate', 4.5, 0); 
insert into Productos values(31, 'Jamón ibérico', 15, 0);
insert into Productos values(32, 'Paella', 12, 0);
insert into Productos values(33, 'Tortilla española', 6, 0);
insert into Productos values(34, 'Gazpacho', 4, 0);
insert into Productos values(35, 'Pulpo a la gallega', 14, 0);
insert into Productos values(36, 'Patatas bravas', 5, 0);
insert into Productos values(37, 'Churros con chocolate', 4, 0);
insert into Productos values(38, 'Fabada asturiana', 10, 0);
insert into Productos values(39, 'Sangría', 7, 0);
insert into Productos values(40, 'Tarta de Santiago', 8, 0);
insert into Productos values(41, 'Crema catalana', 6, 0);
insert into Productos values(42, 'Croquetas de jamón', 7, 0);
insert into Productos values(43, 'Mariscada', 20, 0);
insert into Productos values(44, 'Calamares a la romana', 9, 0);
insert into Productos values(45, 'Pisto', 6, 0);
insert into Productos values(46, 'Rabo de toro', 16, 0);
insert into Productos values(47, 'Pimientos de padrón', 5, 0);
insert into Productos values(48, 'Pescado frito', 10, 0);
insert into Productos values(49, 'Turrón', 5, 0);
insert into Productos values(50, 'Queso manchego', 8, 0);
-- Productos típicos de Cantabria
insert into Productos values(51, 'Rabas', 12, 1);
insert into Productos values(52, 'Cocido montañés', 11, 1);
insert into Productos values(53, 'Quesada pasiega', 9, 1);
insert into Productos values(54, 'Sobaos pasiegos', 6, 1);
insert into Productos values(55, 'Anchoas de Cantabria', 13, 1);
insert into Productos values(56, 'Bonito del norte en conserva', 8, 1);
insert into Productos values(57, 'Orujo de Liébana', 10, 1);
insert into Productos values(58, 'Sobao Joselín', 7, 1);
insert into Productos values(59, 'Caracoles de Cantabria', 15, 1);
insert into Productos values(60, 'Queso picón de Tresviso', 14, 1);
insert into Productos values(61, 'Cecina de ciervo', 18, 1);
insert into Productos values(62, 'Sidra cántabra', 6, 1);
insert into Productos values(63, 'Miénteme', 4, 1);
insert into Productos values(64, 'Truchas a la pasiega', 10, 1);
insert into Productos values(65, 'Tarta de hojaldre de Torrelavega', 9, 1);
insert into Productos values(66, 'Anchoas de Laredo', 12, 1);
insert into Productos values(67, 'Cachopo cántabro', 16, 1);
insert into Productos values(68, 'Roscos de anís', 5, 1);
insert into Productos values(69, 'Orujo de hierbas', 11, 1);
insert into Productos values(70, 'Revuelto de erizos de mar', 20, 1);
insert into Productos values(71, 'Carne guisada con patatas', 14, 1);
insert into Productos values(72, 'Empanada de carne', 8, 1);
insert into Productos values(73, 'Croquetas de cocido', 7, 1);
insert into Productos values(74, 'Bocartes fritos', 11, 1);
insert into Productos values(75, 'Sorropotún', 13, 1);
insert into Productos values(76, 'Queso de Nata', 12, 1);
insert into Productos values(77, 'Empanadillas de Bonito', 9, 1);
insert into Productos values(78, 'Caracoles a la montañesa', 15, 1);
insert into Productos values(79, 'Morcilla de Burgos', 7, 0);
insert into Productos values(80, 'Tarta de queso de Camaleño', 10, 1);
insert into Productos values(81, 'Sobrassada', 9, 0);
insert into Productos values(82, 'Pimiento relleno de marisco', 18, 0);
insert into Productos values(83, 'Tarta de nuez de Valderredible', 11, 1);
insert into Productos values(84, 'Cocido Lebaniego', 12, 0);
insert into Productos values(85, 'Bonito encebollado', 14, 0);
insert into Productos values(86, 'Sopa de pescado de Santoña', 11, 0);
insert into Productos values(87, 'Roscón de Reyes', 8, 0);
insert into Productos values(88, 'Leche frita', 7, 0);
insert into Productos values(89, 'Escalopines al Cabrales', 16, 0);
insert into Productos values(90, 'Cochinillo asado', 20, 0);
insert into Productos values(91, 'Cachopín', 13, 0);
insert into Productos values(92, 'Calamares en su tinta', 15, 0);
insert into Productos values(93, 'Queso de tres leches', 11, 0);
insert into Productos values(94, 'Merluza en salsa verde', 13, 0);
insert into Productos values(95, 'Hojaldre de sobaos y nata', 10, 0);
insert into Productos values(96, 'Sorbete de orujo', 6, 0);
insert into Productos values(97, 'Paté de ciervo', 9, 0);
insert into Productos values(98, 'Bollos preñaos', 5, 0);
insert into Productos values(99, 'Arroz con leche', 6, 0);
insert into Productos values(100, 'Sobrasada de Cantabria', 8, 1);


create table Clientes(
    id int primary key,
    nombre varchar(20),
    apellido varchar(20));

create table Menu(
    id int primary key,
    nombre varchar(20),
    precio float);

create table MenuProducto(
    id int,
    id_producto int,
    primary key(id, id_producto)
);

create table Mesa(
    id int primary key,
    capacidad int);

create table Pedidos(
    id int primary key,
    id_cliente int,
    id_mesa int,
    fecha date,
    primary key(id, id_cliente, id_mesa, fecha)
);

create table PedidosMenu(
    id_pedido int,
    id_menu int,
    primary key(id_pedido, id_menu)
);
Drop table productos;
insert into Clientes values(1, 'Juan', 'Perez');
insert into Clientes values(2, 'Maria', 'Gomez');
insert into Clientes values(3, 'Pedro', 'Gonzalez');
insert into Clientes values(4, 'Luis', 'Martinez');
insert into Clientes values(5, 'Ana', 'Rodriguez');
insert into Clientes values(6, 'Sofia', 'Hernandez');
insert into Clientes values(7, 'Laura', 'Lopez');
insert into Clientes values(8, 'Carlos', 'Sanchez');
insert into Clientes values(9, 'Gabriela', 'Diaz');
insert into Clientes values(10, 'Alejandro', 'Torres');
insert into Clientes values(11, 'Fernanda', 'Garcia');
insert into Clientes values(12, 'Ricardo', 'Ruiz');
insert into Clientes values(13, 'Carmen', 'Alvarez');
insert into Clientes values(14, 'Diego', 'Fernandez');
insert into Clientes values(15, 'Valentina', 'Gutierrez');
insert into Clientes values(16, 'Manuel', 'Ortega');

insert into Menu values(1, 'Menu del Dia', 15);
insert into Menu values(2, 'Menu Infantil', 8);
insert into Menu values(3, 'Plato Unico', 10);

insert into MenuProducto values(1, 5); 
insert into MenuProducto values(1, 7); 
insert into MenuProducto values(1, 9); 
insert into MenuProducto values(1, 11); 
insert into MenuProducto values(1, 21); 
insert into MenuProducto values(2, 7); 
insert into MenuProducto values(2, 10); 
insert into MenuProducto values(2, 18); 
insert into MenuProducto values(2, 20); 
insert into MenuProducto values(2, 29); 
insert into MenuProducto values(3, 9); 
insert into MenuProducto values(3, 12); 
insert into MenuProducto values(3, 16); 
insert into MenuProducto values(3, 24); 
insert into MenuProducto values(3, 28); 

insert into Mesa values(1, 4);
insert into Mesa values(2, 6);
insert into Mesa values(3, 8);

insert into Pedidos values(1, 1, 1, '2024-04-02');
insert into Pedidos values(2, 2, 2, '2024-04-02');
insert into Pedidos values(3, 3, 3, '2024-04-02');

insert into PedidosMenu values(1, 1); 
insert into PedidosMenu values(2, 2); 
insert into PedidosMenu values(3, 3);