const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
// Perguntas referentes ao Cerrado
    {
        enunciado: "Como o aquecimento global afeta a vida marinha?",
        alternativas: [
            {
                texto:"Diminuição das temperaturas oceânicas e aumento da saúde dos corais",
                afirmacao: ""
            },
            {
                texto:"Aumento da acidificação dos oceanos, prejudicando corais e moluscos",
                afirmacao: ""
            },
            {
                texto:"Estabilização das condições oceanográficas, beneficiando todas as espécies",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é um impacto significativo do aquecimento global nas regiões costeiras? ",
        alternativas: [
            {
                texto:"Recuo das linhas de costa devido à erosão natural",
                afirmacao: ""
            },
            {
                texto:"Aumento do nível do mar, levando a mais inundações e perda de habitat costeiro",
                afirmacao: ""
            },
            {
                texto:"Estabilização dos níveis de água, reduzindo a erosão costeira",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "De que maneira o aquecimento global pode influenciar os padrões de precipitação?",
        alternativas: [
            {
                texto:"Redução da ocorrência de chuvas em todas as regiões",
                afirmacao: "" 
            },
            {
                texto:"Aumento da variabilidade nos padrões de precipitação, com mais chuvas intensas e secas prolongadas",
                afirmacao: ""
            },
            {
                texto:"Redução das secas e aumento da regularidade das chuvas",
                afirmacao: ""
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent =  alternativas.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

