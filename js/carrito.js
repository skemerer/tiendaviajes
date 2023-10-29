let carrito = cargarCarrito();
let montoTotalCompra = document.getElementById("montoTotalCompra");
let cantPaquetes = document.getElementById("cantPaquetes");
let botonFinalizar = document.getElementById("botonFinalizar");


function agregarAlCarrito(paquete) {
    carrito.push(paquete);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    let total = 0;
    for (const paquete of carrito) {
        total += paquete.precio;
    }
    montoTotalCompra.innerText = total;
    cantPaquetes.innerText = carrito.length;
}

function vaciarCarrito() {
    montoTotalCompra.innerText = "0";
    cantPaquetes.innerText = "0";
    localStorage.clear();
    carrito = [];
}

function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito == null) {
        return [];
    } else {
        return carrito;
    }
}

calcularTotalCarrito();

botonFinalizar.addEventListener("click", () => {
    const precioFinal = montoTotalCompra.innerText;
    Swal.fire({
        title: '¿Deseas finalizar tu compra?',
        text: `Total a pagar: $${precioFinal}`,
        showCancelButton: true,
        confirmButtonColor: '#008f39',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Compra confirmada', '¡Feliz viaje!', 'success');
            vaciarCarrito();
        }
    });
});