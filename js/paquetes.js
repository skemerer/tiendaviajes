const paquetes = [
    { id: 1, tipo: "Paquete", nombre: "Transporte Redondo y Acceso", precio: 450, foto: "./media/1.jpg" },
    { id: 2, tipo: "Paquete", nombre: "Transporte Redondo", precio: 200, foto: "./media/2.jpg" },
    { id: 3, tipo: "Paquete", nombre: "Acceso a Six Flags", precio: 300, foto: "./media/3.jpg" },
];

function mostrarPaquetes() {
    const sectionPaquetes = document.getElementById("section-paquetes");
    

    paquetes.forEach((paquete) => {
        const container = document.createElement("div");
        container.className = "card-paquete";
        container.innerHTML = `
            <div class="img-container">
                <img src="${paquete.foto}" alt="${paquete.nombre}" class="img-paquete" />
            </div>
            <div class="info-paquete">
                <p class="font">${paquete.nombre}</p>
                <strong class="font">$${paquete.precio}</strong>
                <button class="boton" id="btn${paquete.id}">Agregar al carrito</button>
            </div>
        `;

        sectionPaquetes.appendChild(container);

        const btnAgregar = document.getElementById(`btn${paquete.id}`);
        btnAgregar.addEventListener("click", () => agregarAlCarrito(paquete));
    });
}

mostrarPaquetes();