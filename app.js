function mostrarDetalles(boton) {
  let cajaDetalles = boton.previousElementSibling;

  cajaDetalles.classList.toggle("mostrar");

  if (cajaDetalles.classList.contains("mostrar")) {
    boton.textContent = "Ocultar detalles";
  } else {
    boton.textContent = "Ver detalles";
  }
}