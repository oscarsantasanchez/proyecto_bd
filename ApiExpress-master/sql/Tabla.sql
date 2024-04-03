create table Clientes(
    id int primary key,
    nombre varchar(20),
    apellido varchar(20));

create table Productos(
    id int primary key,
    nombre varchar(20),
    precio float);

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

insert into Productos values(1, 'Cerveza', 5);
insert into Productos values(2, 'Vino', 10);
insert into Productos values(3, 'Gaseosa', 2);
insert into Productos values(4, 'Agua', 1.5);
insert into Productos values(5, 'Hamburguesa', 8);
insert into Productos values(6, 'Pizza', 10);
insert into Productos values(7, 'Refresco de cola', 2.5);
insert into Productos values(8, 'Refresco de naranja', 2.5);
insert into Productos values(9, 'Agua mineral', 1.75);
insert into Productos values(10, 'Jugo de naranja', 2);
insert into Productos values(11, 'Ensalada verde', 4);
insert into Productos values(12, 'Sopa de pollo', 3.5);
insert into Productos values(13, 'Spaghetti al pesto', 7);
insert into Productos values(14, 'Pollo a la parrilla', 9);
insert into Productos values(15, 'Filete de salmón', 12);
insert into Productos values(16, 'Tacos al pastor', 6);
insert into Productos values(17, 'Burrito de carne asada', 7);
insert into Productos values(18, 'Papas fritas', 3);
insert into Productos values(19, 'Tarta de queso', 5);
insert into Productos values(20, 'Brownie con helado', 6);
insert into Productos values(21, 'Café americano', 2);
insert into Productos values(22, 'Café expreso', 2.5);
insert into Productos values(23, 'Té verde', 2);
insert into Productos values(24, 'Mojito', 7);
insert into Productos values(25, 'Margarita', 8);
insert into Productos values(26, 'Piña colada', 8.5);
insert into Productos values(27, 'Mojito sin alcohol', 5);
insert into Productos values(28, 'Cóctel de frutas', 4);
insert into Productos values(29, 'Smoothie de fresa', 3.5);
insert into Productos values(30, 'Batido de chocolate', 4.5);

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