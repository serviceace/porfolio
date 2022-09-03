console.log("todo conectado");

/* Boton que copia el email al portapapeles */
const btn__copiar = document.getElementById("btn__copiar");
const miCorreo = document.getElementById("miCorreo");

btn__copiar.onclick = copiarAlclipboard;
let correoElectronico = miCorreo.innerHTML;

function copiarAlclipboard(e) {
  navigator.clipboard.writeText(correoElectronico)
  .then(() => {
  console.log("Texto copiado al clipboard...")
})
  .catch(err => {
  console.log("algo fallo", err);
})
};