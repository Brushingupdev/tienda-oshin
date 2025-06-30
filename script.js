const botonesAgregar = document.querySelectorAll(".boton-agregar");
const contadorCarrito = document.getElementById("contador-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (contadorCarrito) {
  contadorCarrito.textContent = carrito.length;
}

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.parentElement;

    const nombre = tarjeta.querySelector("h3")?.textContent || tarjeta.querySelector("h4")?.textContent;
    const precioTexto = tarjeta.querySelector("p").textContent;
    const precioLimpio = precioTexto.replace(/S\/|\$/g, "").trim(); 
    const precio = parseFloat(precioLimpio);
    const imagen = tarjeta.querySelector("img")?.src || "";

    const producto = { nombre, precio, imagen };

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    if (contadorCarrito) {
      contadorCarrito.textContent = carrito.length;
    }

    alert(`${nombre} añadido al carrito.`);
  });
});

const hero = document.querySelector(".hero");

  const imagenes = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg"
  ];

  let index = 0;

  function cambiarFondo() {
    hero.style.backgroundImage = `url(${imagenes[index]})`;
    index = (index + 1) % imagenes.length;
  }

  cambiarFondo(); 
  setInterval(cambiarFondo, 3500); 


