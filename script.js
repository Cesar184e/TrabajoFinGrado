const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

const paises = [
  "España","Francia","Italia","Portugal","Alemania","Reino Unido","Irlanda",
  "Noruega","Suecia","Finlandia","Dinamarca","Países Bajos","Bélgica","Suiza",
  "Austria","Polonia","Grecia","Turquía","Rusia","Ucrania",

  "Estados Unidos","Canadá","México","Cuba","República Dominicana","Jamaica",
  "Brasil","Argentina","Chile","Colombia","Perú","Ecuador","Bolivia","Uruguay","Paraguay","Venezuela",

  "China","Japón","Corea del Sur","India","Tailandia","Vietnam","Indonesia",
  "Filipinas","Malasia","Singapur","Arabia Saudí","Emiratos Árabes Unidos",
  "Israel","Qatar","Irán",

  "Australia","Nueva Zelanda","Sudáfrica","Egipto","Marruecos","Nigeria","Kenia"
];

const buscador = document.getElementById("buscador");
const lista = document.getElementById("lista-resultados");

buscador.addEventListener("input", function () {
  const texto = buscador.value.toLowerCase();
  lista.innerHTML = "";

  if (texto === "") return;

  const filtrados = paises.filter(p =>
    p.toLowerCase().includes(texto)
  );

  filtrados.forEach(pais => {
    const div = document.createElement("div");
    div.classList.add("resultado");
    div.textContent = pais;

    div.addEventListener("click", () => {
      buscador.value = pais;
      lista.innerHTML = "";
    });

    lista.appendChild(div);
  });
});

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
