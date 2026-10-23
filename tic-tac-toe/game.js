// ============================================
// Jogo da Velha Bíblico - Game Logic
// ============================================

const LEVELS = {
  nivel1: {
    name: "Basico",
    icon: "🌱",
    book: "Histórias Bíblicas • Imite a Sua Fé • Jesus",
    questions: BIBLICAL_QUESTIONS_NIVEL1
  },
  nivel2: {
    name: "Científico",
    icon: "📘",
    book: "A Vida — Teve um Criador?",
    questions: BIBLICAL_QUESTIONS_NIVEL2
  },
  nivel3: {
    name: "Profetico",
    icon: "🔎",
    book: "Profecia de Isaías I • Viva Tendo em Mente o Dia de Jeová",
    questions: BIBLICAL_QUESTIONS_NIVEL3
  }
};

// Game State
let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;
let scores = { X: 0, O: 0, draw: 0 };
let currentCellIndex = null;
let currentLevel = null;
let questionDeck = [];
let questionDeckIndex = 0;

// DOM Elements
const cells = document.querySelectorAll('.ttt-cell');
const status = document.getElementById('status');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const scoreDraw = document.getElementById('scoreDraw');
const playerXName = document.getElementById('playerXName');
const playerOName = document.getElementById('playerOName');
const questionModal = document.getElementById('questionModal');
const questionCategory = document.getElementById('questionCategory');
const questionText = document.getElementById('questionText');
const questionReference = document.getElementById('questionReference');
const questionOptions = document.getElementById('questionOptions');
const questionFeedback = document.getElementById('questionFeedback');
const levelScreen = document.getElementById('levelScreen');
const gameScreen = document.getElementById('gameScreen');
const levelBadge = document.getElementById('levelBadge');

// Winning Combinations
const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Initialize
function init() {
  cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell));
  });

  document.querySelectorAll('.ttt-level-card').forEach(card => {
    card.addEventListener('click', () => selectLevel(card.dataset.level));
  });

  showLevelScreen();
  updateScoreboard();
}

// Level Selection
function selectLevel(levelId) {
  const level = LEVELS[levelId];
  if (!level) return;

  currentLevel = levelId;
  scores = { X: 0, O: 0, draw: 0 };
  resetBoard();
  questionDeck = shuffle([...level.questions]);
  questionDeckIndex = 0;

  levelBadge.textContent = `${level.icon} ${level.name}`;
  levelBadge.dataset.level = levelId;
  levelScreen.classList.add('is-hidden');
  gameScreen.classList.remove('is-hidden');

  updateStatus();
  updateScoreboard();
}

function showLevelScreen() {
  closeQuestionModal();
  currentCellIndex = null;
  levelScreen.classList.remove('is-hidden');
  gameScreen.classList.add('is-hidden');
  status.textContent = 'Escolha um nível para começar';
  status.style.background = 'var(--color-surface)';
}

// Handle Cell Click
function handleCellClick(cell) {
  const index = parseInt(cell.dataset.index);

  if (board[index] || !gameActive) return;

  currentCellIndex = index;
  showQuestion();
}

// Show Question Modal
function showQuestion() {
  const question = nextQuestion();
  if (!question) return;

  questionCategory.textContent = question.category;
  questionText.textContent = question.question;
  questionReference.textContent = question.reference ? `📖 ${question.reference}` : '';
  questionReference.classList.toggle('is-hidden', !question.reference);

  questionFeedback.hidden = true;
  questionFeedback.textContent = '';
  questionFeedback.className = 'question-feedback';

  questionOptions.innerHTML = '';
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
    btn.onclick = () => handleAnswer(index, question.correct);
    questionOptions.appendChild(btn);
  });

  questionModal.classList.add('active');
}

// Get Next Question (shuffled deck, no repeats until the deck is exhausted)
function nextQuestion() {
  if (!currentLevel) return null;

  const pool = LEVELS[currentLevel].questions;

  if (questionDeck.length === 0 || questionDeckIndex >= questionDeck.length) {
    questionDeck = shuffle([...pool]);
    questionDeckIndex = 0;
  }

  return questionDeck[questionDeckIndex++];
}

// Fisher-Yates Shuffle
function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Handle Answer
function handleAnswer(selectedIndex, correctIndex) {
  const buttons = questionOptions.querySelectorAll('button');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) {
      btn.classList.add('correct');
    }
    if (i === selectedIndex && selectedIndex !== correctIndex) {
      btn.classList.add('incorrect');
    }
  });

  if (selectedIndex === correctIndex) {
    questionFeedback.hidden = false;
    questionFeedback.textContent = '✓ Correto! Marque sua posição!';
    questionFeedback.className = 'question-feedback correct';

    setTimeout(() => {
      questionModal.classList.remove('active');
      placeMark(currentCellIndex);
    }, 1000);
  } else {
    questionFeedback.hidden = false;
    questionFeedback.textContent = '✗ Incorreto! Sua vez acabou.';
    questionFeedback.className = 'question-feedback incorrect';

    setTimeout(() => {
      questionModal.classList.remove('active');
      switchPlayer();
    }, 1500);
  }
}

// Place Mark
function placeMark(index) {
  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer === 'X' ? '✕' : '◯';
  cells[index].classList.add('taken', currentPlayer.toLowerCase());

  if (checkWinner()) {
    handleWin();
  } else if (board.every(cell => cell !== null)) {
    handleDraw();
  } else {
    switchPlayer();
  }
}

// Switch Player
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateStatus();
  updateScoreboard();
}

// Check Winner
function checkWinner() {
  return WINNING_COMBOS.some(combo => {
    return combo.every(index => board[index] === currentPlayer);
  });
}

// Get Winning Combo
function getWinningCombo() {
  return WINNING_COMBOS.find(combo => {
    return combo.every(index => board[index] === currentPlayer);
  });
}

// Handle Win
function handleWin() {
  gameActive = false;
  scores[currentPlayer]++;
  updateScoreboard();

  const winningCombo = getWinningCombo();
  winningCombo.forEach(index => {
    cells[index].classList.add('winner', `win-${currentPlayer.toLowerCase()}`);
  });

  const winnerName = currentPlayer === 'X' ? playerXName.textContent : playerOName.textContent;
  status.textContent = `🎉 ${winnerName} venceu!`;
  status.style.background = currentPlayer === 'X' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(245, 158, 11, 0.2)';
}

// Handle Draw
function handleDraw() {
  gameActive = false;
  scores.draw++;
  updateScoreboard();

  status.textContent = '🤝 Empate!';
  status.style.background = 'var(--color-surface)';
}

// Update Status
function updateStatus() {
  const playerName = currentPlayer === 'X' ? playerXName.textContent : playerOName.textContent;
  const symbol = currentPlayer === 'X' ? '✕' : '◯';

  status.textContent = `Vez do ${playerName} (${symbol})`;
  status.style.background = 'var(--color-surface)';
}

// Update Scoreboard
function updateScoreboard() {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
  scoreDraw.textContent = scores.draw;

  // Highlight active player
  document.querySelector('.score-x').classList.toggle('active', currentPlayer === 'X');
  document.querySelector('.score-o').classList.toggle('active', currentPlayer === 'O');
}

// Reset Board
function resetBoard() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameActive = true;
  currentCellIndex = null;

  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'ttt-cell';
  });

  closeQuestionModal();
}

// Close Question Modal
function closeQuestionModal() {
  questionModal.classList.remove('active');
  questionFeedback.hidden = true;
  questionFeedback.textContent = '';
  questionFeedback.className = 'question-feedback';
  questionOptions.innerHTML = '';
  questionReference.textContent = '';
}

// Restart Game (same level, new shuffled deck, scores kept)
function restartGame() {
  if (!currentLevel) {
    showLevelScreen();
    return;
  }

  resetBoard();
  questionDeck = shuffle([...LEVELS[currentLevel].questions]);
  questionDeckIndex = 0;

  updateStatus();
  updateScoreboard();
}

// Initialize on load
init();
