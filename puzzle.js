const puzzle = document.getElementById("puzzle");

const tamanho = 4;
const totalPecas = tamanho * tamanho;

let pecas = [];

for(let i = 0; i < totalPecas; i++){
    pecas.push(i);
}


pecas.sort(() => Math.random() - 0.5);

let primeiraPeca = null;

for(let i = 0; i < totalPecas; i++){

    const indice = pecas[i];

    const peca = document.createElement("div");

    peca.classList.add("peca");

    peca.dataset.correta = indice;

    const linha = Math.floor(indice / tamanho);
    const coluna = indice % tamanho;

    peca.style.backgroundImage =
        "url('img/81F5EE3F-D5C9-48F7-8895-77938E2FDFAF (1).jpg')";

    peca.style.backgroundSize = "400px 400px";

    peca.style.backgroundPosition =
        `-${coluna * 100}px -${linha * 100}px`;

    peca.addEventListener("click", () => {

        if(!primeiraPeca){

            primeiraPeca = peca;
            peca.classList.add("selecionada");

        }else{

            trocarPecas(primeiraPeca, peca);

            primeiraPeca.classList.remove("selecionada");
            primeiraPeca = null;
        }
    });

    puzzle.appendChild(peca);
}

function trocarPecas(peca1, peca2){

    const fundo1 = peca1.style.backgroundPosition;
    const fundo2 = peca2.style.backgroundPosition;

    peca1.style.backgroundPosition = fundo2;
    peca2.style.backgroundPosition = fundo1;

    const correta1 = peca1.dataset.correta;
    const correta2 = peca2.dataset.correta;

    peca1.dataset.correta = correta2;
    peca2.dataset.correta = correta1;

    verificarVitoria();
}

function verificarVitoria(){

    const todasPecas = document.querySelectorAll(".peca");

    let venceu = true;

    todasPecas.forEach((peca, indice) => {

        if(Number(peca.dataset.correta) !== indice){
            venceu = false;
        }

    });

    if(venceu){

        document.getElementById("mensagem-final").style.display = "block";

        // impede que apareça várias vezes
        setTimeout(() => {
        }, 100);
    }
}