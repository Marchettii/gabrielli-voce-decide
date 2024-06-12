const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
  {
    enunciado "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas a dúvidas que uma pessoa pode ter, ele também gera imagens e aúdios hiper-realistas. Qual o seu primeiro pensamento";
    alternativas: [
      "isso é assustador!"
      "isso é maravilhoso!"
    ]
  }

  {
    enunciado "Com a descoberta desta tecnologia, chamada inteligência Artificial (IA), uma professora de tenologia decidiu fazer ma sequência de aulas sobre essa ferramenta. No fim de uma aula ela pede que você escreva um trabalho sobre o uso da IA em sala de aula. Qual atitude você toma?";
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o entendimento." ,
      "Escreva o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
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