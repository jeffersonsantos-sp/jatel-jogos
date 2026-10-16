const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const alphabetDiv = document.getElementById('alphabet');
let selectedLetters = [];
let rodadas = [];
let totalGeral = 0;
let cronometroInterval;

function renderAlphabet() {
    alphabet.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');

        span.onclick = () => selectLetter(span, letter);
        alphabetDiv.appendChild(span);
    });
}

function selectLetter(element, letter) {
    element.classList.add('selected');
    selectedLetters.push(letter);
}

function calcularTotal() {
    const pontuacaoNome = parseInt(document.getElementById('pontuacaoNome').value) || 0;
    const pontuacaoFrutas = parseInt(document.getElementById('pontuacaoFrutas').value) || 0;
    const pontuacaoAnimal = parseInt(document.getElementById('pontuacaoAnimal').value) || 0;
    const pontuacaoObjetos = parseInt(document.getElementById('pontuacaoObjetos').value) || 0;
    const pontuacaoCidade = parseInt(document.getElementById('pontuacaoCidade').value) || 0;
    const pontuacaoFilmes = parseInt(document.getElementById('pontuacaoFilmes').value) || 0;
    const pontuacaoJw = parseInt(document.getElementById('pontuacaoJw').value) || 0;
    const pontuacaoBiblia = parseInt(document.getElementById('pontuacaoBiblia').value) || 0;
    const totalRodada = pontuacaoNome + pontuacaoFrutas + pontuacaoAnimal + pontuacaoObjetos + pontuacaoCidade + pontuacaoFilmes + pontuacaoJw + pontuacaoBiblia;

    document.getElementById('totalValorRodada').textContent = totalRodada;

    rodadas.push(totalRodada);

    totalGeral += totalRodada;
    document.getElementById('totalValorGeral').textContent = totalGeral;

    atualizarHistorico();
}

function atualizarHistorico() {
    const listaRodadas = document.getElementById('listaRodadas');
    listaRodadas.innerHTML = "";

    rodadas.forEach((rodada, index) => {
        const li = document.createElement('li');
        li.textContent = `Rodada ${index + 1}: ${rodada} pontos`;
        listaRodadas.appendChild(li);
    });
}

function iniciarCronometro() {
    const minutos = parseInt(document.getElementById('minutos').value);
    let tempoRestante = minutos * 60;
    const tempoRestanteSpan = document.getElementById('tempoRestante');

    if (cronometroInterval) {
        clearInterval(cronometroInterval);
    }

    tempoRestanteSpan.style.color = 'white';

    cronometroInterval = setInterval(() => {
        const minutosRestantes = Math.floor(tempoRestante / 60);
        const segundosRestantes = tempoRestante % 60;

        tempoRestanteSpan.textContent =
            `${minutosRestantes.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;

        if (tempoRestante <= 15) {
            tempoRestanteSpan.style.color = '#e74c3c';
        } else if (tempoRestante <= 30) {
            tempoRestanteSpan.style.color = '#f39c12';
        } else {
            tempoRestanteSpan.style.color = '#2ecc71';
        }

        if (tempoRestante <= 0) {
            clearInterval(cronometroInterval);
            tempoRestanteSpan.textContent = "00:00";
            tempoRestanteSpan.style.color = '#e74c3c';
            alert("STOP! PARE de DIGITAR");
        }

        tempoRestante--;
    }, 1000);
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('frutas').value = '';
    document.getElementById('animal').value = '';
    document.getElementById('objetos').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('filmes').value = '';
    document.getElementById('jw').value = '';
    document.getElementById('biblia').value = '';
    document.getElementById('pontuacaoNome').value = 0;
    document.getElementById('pontuacaoFrutas').value = 0;
    document.getElementById('pontuacaoAnimal').value = 0;
    document.getElementById('pontuacaoObjetos').value = 0;
    document.getElementById('pontuacaoCidade').value = 0;
    document.getElementById('pontuacaoFilmes').value = 0;
    document.getElementById('pontuacaoJw').value = 0;
    document.getElementById('pontuacaoBiblia').value = 0;
}

renderAlphabet();

function escolherLetraAleatoria() {
    const letrasNaoSelecionadas = alphabet.filter(letter => !selectedLetters.includes(letter));

    if (letrasNaoSelecionadas.length > 0) {
        const letraAleatoria = letrasNaoSelecionadas[Math.floor(Math.random() * letrasNaoSelecionadas.length)];

        const letraElement = Array.from(document.getElementsByClassName('letter')).find(el => el.textContent === letraAleatoria);
        if (letraElement) {
            selectLetter(letraElement, letraAleatoria);
        }
    } else {
        alert("Todas as letras já foram selecionadas!");
    }
}
