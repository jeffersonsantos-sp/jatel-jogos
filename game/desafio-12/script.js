// script.js
const cover = document.getElementById('cover');
const correctAnswer = "Noé"; // Defina a resposta correta
const imageUrl = "12.png"; // URL da imagem

cover.innerHTML = "";
const gridSize = 6; // 8x8 = 64 quadrados

// Definindo o tamanho de cada parte da imagem
const imageWidth = 300;  
const imageHeight = 300; 
const partWidth = imageWidth / gridSize;  
const partHeight = imageHeight / gridSize; 

// Preenche a área de cobertura com quadradinhos numerados
for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
        let piece = document.createElement('div');
        piece.innerText = row * gridSize + col + 1; // Número do quadrado
        piece.style.width = `${partWidth}px`;
        piece.style.height = `${partHeight}px`;
        piece.style.position = 'absolute';
        piece.style.left = `${col * partWidth}px`;
        piece.style.top = `${row * partHeight}px`;
        piece.style.background = 'black'; // Fundo preto inicial
        piece.style.color = 'white'; // Cor do número
        piece.style.display = 'flex';
        piece.style.alignItems = 'center';
        piece.style.justifyContent = 'center';
        piece.style.cursor = 'pointer';
        piece.style.border = '1px solid white';

        // Evento para revelar parte da imagem ao clicar
        piece.onclick = function () {
            this.style.backgroundImage = `url(${imageUrl})`;
            this.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
            this.style.backgroundPosition = `-${col * partWidth}px -${row * partHeight}px`;
            this.style.color = 'transparent'; // Remove o número ao clicar
        };

        cover.appendChild(piece);
    }
}

// Função para verificar a resposta
function checkGuess() {
    const userGuess = document.getElementById('guess-input').value.trim();
    const result = document.getElementById('result');

    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
        result.innerHTML = "<strong>Você acertou!</strong>";

        // Revela completamente a imagem ao acertar
        cover.style.backgroundImage = `url(${imageUrl})`;
        cover.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
        cover.style.backgroundPosition = 'center';
        cover.innerHTML = ''; // Remove os quadradinhos
    } else {
        result.innerHTML = "<strong>Resposta errada! Tente novamente.</strong>";
    }
}

