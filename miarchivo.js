const carrito = [];

// Fetch para llamar el JSON de los productos
fetch('productos.json')
    .then(response => response.json())
    .then(productos => {
        mostrarProductos(productos);
    })
    .catch(error => console.error('No se pudieron cargar los articulos:', error));

// Funcion para mostrar articulos en el DOM
function mostrarProductos(productos) {
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
        btnAgregarCarrito.addEventListener("click", () => {

            Toastify({
                text: `Agregaste ${productName} al carrito`,
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #0c59b7, #1b78e9)",
                }
            }).showToast();
        })

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

// Funcion para agregar card de carrito al DOM en el carrito
function actCarrito() {
    const carritoCont = document.getElementById("barra-carrito")
    carritoCont.innerHTML = "";
    let sumaTotal = 0; // Declaro variable de suma total del carrito

    for (const producto of carrito) {
        const { id, productName, precio, img, cantidad } = producto // Desestructurar producto
        let subTotal = precio * cantidad // Acumular precios de productos seleccionados
        sumaTotal += subTotal;
        const cardCarrito = document.createElement("div") // Creacion de card en carrito
        cardCarrito.innerHTML = `
            <div class="mb-3">
                <div class="row g-0 cont-art-carrito">
                    <div class="col-4">
                        <img src="${img}" class="img-fluid rounded-start">
                    </div>
                    <div class="col-8">
                        <div class="card-body card-body-carrito">
                            <h5 class="card-title">${productName}</h5>
                            <h5 class="card-title">$ ${precio} MXN</h5>
                            <h5 class="card-title">Cantidad: ${cantidad}</h5>
                            <h5>Subtotal: $${subTotal} MXN</h5>
                        </div>
                    </div>
                    <button id="dlt-art-carrito" class="btn-close"></button>
                </div>
            </div>
        `
        cardCarrito.className = "card-carrito"
        cardCarrito.setAttribute("id", `producto${id}`)
        carritoCont.append(cardCarrito)

        const btnEliminarArt = cardCarrito.querySelector(".btn-close");
        btnEliminarArt.addEventListener("click", () => {
            eliminarArt(id)
        });
    }
    // Suma total
    const ContSumaTotal = document.getElementById("sumaTotal")
    ContSumaTotal.innerHTML = `$${sumaTotal} MXN`
}

// Funcion para eliminar el articulo individual
function eliminarArt(id) {
    const artIndex = carrito.findIndex(producto => producto.id === id);

    if (artIndex !== -1) {
        carrito.splice(artIndex, 1);
        actCarrito();
    }
}

// Funcion para vaciar carrito
let vaciarCarrito = document.getElementById("vaciar-carrito");
vaciarCarrito.addEventListener("click", () => {

    if (carrito.length >= 1) {
        // Mostrar una alerta de confirmación
        Swal.fire({
            title: 'Estás seguro de vaciar tu carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vacíalo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Eliminado!',
                    text: 'Tu carrito ha sido vaciado.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                carrito.length = 0;
                actCarrito(); // Actualizar el carrito en el DOM
            }
        })
    }
});