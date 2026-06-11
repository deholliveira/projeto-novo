const especiais = document.querySelectorAll(".especial");

especiais.forEach(card => {

    card.addEventListener("click", () => {
        card.classList.toggle("aberta");
    });

});