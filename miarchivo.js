const carrito = [];

// Funcion para mostrar articulos en el DOM
function mostrarProductos() {
    const contProductos = document.getElementById("cont-productos");

    for (const producto of productos) {
        // Desestructurar producto
        const { id, productName, precio, img } = producto
        const cardProd = document.createElement("div")
        cardProd.innerHTML = `
            <img src='${img}' class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text">${productName}</h5>
                <h5 class="precio text">$${precio} MXN</h5>
                <button class="btn btn-primary" id="${id}">Agregar al carrito</button>
            </div>
        `
        cardProd.className = "card"
        contProductos.append(cardProd)

        const btnAgregarCarrito = document.getElementById(`${id}`)
        btnAgregarCarrito.addEventListener("click", () => agregarCarrito(producto));
    }
}

// Funcion para agregar al carrito
function agregarCarrito(productoAgregado) {
    const productoEnCarrito = carrito.find((producto) => producto.id === productoAgregado.id)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1
        actCarrito()
    } else {
        const prodCantidad = { ...productoAgregado, cantidad: 1 }
        carrito.push(prodCantidad)
        actCarrito()
    }
}

function actCarrito() {
    const carritoCont = document.getElementById("barra-carrito")
    carritoCont.innerHTML = "";

    for (const producto of carrito) {
        // Desestructurar producto
        const { id, productName, precio, img, cantidad } = producto
        const cardCarrito = document.createElement("div")
        cardCarrito.innerHTML = `
                <img src='${img}' class="card-img-top img-card">
                <div class="card-body">
                    <h5 class="card-title text>${productName}</h5>
                    <h5 class="precio text>$${precio} MXN</h5>
                    <h5 class="text">Cantidad: ${cantidad}</h5>
                    <h5>Total: $${cantidad * precio} MXN</h5>
                </div>
        `
        cardCarrito.className = "card"
        cardCarrito.classList.add("card-carrito")
        cardCarrito.setAttribute("id", `producto${id}`)
        carritoCont.append(cardCarrito)
    }
}

// Funcion para eliminar el articulo individual (ultima entrega)

// Funcion para vaciar carrito
let vaciarCarrito = document.getElementById("vaciar-carrito");
vaciarCarrito.addEventListener("click", () => {

    if (carrito.length >= 1) {
        // Mostrar una alerta de confirmación
        let confirmacion = confirm("¿Estás seguro de vaciar el carrito?");
        if (confirmacion) {
            carrito.length = 0;
            actCarrito(); // Actualizar el carrito en el DOM
        }
    }
});

mostrarProductos();

// Mantiene los articulos en el carrito como la ultima vez
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") == "dark") {
        darkMode()
    } else {
        lightMode()
    }
})

// Funcion de dark mode
let btnDarkMode = document.querySelector("#btn-dark-mode")

// Funcion para activar darkMode o lightMode dando clic al boton
btnDarkMode.addEventListener("click", function () {
    if (localStorage.getItem("theme") == "dark") {
        lightMode()
    } else {
        darkMode()
    }
})

// Funcion de darkMode
function darkMode() {
    let body = document.querySelector("body")
    body.classList.add("bg-black")

    let texto = document.querySelector(".text")
    texto.classList.add("tx-white")

    let barraCarrito = document.querySelector("#offcanvasRight")
    barraCarrito.classList.add("bg-black")

    let carritoTitulo = document.querySelector(".offcanvas-title")
    carritoTitulo.classList.add("tx-white")

    localStorage.setItem("theme", "dark")
}

// Funcion de light mode
function lightMode() {
    let body = document.querySelector("body")
    body.classList.remove("bg-black")

    let texto = document.querySelector(".text")
    texto.classList.remove("tx-white")

    let barraCarrito = document.querySelector("#offcanvasRight")
    barraCarrito.classList.remove("bg-black")

    let carritoTitulo = document.querySelector(".offcanvas-title")
    carritoTitulo.classList.remove("tx-white")

    localStorage.setItem("theme", "light")
}

// Mantiene el tema (dark o light) como la ultima vez
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") == "dark") {
        darkMode()
    } else {
        lightMode()
    }
})