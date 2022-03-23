// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  // Cuando agregas un curso presinando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);
}

// Funciones
function agregarCurso(e) {
  e.preventDefault();
  e.target.classList;
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
  console.log(curso);

  // Crear un Objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    autor: curso.querySelector("p").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Agrega elementos al arreglo articulosCarrito
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);

  carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        ${curso.titulo}
      </td>
    `;

    // Agrega el HTML del carrito en el body
    contenedorCarrito.appendChild(row);
  });
}

// Elimina los cursos del tbody
function limpiarHTML() {
  // Forma lenta
  // contenedorCarrito.innerHTML = "";

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
