// Array de productos
const productos = [
    {
        id: 1,
        productName: "Cable 1m",
        precio: 20
    },
    {
        id: 2,
        productName: "Caja Electrica 2x4",
        precio: 50
    },
    {
        id: 3,
        productName: "Contacto doble",
        precio: 65
    },
    {
        id: 4,
        productName: "Apagador sencillo",
        precio: 45
    },
    {
        id: 5,
        productName: "Braker sencillo",
        precio: 70
    },
    {
        id: 6,
        productName: "Bombilla sencilla",
        precio: 40
    },
    {
        id: 7,
        productName: "Tira Luces LED (5m)",
        precio: 250
    },
    {
        id: 8,
        productName: "Artículo 8",
        precio: 140
    }
]

// Función para mostrar los productos disponibles disponibles
function mostrarProductos() {
    alert("¡Revisa la consola para ver la lista de productos y sus precios!")
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        console.log(
            `${producto.id}. ${producto.productName}. $${producto.precio}<br>`
        );
    }
}

let carrito = []
let producto;

function seleccionarProducto() {
    let productoSeleccionado;

    while (true) {
        productoSeleccionado = parseInt(prompt("Ingrese el número del producto que desea (1-8)"));

        // Verificar si el número ingresado es válido
        if (!isNaN(productoSeleccionado) && productoSeleccionado >= 1 && productoSeleccionado <= 8) {
            // Buscar el producto en el array de productos
            producto = productos.find((p) => p.id === productoSeleccionado);
            break;
        } else {
            alert("¡Ingrese un número válido de producto!");
        }
    }
}

function agregarCarrito() {
    if (producto) {
        cantidad = parseInt(prompt("¿Que cantidad desea?"))
        carrito.push({
            producto: producto.productName,
            cantidad: cantidad,
            subtotal: producto.precio * cantidad
        });
        const ultimoProductoAgregado = carrito[carrito.length - 1];
        alert(`Producto agregado al carrito: ${ultimoProductoAgregado.producto}, Cantidad: ${ultimoProductoAgregado.cantidad}, Subtotal: $${ultimoProductoAgregado.subtotal}`);
        console.log(`Producto agregado al carrito: ${ultimoProductoAgregado.producto}, Cantidad: ${ultimoProductoAgregado.cantidad}, Subtotal: $${ultimoProductoAgregado.subtotal}`);
    } else {
        alert("El producto seleccionado no existe.");
    }
}

// Funcion para confirmar si desea agregar otro producto al carrito
function otroProducto() {
    while (true) {
        seleccionarProducto();
        agregarCarrito();

        if (!confirm("¿Desea agregar otro producto?")) {
            break;
        }
    }
}

// Función para calcular la suma total de los precios de los productos
function calcularSumaTotal() {
    let sumaTotal = carrito.reduce((suma, i) => suma + i.subtotal, 0)
    console.log(`El total es: ${sumaTotal}`)
}
otroProducto()
calcularSumaTotal()