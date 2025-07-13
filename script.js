// Lógica para el botón "leer más"

const leerMas = document.getElementById("leerMas");

leerMas.addEventListener("click", function(e) {
    e.preventDefault();
    const extra = document.getElementById("extra");
    if (extra.classList.contains("d-none")) {
        extra.classList.remove("d-none");
        this.textContent = "Leer menos...";
    } else {
        extra.classList.add("d-none");
        this.textContent = "Leer más...";
    }
});