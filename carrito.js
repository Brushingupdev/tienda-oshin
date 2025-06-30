
console.log("Carrito.js cargado");
console.log("Contenido del carrito:", localStorage.getItem("carrito"));

const contenedor = document.getElementById("contenido-carrito");
const totalTexto = document.getElementById("total-carrito");
const vaciarBtn = document.getElementById("vaciar-carrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function mostrarCarrito() {
  contenedor.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    totalTexto.textContent = "";
    return;
  }

  carrito.forEach((producto, index) => {
    total += producto.precio;

    contenedor.innerHTML += `
  <div class="item-carrito">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-img"/>
    <h4>${producto.nombre}</h4>
    <p>Precio: S/. ${producto.precio.toFixed(2)}</p>
    <button onclick="eliminarProducto(${index})">Eliminar</button>
    <hr>
  </div>
`;

  });

  totalTexto.textContent = `Total a pagar: S/. ${total.toFixed(2)}`;
}


function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}


vaciarBtn.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  carrito = [];
  mostrarCarrito();
});

mostrarCarrito();


