const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativas: ["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 2",
        alternativas: ["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 3",
        alternativas: ["alternativa 1", "alternativa 2"]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas
    }
}


mostraPergunta();