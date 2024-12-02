// Productos de ejemplo
const productos = [
    { nombre: "Abrigo", talle: "XL", precio: "$50.000" },
    { nombre: "Blusa", talle: "XL", precio: "$15.000" },
    { nombre: "Camisa", talle: "L", precio: "$20.000" },
    { nombre: "Pantalón", talle: "M", precio: "$90.000" },
    { nombre: "Vestido", talle: "S", precio: "$90.000" },
];

// Referencias
const productList = document.getElementById("product-list");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");

// Función para mostrar productos
function mostrarProductos(filtro = "") {
    productList.innerHTML = ""; // Limpiar lista
    const productosFiltrados = filtro
        ? productos.filter((p) => p.nombre.toLowerCase().startsWith(filtro.toLowerCase()))
        : productos;

    productosFiltrados.forEach((producto) => {
        const item = document.createElement("div");
        item.classList.add("product-item");
        item.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Talle:45 ${producto.talle}</p>
            <p>Precio ${producto.precio}</p>
        `;
        productList.appendChild(item);
    });
}

// Evento del formulario
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const filtro = searchInput.value;
    mostrarProductos(filtro);
});

// Mostrar todos los productos al cargar la página
mostrarProductos();
