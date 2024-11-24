const questoes = [
    {
        questao: "Quem é o protagonista do anime One Piece?",
        opcoes: ["Goku", "Naruto", "Luffy"],
        correto: 2,
    },
    {
        questao: "Qual a cor do cabelo do Sanji de One Piece?",
        opcoes: ["Preto", "Amarelo", "Branco"],
        correto: 1, 
    },
    {
        questao: "Qual arma o Usopp usa?",
        opcoes: ["estilingue", "espada", "revolver"],
        correto: 0, 
    },
    {
        questao: "Quem é o primo do Luffy?",
        opcoes: ["Barba Negra", "Koby", "Não têm"],
        correto: 2, 
    },
];

let questaoatualagora = 0;
let placar = 0;

const verquestao = document.getElementById("questao");
const opcoesContainer = document.getElementById("opcoes-container");
const resultDiv = document.getElementById("resultado");

function carregarquestao() {
    const questaoatual = questoes[questaoatualagora];

    verquestao.textContent = questaoatual.questao;

    opcoesContainer.innerHTML = "";

    questaoatual.opcoes.forEach((opcao, index) => {
        const opcaoDiv = document.createElement("div");
        opcaoDiv.classList.add("form-check");

        const opcaoDado = document.createElement("input");
        opcaoDado.type = "radio";
        opcaoDado.name = "answer";
        opcaoDado.id = `option${index}`;
        opcaoDado.value = index;
        opcaoDado.classList.add("form-check-input");

        const opcaoLabel = document.createElement("label");
        opcaoLabel.setAttribute("for", `option${index}`);
        opcaoLabel.textContent = opcao;
        opcaoLabel.classList.add("form-check-label");

        opcaoDiv.appendChild(opcaoDado);
        opcaoDiv.appendChild(opcaoLabel);
        opcoesContainer.appendChild(opcaoDiv);
    });
}

function proxPergunta() {
    const opcaoselecionada = document.querySelector('input[name="answer"]:checked');

    if (!opcaoselecionada) {
        alert("Por favor, selecione uma resposta");
        return;
    }

    const valorSelecionado = parseInt(opcaoselecionada.value);
    const questaocerta = questoes[questaoatualagora].correto;

    if (valorSelecionado === questaocerta) {
        placar++;
    }

    questaoatualagora++;

    if (questaoatualagora < questoes.length) {
        carregarquestao();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    verquestao.textContent = 'Quiz Finalizado';
    opcoesContainer.innerHTML = "";
    resultDiv.innerHTML = `<div class="alert alert-success">Você acertou ${placar} de ${questoes.length} perguntas!</div>`;

    // Remove o botão "Próximo"
    const botaoProximo = document.querySelector("button.btn.btn-primary.mt-3");
    if (botaoProximo) {
        botaoProximo.remove();
    }

    // Adiciona o botão "Fazer novamente"
    const botaoFazerNovamente = document.createElement("button");
    botaoFazerNovamente.textContent = "Fazer novamente";
    botaoFazerNovamente.classList.add("btn", "btn-success", "mt-3");
    botaoFazerNovamente.onclick = resetarQuiz;
    resultDiv.appendChild(botaoFazerNovamente);
}

function resetarQuiz() {
    questaoatualagora = 0;
    placar = 0;
    carregarquestao();
    resultDiv.innerHTML = "";  // Limpa a área de resultado

    // Remove o botão "Fazer novamente" antes de recarregar o quiz
    const botaoFazerNovamente = document.querySelector("button.btn.btn-success");
    if (botaoFazerNovamente) {
        botaoFazerNovamente.remove();
    }

    // Recarrega a primeira questão e o botão "Próximo"
    carregarquestao();
    const botaoProximo = document.createElement("button");
    botaoProximo.textContent = "Próximo";
    botaoProximo.classList.add("btn", "btn-primary", "mt-3");
    botaoProximo.onclick = proxPergunta;
    resultDiv.appendChild(botaoProximo);
}

// Carregar a primeira questão ao iniciar o quiz
carregarquestao();
