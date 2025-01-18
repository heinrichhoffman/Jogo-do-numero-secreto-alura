let tentativa = 1;
let numeroLimite = 10;
let listaDeNumeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.0});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosEscolhidos = listaDeNumeroSorteado.length;

    if (quantidadeNumerosEscolhidos == numeroLimite) {
        listaDeNumeroSorteado = [];
    }


    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio;
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');    
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute ==numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');        
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa} `
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
        
        
        //exibirTextoNaTela('p', 'Você descobriu o número secreto');
    } 
    else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Tente novamente');        
        exibirTextoNaTela('p', 'O número secreto é menor');
    } 
    else if (chute < numeroSecreto){
        exibirTextoNaTela('h1', 'Tente novamente');        
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativa++;
    limparCampo();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}












