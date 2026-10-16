// Jogo da Memória - Game Logic

const TOTAL_PAIRS = 12;

const cards = document.querySelectorAll('.card');
const movimentosEl = document.getElementById('movimentos');
const movimentosMobileEl = document.getElementById('movimentos-mobile');
const vitoriaEl = document.getElementById('vitoria');
const movimentosVitoriaEl = document.getElementById('movimentosvitoria');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard = null;
let secondCard = null;
let movements = 0;
let matchedPairs = 0;

function updateScore() {
  movimentosEl.textContent = movements;
  movimentosMobileEl.textContent = movements;
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if (this.classList.contains('flipped')) return;

  this.classList.add('flipped');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.nome === secondCard.dataset.nome;

  if (isMatch) {
    matchedPairs++;
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    disableCards();
    checkWin();
  } else {
    movements++;
    updateScore();
    firstCard.classList.add('mismatched');
    secondCard.classList.add('mismatched');
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flipped', 'mismatched');
    secondCard.classList.remove('flipped', 'mismatched');
    resetBoard();
  }, 1200);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function checkWin() {
  if (matchedPairs === TOTAL_PAIRS) {
    setTimeout(() => {
      movimentosVitoriaEl.textContent = movements;
      vitoriaEl.classList.add('active');
    }, 800);
  }
}

function shuffleCards() {
  cards.forEach(card => {
    const randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
}

// Initialize
shuffleCards();
cards.forEach(card => card.addEventListener('click', flipCard));
