let currentGroup = 0;
const track = document.querySelector(".carousel-track");
const groups = document.querySelectorAll(".carousel-group");
const totalGroups = groups.length;

function moveSlide(direction) {
    currentGroup += direction;

    if (currentGroup < 0) {
        currentGroup = totalGroups - 1; // VUELVE AL ULT GRUPO
    } else if (currentGroup >= totalGroups) {
        currentGroup = 0; // VUELVE AL 1ER GRUPO
    }

    updateCarousel();
}

function updateCarousel() {
    const newTransform = -currentGroup * 100 + "%"; // MUEVE EL TRACK A LA POSICIÓN CORRECTA
    track.style.transform = `translateX(${newTransform})`;
    track.style.transition = "transform 0.5s ease-in-out";
}

const equipo = [
    {
        nombre: "Ma. Alejandra Emperador",
        descripcion: "Es una diseñadora que se especializa en producción, optimizando tiempos de entrega, calidad del producto y distribución. Su enfoque asegura que cada prenda refleje estilo y autenticidad, cumpliendo con altos estándares.",
        imagen: "Image/Alejandra.png",
        tipo: "DESIGNER"
    },
    {
        nombre: "Dalia López",
        descripcion: "Es una diseñadora enfocada en analizar tendencias del estilo urbano. Busca reflejar esa esencia en cada prenda con creatividad y autenticidad.",
        imagen: "Image/Dalia.png",
        tipo: "DESIGNER"
    }
];

// CONTENEDOR EQUIPO
const teamContainer = document.getElementById("team-container");

// AQUÍ RECORREMOS LOS DOS INTEGRANTES
equipo.forEach(function (integrante, index) {
    // CREAMOS DIV PRINCIPAL
    const contenedor = document.createElement("div");

    // ALTERNAMOS SI ES PAR O IMPAR
    if (index % 2 === 0) {
        contenedor.className = "about-containerdesigner1";
    } else {
        contenedor.className = "about-containerdesigner2";
    }

    // CREAMOS CONTENEDOR DE IMG
    const imagenDiv = document.createElement("div");
    imagenDiv.className = (index % 2 === 0) ? "about-imagedesigner1" : "about-imagedesigner2";

    const imagen = document.createElement("img");
    imagen.src = integrante.imagen;
    imagen.alt = integrante.nombre;

    imagenDiv.appendChild(imagen);

    // CREAMOS CONTENEDOR TEXTO
    const textoDiv = document.createElement("div");
    textoDiv.className = (index % 2 === 0) ? "about-textdesigner1" : "about-textdesigner2";

    const nombre = document.createElement("h2");
    nombre.textContent = integrante.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = integrante.descripcion;

    const tipo = document.createElement("p");
    tipo.className = "designer-text";
    tipo.innerHTML = `${integrante.tipo} <span class="stars2">&#x2738; &#x2738; &#x2738; &#x2738; &#x2738;</span>`;

    // AGREGAR LOS ELEMENTOS DE TEXTO AL DIV QUE LE CORRESPONDE (DIV TEXTO)
    textoDiv.appendChild(nombre);
    textoDiv.appendChild(descripcion);
    textoDiv.appendChild(tipo);

    // CREAMOS EL CONTENEDOR FINAL
    contenedor.appendChild(imagenDiv);
    contenedor.appendChild(textoDiv);

    // LO AGREGAMOS AL CONTENEDOR PRINCIPAL DEL HTML
    teamContainer.appendChild(contenedor);
});
