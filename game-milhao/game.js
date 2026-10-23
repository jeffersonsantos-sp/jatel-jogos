// ============================================
// JOGO DO MILHÃO BÍBLICO - Lógica do Jogo
// 30 perguntas, 3 níveis
// ============================================

// Estado do jogo
let gameState = {
  currentQuestion: 0,
  currentPrize: 0,
  lastSafePrize: 0,
  helps: {
    audience: true,
    eliminate: true,
    change: true
  },
  isPlaying: false,
  selectedAnswer: null,
  waitingAnswer: false,
  currentQuestions: [],
  answeredQuestions: []
};

// Elementos DOM
const elements = {
  screenStart: document.getElementById('screen-start'),
  screenGame: document.getElementById('screen-game'),
  screenWin: document.getElementById('screen-win'),
  screenLose: document.getElementById('screen-lose'),
  currentQuestion: document.getElementById('currentQuestion'),
  currentPrize: document.getElementById('currentPrize'),
  progressFill: document.getElementById('progressFill'),
  questionCategory: document.getElementById('questionCategory'),
  questionText: document.getElementById('questionText'),
  answersArea: document.getElementById('answersArea'),
  prizeColumn: document.getElementById('prizeColumn'),
  helpModal: document.getElementById('helpModal'),
  confirmModal: document.getElementById('confirmModal'),
  modalTitle: document.getElementById('modalTitle'),
  modalBody: document.getElementById('modalBody'),
  confirmPrize: document.getElementById('confirmPrize'),
  finalPrize: document.getElementById('finalPrize'),
  resultMessage: document.getElementById('resultMessage'),
  lostPrize: document.getElementById('lostPrize'),
  btnStop: document.getElementById('btnStop')
};

// ============================================
// SELECIONAR PERGUNTAS
// ============================================

function selectGameQuestions() {
  return [1, 2, 3].flatMap(book =>
    shuffleArray([...MILHAO_LEVELS[book]]).slice(0, QUESTIONS_PER_LEVEL)
  );
}

// ============================================
// INICIALIZAÇÃO
// ============================================

function startGame() {
  const questions = selectGameQuestions();

  gameState = {
    currentQuestion: 0,
    currentPrize: 0,
    lastSafePrize: 0,
    helps: {
      audience: true,
      eliminate: true,
      change: true
    },
    isPlaying: true,
    selectedAnswer: null,
    waitingAnswer: false,
    currentQuestions: questions,
    answeredQuestions: []
  };

  showScreen('screen-game');
  buildPrizeTable();
  updateUI();
  loadQuestion();
}

function restartGame() {
  startGame();
}

// ============================================
// NAVEGAÇÃO ENTRE TELAS
// ============================================

function showScreen(screenId) {
  document.querySelectorAll('.milhao-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// ============================================
// TABELA DE PREMIAÇÃO
// ============================================

function buildPrizeTable() {
  elements.prizeColumn.innerHTML = '';

  for (let i = PRIZE_VALUES.length - 1; i >= 0; i--) {
    const item = document.createElement('div');
    item.className = 'prize-item';
    item.id = `prize-item-${i}`;

    if (SAFE_LEVELS.includes(i)) {
      item.classList.add('safe');
    }

    const questionNum = document.createElement('span');
    questionNum.className = 'prize-q';
    questionNum.textContent = `P${i + 1}`;

    const prizeValue = document.createElement('span');
    prizeValue.className = 'prize-v';
    prizeValue.textContent = formatCurrency(PRIZE_VALUES[i]);

    item.appendChild(questionNum);
    item.appendChild(prizeValue);
    elements.prizeColumn.appendChild(item);
  }
}

function updatePrizeTable() {
  for (let i = 0; i < PRIZE_VALUES.length; i++) {
    const item = document.getElementById(`prize-item-${i}`);
    if (!item) continue;

    item.classList.remove('current', 'won');

    if (i === gameState.currentQuestion) {
      item.classList.add('current');
      // Rolar para a pergunta atual
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (i < gameState.currentQuestion) {
      item.classList.add('won');
    }
  }
}

// ============================================
// ATUALIZAÇÃO DA UI
// ============================================

function updateUI() {
  // Número da pergunta
  elements.currentQuestion.textContent = gameState.currentQuestion + 1;

  // Prêmio atual
  elements.currentPrize.textContent = formatCurrency(gameState.currentPrize);

  // Barra de progresso
  const progress = ((gameState.currentQuestion) / QUESTIONS_PER_GAME) * 100;
  elements.progressFill.style.width = `${progress}%`;

  // Atualizar marcadores
  document.querySelectorAll('.marker').forEach(marker => {
    marker.classList.remove('current');
    if (parseInt(marker.dataset.question) === gameState.currentQuestion + 1) {
      marker.classList.add('current');
    }
  });

  // Tabela de premiação
  updatePrizeTable();

  // Botão de parar (esconder na última pergunta)
  if (gameState.currentQuestion >= QUESTIONS_PER_GAME - 1) {
    elements.btnStop.style.display = 'none';
  } else {
    elements.btnStop.style.display = 'block';
  }

  // Atualizar ajudinhas
  updateHelpButtons();
}

function updateHelpButtons() {
  const help1 = document.getElementById('help1');
  const help2 = document.getElementById('help2');
  const help3 = document.getElementById('help3');

  const help1Count = document.getElementById('help1Count');
  const help2Count = document.getElementById('help2Count');
  const help3Count = document.getElementById('help3Count');

  if (gameState.helps.audience) {
    help1.classList.remove('used');
    help1Count.textContent = '1';
  } else {
    help1.classList.add('used');
    help1Count.textContent = '0';
  }

  if (gameState.helps.eliminate) {
    help2.classList.remove('used');
    help2Count.textContent = '1';
  } else {
    help2.classList.add('used');
    help2Count.textContent = '0';
  }

  if (gameState.helps.change) {
    help3.classList.remove('used');
    help3Count.textContent = '1';
  } else {
    help3.classList.add('used');
    help3Count.textContent = '0';
  }
}

// ============================================
// CARREGAR PERGUNTA
// ============================================

function loadQuestion() {
  const q = gameState.currentQuestions[gameState.currentQuestion];

  // Categoria baseada no livro
  const category = getCategoryForBook(q.book);
  elements.questionCategory.textContent = `${category} - ${q.difficulty}`;

  // Texto da pergunta
  elements.questionText.textContent = q.question;

  // Resetar respostas
  gameState.selectedAnswer = null;
  gameState.waitingAnswer = true;

  // Carregar opções
  const buttons = elements.answersArea.querySelectorAll('.answer-btn');
  buttons.forEach((btn, index) => {
    btn.classList.remove('selected', 'correct', 'wrong', 'disabled');
    btn.style.display = 'flex';
    btn.style.opacity = '1';

    const letter = btn.querySelector('.answer-letter');
    const text = btn.querySelector('.answer-text');

    letter.textContent = String.fromCharCode(65 + index);
    text.textContent = q.options[index];
  });
}

function getCategoryForBook(book) {
  const categories = {
    1: 'Aprenda com as Histórias da Bíblia',
    2: 'Ande Corajosamente com Deus',
    3: 'De Testemunho Cabal'
  };
  return categories[book] || 'BÍBLIA';
}

// ============================================
// SELECIONAR RESPOSTA
// ============================================

function selectAnswer(index) {
  if (!gameState.waitingAnswer || !gameState.isPlaying) return;

  // Verificar se a resposta está desabilitada
  const buttons = elements.answersArea.querySelectorAll('.answer-btn');
  if (buttons[index].classList.contains('disabled')) return;

  gameState.selectedAnswer = index;
  gameState.waitingAnswer = false;

  // Efeito de seleção
  buttons.forEach(btn => btn.classList.remove('selected'));
  buttons[index].classList.add('selected');

  // Verificar resposta após 1.5 segundos
  setTimeout(() => {
    checkAnswer(index);
  }, 1500);
}

function checkAnswer(index) {
  const q = gameState.currentQuestions[gameState.currentQuestion];
  const buttons = elements.answersArea.querySelectorAll('.answer-btn');

  // Desabilitar todos os botões
  buttons.forEach(btn => btn.classList.add('disabled'));

  if (index === q.correct) {
    // ACERTOU!
    buttons[index].classList.remove('selected');
    buttons[index].classList.add('correct');

    // Atualizar prêmio
    gameState.currentPrize = PRIZE_VALUES[gameState.currentQuestion];

    // Verificar se é patamar de segurança
    if (SAFE_LEVELS.includes(gameState.currentQuestion)) {
      gameState.lastSafePrize = gameState.currentPrize;
    }

    // Registrar pergunta respondida
    gameState.answeredQuestions.push({
      question: q.question,
      correct: true,
      index: index
    });

    updateUI();

    // Avançar para próxima pergunta após 2 segundos
    setTimeout(() => {
      if (gameState.currentQuestion < QUESTIONS_PER_GAME - 1) {
        gameState.currentQuestion++;
        updateUI();
        loadQuestion();
      } else {
        // GANHOU O MILHÃO!
        winGame();
      }
    }, 2000);

  } else {
    // ERROU!
    buttons[index].classList.remove('selected');
    buttons[index].classList.add('wrong');

    // Mostrar resposta correta
    buttons[q.correct].classList.remove('selected');
    buttons[q.correct].classList.add('correct');

    // Registrar pergunta respondida
    gameState.answeredQuestions.push({
      question: q.question,
      correct: false,
      index: index,
      correctIndex: q.correct
    });

    // Perder o jogo após 2.5 segundos
    setTimeout(() => {
      loseGame();
    }, 2500);
  }
}

// ============================================
// PARAR O JOGO
// ============================================

function stopGame() {
  if (gameState.currentQuestion === 0) return;

  // Mostrar modal de confirmação
  elements.confirmPrize.textContent = formatCurrency(gameState.currentPrize);
  elements.confirmModal.classList.add('active');
}

function confirmStop(confirmed) {
  elements.confirmModal.classList.remove('active');

  if (confirmed) {
    winGame();
  }
}

// ============================================
// VITÓRIA E DERROTA
// ============================================

function winGame() {
  gameState.isPlaying = false;

  elements.finalPrize.textContent = formatCurrency(gameState.currentPrize);

  if (gameState.currentPrize >= 200000) {
    elements.resultMessage.textContent = '🏆 Parabéns! Você é um verdadeiro conhecedor da Palavra de Deus!';
    createConfetti();
  } else if (gameState.currentPrize >= 50000) {
    elements.resultMessage.textContent = 'Excelente! Você chegou muito longe e mostrou grande conhecimento bíblico!';
  } else if (gameState.currentPrize >= 10000) {
    elements.resultMessage.textContent = 'Muito bem! Você ganhou um bom prêmio! Estude mais os livros para chegar ao topo!';
  } else {
    elements.resultMessage.textContent = 'Você ganhou um prêmio! Continue estudando os livros da jw.org para melhorar!';
  }

  showScreen('screen-win');
}

function loseGame() {
  gameState.isPlaying = false;

  // Determinar quanto ganhou (último patamar seguro)
  let prizeWon = gameState.lastSafePrize;

  if (prizeWon === 0 && gameState.currentQuestion > 0) {
    // Se errou antes do primeiro patamar, ganha R$ 0
    prizeWon = 0;
  }

  gameState.currentPrize = prizeWon;
  elements.lostPrize.textContent = formatCurrency(prizeWon);

  showScreen('screen-lose');
}

// ============================================
// AJUDINHAS
// ============================================

function useHelp(type) {
  if (!gameState.isPlaying || !gameState.waitingAnswer) return;
  if (!gameState.helps[type]) return;

  // Marcar como usada
  gameState.helps[type] = false;
  updateHelpButtons();

  switch (type) {
    case 'audience':
      showAudienceHelp();
      break;
    case 'eliminate':
      showEliminateHelp();
      break;
    case 'change':
      showChangeHelp();
      break;
  }
}

function showAudienceHelp() {
  const q = gameState.currentQuestions[gameState.currentQuestion];

  elements.modalTitle.textContent = '👥 PERGUNTAR AO PÚBLICO';

  let chartHTML = `
    <p style="color: #ccc; margin-bottom: 20px;">O público votou da seguinte forma:</p>
    <div class="audience-chart">
  `;

  for (let i = 0; i < 4; i++) {
    chartHTML += `
      <div class="audience-bar">
        <div class="bar-percent">${q.audience[i]}%</div>
        <div class="bar-fill" style="height: ${q.audience[i]}%"></div>
        <div class="bar-letter">${String.fromCharCode(65 + i)}</div>
      </div>
    `;
  }

  chartHTML += `</div>`;

  elements.modalBody.innerHTML = chartHTML;
  elements.helpModal.classList.add('active');
}

function showEliminateHelp() {
  const q = gameState.currentQuestions[gameState.currentQuestion];

  elements.modalTitle.textContent = '❌ ELIMINAR 2 ALTERNATIVAS';

  // Encontrar as 2 alternativas erradas com menos porcentagem
  let wrongIndices = [];
  for (let i = 0; i < 4; i++) {
    if (i !== q.correct) {
      wrongIndices.push(i);
    }
  }

  // Embaralhar e pegar 2
  wrongIndices = shuffleArray(wrongIndices).slice(0, 2);

  let eliminateHTML = `
    <p style="color: #ccc; margin-bottom: 15px;">Duas alternativas erradas foram eliminadas:</p>
    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
  `;

  wrongIndices.forEach(idx => {
    eliminateHTML += `
      <div style="
        background: rgba(220, 53, 69, 0.2);
        border: 2px solid #dc3545;
        border-radius: 10px;
        padding: 15px 25px;
        text-decoration: line-through;
        color: #dc3545;
        font-size: 18px;
        font-weight: bold;
      ">
        ${String.fromCharCode(65 + idx)} - ${q.options[idx]}
      </div>
    `;
  });

  eliminateHTML += `</div>`;

  elements.modalBody.innerHTML = eliminateHTML;
  elements.helpModal.classList.add('active');

  // Desabilitar as alternativas eliminadas
  const buttons = elements.answersArea.querySelectorAll('.answer-btn');
  wrongIndices.forEach(idx => {
    buttons[idx].classList.add('disabled');
    buttons[idx].style.opacity = '0.3';
  });
}

function showChangeHelp() {
  const current = gameState.currentQuestions[gameState.currentQuestion];
  const availableQuestions = MILHAO_LEVELS[current.book].filter(q =>
    !gameState.answeredQuestions.some(aq => aq.question === q.question) &&
    !gameState.currentQuestions.some(cq => cq.question === q.question)
  );

  elements.modalTitle.textContent = '🔄 TROCAR PERGUNTA';

  if (availableQuestions.length === 0) {
    elements.modalBody.innerHTML = `
      <p style="color: #ccc; margin-bottom: 15px;">Não há outra pergunta disponível neste nível.</p>
    `;
    elements.helpModal.classList.add('active');
    return;
  }

  const newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  gameState.currentQuestions[gameState.currentQuestion] = newQuestion;

  elements.modalBody.innerHTML = `
    <p style="color: #ccc; margin-bottom: 15px;">A pergunta foi trocada!</p>
    <p style="color: #d4a843; font-weight: bold;">Nova pergunta disponível!</p>
  `;
  elements.helpModal.classList.add('active');

  loadQuestion();
}

function closeHelpModal() {
  elements.helpModal.classList.remove('active');
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createConfetti() {
  const emojis = ['🎉', '🎊', '✨', '🏆', '⭐', '🌟', '💫', '🎊'];

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      document.body.appendChild(confetti);

      // Remover após animação
      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }, i * 100);
  }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

// Preparar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-start');
});
