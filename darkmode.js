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
    body.classList.add("bg-negro")

    let texto = document.querySelector(".text")
    texto.classList.add("tx-white")

    let barraCarrito = document.querySelector("#offcanvasRight")
    barraCarrito.classList.add("bg-negro")

    let carritoTitulo = document.querySelector(".offcanvas-title")
    carritoTitulo.classList.add("tx-white")

    let textSuma = document.querySelector("#cont-sumaCarrito")
    textSuma.classList.add("tx-white")

    localStorage.setItem("theme", "dark")
}

// Funcion de light mode
function lightMode() {
    let body = document.querySelector("body")
    body.classList.remove("bg-negro")

    let texto = document.querySelector(".text")
    texto.classList.remove("tx-white")

    let barraCarrito = document.querySelector("#offcanvasRight")
    barraCarrito.classList.remove("bg-negro")

    let carritoTitulo = document.querySelector(".offcanvas-title")
    carritoTitulo.classList.remove("tx-white")

    let textSuma = document.querySelector("#cont-sumaCarrito")
    textSuma.classList.remove("tx-white")

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