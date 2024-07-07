function sortear(){
    let quant = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let fim = parseInt(document.getElementById('ate').value);
    let numerosSorteados = [];
    let numero;

    if(quant >= (fim - inicio + 1)){
        alert(`À quantidade de números que deseja sortear é maior ou igual que o intervalo de números que será sorteado. Tente novamente.`);
        reiniciar();
    }
    else{
        for (let i = 0; i < quant; i++){
            numero = numeroALeatorio(inicio, fim);

            while (numerosSorteados.includes(numero)){
                numero = numeroALeatorio(inicio, fim);
            }

            numerosSorteados.push(numero);
        }
}
    let texto = document.getElementById('resultado');
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados} </label>`;

    alteraStatusBtn();
    
}

function numeroALeatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraStatusBtn(){
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  Nenhum até agora</label>';
    alteraStatusBtn();
}

