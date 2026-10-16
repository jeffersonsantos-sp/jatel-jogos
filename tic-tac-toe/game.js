// ============================================
// Jogo da Velha Bíblico - Game Logic
// ============================================

// Game State
let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;
let scores = { X: 0, O: 0, draw: 0 };
let currentCellIndex = null;
let usedQuestions = [];

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
const questionOptions = document.getElementById('questionOptions');
const questionFeedback = document.getElementById('questionFeedback');

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
  updateStatus();
  updateScoreboard();
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
  const question = getRandomQuestion();

  questionCategory.textContent = question.category;
  questionText.textContent = question.question;
  questionFeedback.classList.add('hidden');
  questionFeedback.textContent = '';

  questionOptions.innerHTML = '';
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
    btn.onclick = () => handleAnswer(index, question.correct);
    questionOptions.appendChild(btn);
  });

  questionModal.classList.add('active');
}

// Get Random Question (avoiding repeats)
function getRandomQuestion() {
  if (usedQuestions.length >= BIBLICAL_QUESTIONS.length) {
    usedQuestions = [];
  }

  let availableQuestions = BIBLICAL_QUESTIONS.filter((_, index) => !usedQuestions.includes(index));
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const questionIndex = BIBLICAL_QUESTIONS.indexOf(availableQuestions[randomIndex]);

  usedQuestions.push(questionIndex);
  return BIBLICAL_QUESTIONS[questionIndex];
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
    // Correct answer - place mark
    questionFeedback.textContent = '✓ Correto! Marque sua posição!';
    questionFeedback.className = 'question-feedback correct';

    setTimeout(() => {
      questionModal.classList.remove('active');
      placeMark(currentCellIndex);
    }, 1000);
  } else {
    // Wrong answer - lose turn
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

// Restart Game
function restartGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameActive = true;
  usedQuestions = [];

  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'ttt-cell';
  });

  updateStatus();
  updateScoreboard();
}

// Initialize on load
init();
