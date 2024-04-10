<?php
include_once 'DB.php';

class ManageBD extends DB {
    public function getQueries() {
        $queries = array();

        // Retrieve data from each table
        $clientes = $this->connect()->query('SELECT * FROM clientes');
        $productos = $this->connect()->query('SELECT * FROM productos');
        $menu = $this->connect()->query('SELECT * FROM menu');
        $menuProducto = $this->connect()->query('SELECT * FROM menuProducto');
        $mesa = $this->connect()->query('SELECT * FROM mesa');
        $pedidos = $this->connect()->query('SELECT * FROM pedidos');
        $pedidosMenu = $this->connect()->query('SELECT * FROM pedidosMenu');

        // Store the results in the array
        $queries = array(
            "clientes" => $clientes,
            "productos" => $productos,
            "menu" => $menu,
            "menuProducto" => $menuProducto,
            "mesa" => $mesa,
            "pedidos" => $pedidos,
            "pedidosMenu" => $pedidosMenu
        );

        return $queries;
    }
}
?>
