const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // evita recargar la página

  const nombre = document.getElementById("nombre").value;
  const destino = document.getElementById("destino").value;

  if (destino === "") {
    mensaje.textContent = "Por favor selecciona un destino";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Gracias " + nombre + ", pronto te contactaremos para tu viaje a " + destino;
    mensaje.style.color = "green";
  }
});
