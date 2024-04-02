// Constantes para los tipos de platos
const PRIMERO = 'Primer Plato';
const SEGUNDO = 'Segundo Plato';
const POSTRE = 'Postre';
const BEBIDA = 'Bebida';

// Datos del menú (esto podría venir de una base de datos o de un archivo externo)
const menu = [
    { primero: 'Ensalada', segundo: 'Pasta', postre: 'Tiramisú', precio: '$10', bebida: 'Agua' },
    { primero: 'Sopa', segundo: 'Pescado', postre: 'Flan', precio: '$12', bebida: 'Vino' },
    // Agrega más elementos al menú según sea necesario
];

// Función para llenar la tabla con los datos del menú
function fillMenuTable() {
    const menuTableBody = document.querySelector('#menu-table tbody');

    // Limpiar la tabla antes de llenarla nuevamente
    menuTableBody.innerHTML = '';

    // Iterar sobre cada plato en el menú y agregar una fila a la tabla por cada plato
    menu.forEach(plato => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${plato.primero}</td>
            <td>${plato.segundo}</td>
            <td>${plato.postre}</td>
            <td>${plato.precio}</td>
            <td>${plato.bebida}</td>
        `;
        menuTableBody.appendChild(row);
    });
}

// Llamar a la función para llenar la tabla cuando se cargue la página
document.addEventListener('DOMContentLoaded', fillMenuTable);
