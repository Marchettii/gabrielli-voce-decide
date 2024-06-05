const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
  {
    enunciado "Qual a cor dos olhos";
    alternativas: [
      "resposta 1"
      "resposta 2"
    ]
  }

  {
    enunciado "Quem é o melhor vilão?";
    alternativas: [
      "Jason"
      "Fred"
    ]
  }

{
  enunciado "pergunta 3";
  alternativas: [
    "resposta 1"
    "resposta 2"
  ]
}

{
  enunciado "pergunta 4";
  alternativas: [
    "resposta 1"
    "resposta 2"
  ]
}
  
];

let atual = 1;
let perguntaAtual;

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.txtContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();