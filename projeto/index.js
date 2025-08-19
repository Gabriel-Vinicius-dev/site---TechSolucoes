// Primeiro pegamos todos os cards que já estavam escondidos no HTML
const cardsIniciaisEscondidos = document.querySelectorAll(".card.hidden");

document.getElementById("verMais").addEventListener("click", function () {
    if (this.textContent === "Ver mais") {
        // Mostra todos os que estavam escondidos
        cardsIniciaisEscondidos.forEach(card => card.classList.remove("hidden"));
        this.textContent = "Ver menos";
    } else {
        // Esconde novamente só os que estavam escondidos no início
        cardsIniciaisEscondidos.forEach(card => card.classList.add("hidden"));
        this.textContent = "Ver mais";
    }
});
