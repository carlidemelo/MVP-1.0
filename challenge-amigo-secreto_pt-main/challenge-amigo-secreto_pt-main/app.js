//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista onde os nomes serão armazenados
let listaDeAmigos = [];

// Adiciona nome à lista
// teste
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        input.value = "";
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Atualiza a lista na tela
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaDeAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

// Sorteia apenas um nome da lista
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione ao menos um nome antes de sortear.");
        return;
    }

    const sorteadoIndex = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[sorteadoIndex];

    exibirResultado(`O(a) sorteado(a) foi: ${nomeSorteado}`);
}

// Mostra o nome sorteado na tela
function exibirResultado(mensagem) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = mensagem;
    ulResultado.appendChild(li);
}