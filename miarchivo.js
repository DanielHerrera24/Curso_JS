// Variables para los artículos y sus precios
let articulo1 = { nombre: 'Cable 1m', precio: 10 };
let articulo2 = { nombre: 'Caja electrica 2x4', precio: 20 };
let articulo3 = { nombre: 'Contacto doble', precio: 30 };
let articulo4 = { nombre: 'Apagador sencillo', precio: 40 };
let articulo5 = { nombre: 'Braker sencillo', precio: 50 };
let articulo6 = { nombre: 'Bombilla sencilla', precio: 60 };
let articulo7 = { nombre: 'Tira Luces LED', precio: 70 };
let articulo8 = { nombre: 'Artículo 8', precio: 80 };

// Función para mostrar los artículos disponibles
function mostrarArticulos() {
    alert("Revisa la consola para consultar la lista de articulos y sus precios!")
    console.log('Artículos disponibles:');
    console.log('1. ' + articulo1.nombre + ' - $' + articulo1.precio);
    console.log('2. ' + articulo2.nombre + ' - $' + articulo2.precio);
    console.log('3. ' + articulo3.nombre + ' - $' + articulo3.precio);
    console.log('4. ' + articulo4.nombre + ' - $' + articulo4.precio);
    console.log('5. ' + articulo5.nombre + ' - $' + articulo5.precio);
    console.log('6. ' + articulo6.nombre + ' - $' + articulo6.precio);
    console.log('7. ' + articulo7.nombre + ' - $' + articulo7.precio);
    console.log('8. ' + articulo8.nombre + ' - $' + articulo8.precio);
}

// Función para obtener el nombre de un artículo seleccionado
function obtenerNombreArticulo(opcion) {
    let nombre = '';

    switch (opcion) {
        case 1:
            nombre = articulo1.nombre;
            break;
        case 2:
            nombre = articulo2.nombre;
            break;
        case 3:
            nombre = articulo3.nombre;
            break;
        case 4:
            nombre = articulo4.nombre;
            break;
        case 5:
            nombre = articulo5.nombre;
            break;
        case 6:
            nombre = articulo6.nombre;
            break;
        case 7:
            nombre = articulo7.nombre;
            break;
        case 8:
            nombre = articulo8.nombre;
            break;
    }

    return nombre;
}

// Función para obtener el precio de un artículo seleccionado
function obtenerPrecioArticulo(opcion) {
    let precio = 0;

    switch (opcion) {
        case 1:
            precio = articulo1.precio;
            break;
        case 2:
            precio = articulo2.precio;
            break;
        case 3:
            precio = articulo3.precio;
            break;
        case 4:
            precio = articulo4.precio;
            break;
        case 5:
            precio = articulo5.precio;
            break;
        case 6:
            precio = articulo6.precio;
            break;
        case 7:
            precio = articulo7.precio;
            break;
        case 8:
            precio = articulo8.precio;
            break;
    }

    return precio;
}

// Función para calcular la suma total de los precios de los artículos
function calcularSumaTotal() {
    let sumaTotal = 0;
    let continuar = true;

    while (continuar) {

        let opcion = parseInt(prompt('Ingrese el número del artículo que desea agregar (0 para salir):'));
        if (opcion === 0) {
            continuar = false; // Si el usuario selecciona 0, se detiene el ciclo
        } else if (opcion < 1 || opcion > 8) {
            alert('Opción inválida. Por favor, seleccione un número válido.');
        } else {
            let precioArticulo = obtenerPrecioArticulo(opcion);
            sumaTotal += precioArticulo; // Suma de el precio del artículo al total
            alert('Has agregado: ' + obtenerNombreArticulo(opcion) + ' - $' + precioArticulo);
            console.log('Has agregado: ' + obtenerNombreArticulo(opcion) + ' - $' + precioArticulo);
        }

        let respuesta = prompt('¿Deseas agregar otro artículo? (si/no)');
        if (respuesta.toLowerCase() == 'no') {
            continuar = false;
        }
    }

    return sumaTotal;
}

mostrarArticulos();
let sumaTotal = calcularSumaTotal();
console.log('La suma total de los precios de los artículos es: $' + sumaTotal);