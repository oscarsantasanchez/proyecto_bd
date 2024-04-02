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
insert into Productos values(1, 'Cerveza', 100);
insert into Productos values(2, 'Vino', 200);
insert into Productos values(3, 'Gaseosa', 50);