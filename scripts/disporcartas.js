let gifs = [
    '<img src="pictures/bobrossparrot.gif" alt="bobrossparrot">',
    '<img src="pictures/explodyparrot.gif" alt="explodyparrot">',
    '<img src="pictures/fiestaparrot.gif" alt="fiestaparrot">',
    '<img src="pictures/metalparrot.gif" alt="metalparrot">',
    '<img src="pictures/revertitparrot.gif" alt="revertitparrot">',
    '<img src="pictures/tripletsparrot.gif" alt="tripletsparrot">',
    '<img src="pictures/unicornparrot.gif" alt="unicornparrot">',
];

let cards = [];
let clicado = [];
let qtd = 0;
let pares = 1;
let count = 0;



function aoEntrarNaPagina() {
    const cartas = document.querySelector(".cartas");
    let cond = false;

    do {
        qtd = parseInt(prompt("Quantas cartas?"));
        cond = (4 <= qtd && qtd <= 14 && qtd % 2 == 0);
    } while (!cond);

    pares = qtd / 2;

    for (let i = 0; i < pares; i++) {
        criarCarta(i);
    }
    cards = embaralhar(cards);

    for (let i = 0; i < qtd; i++) {
        cartas.innerHTML = cartas.innerHTML + cards[i];
    }
}

function criarCarta(id) {
    // sortear indice
    let carta = '<div class="carta" id="' + id + '"onclick="flip(this)"><div class="face-frente face"><img src="pictures/front.png" alt=""></div><div class="face-tras face">' + gifs[id] + '</div></div>';
    cards.push(carta);
    cards.push(carta);
}

function flip(card) {
    if (count == 0) {
        start();
    }

    card.classList.add("virado");
    clicado.push(card);
    count++;
    if (clicado.length == 2) {
        if (clicado[0].id != clicado[1].id) {
            setTimeout(unflip, 1000);
        } else {
            clicado.pop();
            clicado.pop();
            pares--;
        }
    }

    fimJogo();
}

function unflip() {
    clicado[0].classList.remove("virado");
    clicado[1].classList.remove("virado");
    clicado.pop();
    clicado.pop();
}

function embaralhar(array) {
    let copia = [];
    let n = array.length;
    let i;

    while (n) {
        i = Math.floor(Math.random() * n--);

        copia.push(array.splice(i, 1)[0]);
    }

    return copia;
}

function fimJogo() {
    if (pares == 0) {
        dur = stop();
        setTimeout(function() {
            alert("Você venceu em " + count / 2 + " jogadas! Tempo jogado: " + dur);
            let novo = prompt("Deseja jogar novamente?");
            if (novo.toLowerCase() === "sim") location.reload();
        }, 500);
    }
}

aoEntrarNaPagina();