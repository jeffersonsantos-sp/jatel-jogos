// ============================================
// CARA A CARA BÍBLICO - Lógica do Jogo
// ============================================

// === ESTADO DO JOGO ===
let gameState = {
  mode: 'pvp',
  phase: 'menu',
  currentPlayer: 1,
  player1: {
    name: 'Jogador 1',
    secretCharacter: null,
    myCharacters: [],
    questionsAsked: 0,
    guessAttempts: 3
  },
  player2: {
    name: 'Jogador 2',
    secretCharacter: null,
    myCharacters: [],
    questionsAsked: 0,
    guessAttempts: 3
  },
  eliminatedCount: 0,
  turn: 1,
  selectedTemp: null,
  currentQuestion: null,
  questionHistory: [],
  usedQuestions: [],
  maxGuessAttempts: 3
};

// === ESTADO ONLINE ===
let onlineState = {
  salaId: null,
  salaCodigo: null,
  jogadorNumero: 0,
  meuNome: '',
  pollingInterval: null,
  ultimaMsgId: 0,
  minhaVez: false, // É minha vez de perguntar?
  aguardandoResposta: false, // Enviei pergunta e aguardo resposta
  perguntaPendente: null
};

// === INICIALIZAÇÃO ===
document.addEventListener('DOMContentLoaded', () => {
  renderQuestionTags();
});

// === FUNÇÕES DE TELA ===
function showScreen(screenId) {
  document.querySelectorAll('.cara-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// === INÍCIO DO JOGO ===
function startGame(mode) {
  gameState.mode = mode;
  gameState.phase = 'select1';
  gameState.currentPlayer = 1;
  gameState.eliminatedCount = 0;
  gameState.turn = 1;
  gameState.selectedTemp = null;
  gameState.currentQuestion = null;
  gameState.questionHistory = [];
  gameState.usedQuestions = [];
  
  // Cada jogador começa com TODOS os personagens
  const allIds = CHARACTERS.map(c => c.id);
  
  // Manter nomes se já existirem
  const p1Name = gameState.player1.name || 'Jogador 1';
  const p2Name = gameState.player2.name || (mode === 'cpu' ? 'Computador' : 'Jogador 2');
  
  gameState.player1 = {
    name: p1Name,
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0,
    guessAttempts: 3
  };
  gameState.player2 = {
    name: p2Name,
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0,
    guessAttempts: 3
  };
  
  // Esconder áreas que possam estar abertas
  document.getElementById('guessArea').style.display = 'none';
  document.getElementById('answerArea').style.display = 'none';
  
  // Limpar histórico
  document.getElementById('historyList').innerHTML = '';
  
  showScreen('screen-select');
  updateSelectTitle();
  renderSelectionGrid();
}

// === SELEÇÃO DE PERSONAGEM ===
function updateSelectTitle() {
  const title = document.getElementById('selectTitle');
  const subtitle = document.getElementById('selectSubtitle');
  const btn = document.getElementById('btnConfirm');
  
  btn.disabled = true;
  gameState.selectedTemp = null;
  
  if (gameState.phase === 'select1') {
    title.textContent = '👤 Jogador 1: Escolha seu personagem';
    subtitle.textContent = 'Toque no personagem e confirme';
  } else if (gameState.phase === 'select2' && gameState.mode === 'pvp') {
    title.textContent = '👤 Jogador 2: Escolha seu personagem';
    subtitle.textContent = 'Toque no personagem e confirme';
  } else if (gameState.phase === 'select2' && gameState.mode === 'cpu') {
    title.textContent = '🤖 Computador escolhendo...';
    subtitle.textContent = 'Aguarde um momento';
    btn.disabled = true;
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
      gameState.player2.secretCharacter = CHARACTERS[randomIndex];
      gameState.phase = 'play';
      startGamePlay();
    }, 1500);
    return;
  } else if (gameState.phase === 'select1' && gameState.mode === 'online') {
    title.textContent = `👤 ${onlineState.meuNome}: Escolha seu personagem`;
    subtitle.textContent = 'Toque no personagem e confirme';
  } else if (gameState.phase === 'waiting' && gameState.mode === 'online') {
    title.textContent = '⏳ Aguardando adversário...';
    subtitle.textContent = 'O outro jogador está escolhendo seu personagem';
    btn.disabled = true;
  }
}

function renderSelectionGrid() {
  const grid = document.getElementById('selectionGrid');
  grid.innerHTML = '';
  
  const shuffled = shuffleArray([...CHARACTERS]);
  
  shuffled.forEach(character => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.dataset.id = character.id;
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" class="character-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${encodeURIComponent(character.emoji)}</text></svg>'">
      <span class="character-name">${character.name}</span>
    `;
    card.onclick = () => selectCharacter(character.id);
    grid.appendChild(card);
  });
}

function selectCharacter(id) {
  document.querySelectorAll('#selectionGrid .character-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  const selectedCard = document.querySelector(`#selectionGrid .character-card[data-id="${id}"]`);
  if (selectedCard) {
    selectedCard.classList.add('selected');
  }
  
  gameState.selectedTemp = id;
  document.getElementById('btnConfirm').disabled = false;
}

function confirmSelection() {
  if (gameState.selectedTemp === null) {
    alert('Por favor, selecione um personagem!');
    return;
  }
  
  const character = CHARACTERS.find(c => c.id === gameState.selectedTemp);
  
  if (!character) {
    alert('Personagem não encontrado!');
    return;
  }
  
  // Modo online - usar função específica
  if (gameState.mode === 'online') {
    confirmSelectionOnline();
    return;
  }
  
  if (gameState.phase === 'select1') {
    gameState.player1.secretCharacter = character;
    gameState.phase = 'select2';
    
    if (gameState.mode === 'cpu') {
      updateSelectTitle();
    } else {
      updateSelectTitle();
      renderSelectionGrid();
    }
  } else if (gameState.phase === 'select2') {
    gameState.player2.secretCharacter = character;
    gameState.phase = 'play';
    gameState.currentPlayer = 1;
    startGamePlay();
  }
}

// === INÍCIO DA PARTIDA ===
function startGamePlay() {
  showScreen('screen-game');
  updatePlayerNames();
  updateGameHeader();
  renderGameBoard();
  renderQuestionTags();
  updateGuessSelect();
  updateSecretReminder();
  renderHistory();
}

// === ATUALIZAR NOMES DOS JOGADORES ===
function updatePlayerNames() {
  document.getElementById('player1Name').textContent = gameState.player1.name;
  document.getElementById('player2Name').textContent = gameState.player2.name;
}

// === ATUALIZAR LEMBRETE DO PERSONAGEM SECRETO ===
function updateSecretReminder() {
  let playerKey;
  if (gameState.mode === 'online') {
    playerKey = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
  } else {
    playerKey = gameState.currentPlayer === 1 ? 'player1' : 'player2';
  }
  const secret = gameState[playerKey].secretCharacter;
  
  if (secret) {
    document.getElementById('secretEmoji').innerHTML = `<img src="${secret.image}" alt="${secret.name}" class="secret-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${encodeURIComponent(secret.emoji)}</text></svg>'">`;
    document.getElementById('secretName').textContent = secret.name;
  }
}

function updateGameHeader() {
  const turnText = document.getElementById('turnText');
  
  // Atualizar contadores
  document.getElementById('player1Count').textContent = `${gameState.player1.myCharacters.length} restantes`;
  document.getElementById('player2Count').textContent = `${gameState.player2.myCharacters.length} restantes`;
  
  // Destacar jogador ativo
  const player1Box = document.getElementById('player1Box');
  const player2Box = document.getElementById('player2Box');
  
  player1Box.classList.remove('active-turn');
  player2Box.classList.remove('active-turn');
  
  if (gameState.currentPlayer === 1) {
    player1Box.classList.add('active-turn');
  } else {
    player2Box.classList.add('active-turn');
  }
  
  // Texto do turno - CORRIGIDO
  if (gameState.mode === 'cpu') {
    turnText.textContent = gameState.currentPlayer === 1 ? '🎯 Sua Vez' : '🤖 Vez do CPU';
  } else if (gameState.mode === 'online') {
    if (onlineState.aguardandoResposta) {
      turnText.textContent = '⏳ Aguardando resposta...';
    } else if (onlineState.minhaVez) {
      turnText.textContent = '🎯 Sua vez de perguntar!';
    } else {
      const currentPlayerName = gameState.currentPlayer === 1 ? gameState.player1.name : gameState.player2.name;
      turnText.textContent = `⏳ Vez de ${currentPlayerName}`;
    }
  } else {
    const currentPlayerName = gameState.currentPlayer === 1 ? gameState.player1.name : gameState.player2.name;
    turnText.textContent = `Vez de ${currentPlayerName}`;
  }
}

function renderGameBoard() {
  const board = document.getElementById('gameBoard');
  board.innerHTML = '';
  
  // Mostrar OS PERSONAGENS DO JOGADOR LOCAL (que ele está tentando eliminar)
  let playerKey;
  if (gameState.mode === 'online') {
    playerKey = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
  } else {
    playerKey = gameState.currentPlayer === 1 ? 'player1' : 'player2';
  }
  const characterIds = gameState[playerKey].myCharacters;
  
  characterIds.forEach(id => {
    const character = CHARACTERS.find(c => c.id === id);
    if (character) {
      const card = document.createElement('div');
      card.className = 'character-card';
      card.dataset.id = character.id;
      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${encodeURIComponent(character.emoji)}</text></svg>'">
        <span class="character-name">${character.name}</span>
      `;
      board.appendChild(card);
    }
  });
}

function renderQuestionTags() {
  const container = document.getElementById('questionTags');
  container.innerHTML = '';
  
  // Agrupar perguntas por categoria
  const categories = {};
  QUESTIONS.forEach(q => {
    if (!categories[q.category]) categories[q.category] = [];
    categories[q.category].push(q);
  });
  
  // Ícones por categoria
  const icons = {
    "Sexo e idade": "👤",
    "Época": "📅",
    "Cargos": "👑",
    "Origem": "🌍",
    "Reino": "🏛️",
    "Espiritual": "⭐",
    "Família": "👨‍👩‍👧",
    "Guerra": "⚔️",
    "Viagens": "🧳",
    "Jesus": "✝️",
    "Profissão": "💼",
    "Específico": "👩",
    "Diferencial": "🔍"
  };
  
  // Criar seções expansíveis por categoria
  Object.keys(categories).forEach(catName => {
    const questions = categories[catName];
    const icon = icons[catName] || "📌";
    
    const section = document.createElement('div');
    section.className = 'question-category';
    
    // Botão da categoria (cabeçalho expansível)
    const header = document.createElement('button');
    header.className = 'category-header';
    header.innerHTML = `<span class="category-icon">${icon}</span> <span class="category-name">${catName}</span> <span class="category-count">(${questions.length})</span> <span class="category-arrow">▼</span>`;
    header.onclick = () => {
      section.classList.toggle('expanded');
    };
    section.appendChild(header);
    
    // Lista de perguntas (inicialmente oculta)
    const list = document.createElement('div');
    list.className = 'category-questions';
    
    questions.forEach(q => {
      const tag = document.createElement('button');
      tag.className = 'question-tag';
      
      if (gameState.usedQuestions.includes(q.question)) {
        tag.classList.add('used');
      }
      
      tag.textContent = q.question;
      tag.onclick = () => askQuestion(q.question);
      list.appendChild(tag);
    });
    
    section.appendChild(list);
    container.appendChild(section);
  });
}

// === ADICIONAR AO HISTÓRICO ===
function addToHistory(playerName, question, answer, tipo = 'pergunta') {
  const history = {
    playerName: playerName,
    question: question,
    answer: answer,
    tipo: tipo, // 'enviada' = pergunta que fiz, 'recebida' = pergunta que recebi
    timestamp: Date.now()
  };
  
  gameState.questionHistory.push(history);
  renderHistory();
}

// === RENDERIZAR HISTÓRICO ===
function renderHistory() {
  const container = document.getElementById('historyList');
  container.innerHTML = '';
  
  if (gameState.questionHistory.length === 0) {
    container.innerHTML = '<p style="color: #999; text-align: center; font-style: italic;">Nenhuma pergunta ainda...</p>';
    return;
  }
  
  gameState.questionHistory.forEach(item => {
    const div = document.createElement('div');
    
    // Determinar classe baseada no tipo e resposta
    let classe = 'history-item';
    if (item.tipo === 'enviada') {
      classe += ' enviada';
    } else {
      classe += ' recebida';
    }
    
    if (item.answer !== null) {
      classe += item.answer ? ' answered-yes' : ' answered-no';
    }
    
    div.className = classe;
    
    // Ícone para enviar/receber
    const icone = item.tipo === 'enviada' ? '📤' : '📥';
    const tipoTexto = item.tipo === 'enviada' ? 'Perguntei' : 'Recebi';
    
    // Texto da resposta
    let answerText = '';
    let answerClass = '';
    if (item.answer !== null) {
      answerText = item.answer ? '✅ Sim' : '❌ Não';
      answerClass = item.answer ? 'yes' : 'no';
    } else {
      answerText = '⏳ Aguardando...';
    }
    
    div.innerHTML = `
      <div class="history-header">
        <span class="history-icon">${icone}</span>
        <span class="history-type">${tipoTexto}</span>
        <span class="history-player">${item.playerName}</span>
      </div>
      <div class="history-content">
        <span class="history-question">"${item.question}"</span>
        <span class="history-answer ${answerClass}">${answerText}</span>
      </div>
    `;
    
    container.appendChild(div);
  });
  
  // Rolar para baixo
  container.scrollTop = container.scrollHeight;
}

function updateGuessSelect() {
  const select = document.getElementById('guessSelect');
  select.innerHTML = '<option value="">Selecione um personagem...</option>';
  
  // Mostrar personagens que o jogador ainda não eliminou
  let playerKey;
  if (gameState.mode === 'online') {
    playerKey = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
  } else {
    playerKey = gameState.currentPlayer === 1 ? 'player1' : 'player2';
  }
  const characterIds = gameState[playerKey].myCharacters;
  
  characterIds.forEach(id => {
    const character = CHARACTERS.find(c => c.id === id);
    if (character) {
      const option = document.createElement('option');
      option.value = character.id;
      option.textContent = character.name;
      select.appendChild(option);
    }
  });
}

// === PERGUNTAS ===
function askQuestion(question) {
  // Se for vez do CPU no modo CPU, não permitir perguntar
  if (gameState.mode === 'cpu' && gameState.currentPlayer === 2) {
    alert('Aguarde a vez do computador!');
    return;
  }
  
  // Verificar se a pergunta já foi usada
  if (gameState.usedQuestions.includes(question)) {
    alert('Esta pergunta já foi feita! Escolha outra.');
    return;
  }
  
  // Modo online - usar função específica
  if (gameState.mode === 'online') {
    askQuestionOnline(question);
    return;
  }
  
  gameState.currentQuestion = question;
  
  // Marcar pergunta como usada
  gameState.usedQuestions.push(question);
  
  // Mostrar área de resposta
  const answerArea = document.getElementById('answerArea');
  const questionDisplay = document.getElementById('questionDisplay');
  
  questionDisplay.textContent = question;
  answerArea.style.display = 'flex';
  
  // Atualizar tags
  renderQuestionTags();
}

function askCustomQuestion() {
  const input = document.getElementById('customQuestion');
  const question = input.value.trim();
  
  if (!question) return;
  
  // Modo online - usar IA para responder
  if (gameState.mode === 'online') {
    askCustomQuestionAI(question);
    input.value = '';
    return;
  }
  
  askQuestion(question);
  input.value = '';
}

// === PERGUNTA CUSTOMIZADA COM IA ===
async function askCustomQuestionAI(question) {
  if (!onlineState.minhaVez) {
    alert('Não é sua vez de perguntar!');
    return;
  }
  
  if (onlineState.aguardandoResposta) {
    alert('Aguarde a resposta da pergunta anterior!');
    return;
  }
  
  // Obter personagem secreto do ADVERSÁRIO
  const adversarioKey = onlineState.jogadorNumero === 1 ? 'player2' : 'player1';
  const adversario = gameState[adversarioKey];
  
  if (!adversario.secretCharacter) {
    alert('Aguardando o adversário escolher seu personagem...');
    return;
  }
  
  const char = adversario.secretCharacter;
  
  // Mostrar loading
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'aiLoading';
  loadingDiv.className = 'ai-loading';
  loadingDiv.innerHTML = '<div class="ai-spinner"></div><span>IA analisando pergunta...</span>';
  document.querySelector('.cara-questions').appendChild(loadingDiv);
  
  try {
    const response = await fetch('php/ai_responder.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pergunta: question,
        personagem_nome: char.name,
        personagem_descricao: char.description,
        personagem_genero: char.gender === 'male' ? 'Masculino' : 'Feminino',
        personagem_idade: char.age,
        personagem_funcao: char.role,
        personagem_aparencia: char.appearance,
        personagem_origem: char.origin,
        personagem_epoca: char.era,
        personagem_lealdade: char.loyalty,
        personagem_livro: char.book
      })
    });
    
    const data = await response.json();
    
    // Remover loading
    const loading = document.getElementById('aiLoading');
    if (loading) loading.remove();
    
    if (data.sucesso) {
      const resposta = data.resposta;
      
      // Enviar pergunta e resposta para o adversário
      await sendCustomQuestionToServer(question, resposta);
      
    } else {
      alert(data.erro || 'Erro ao obter resposta da IA');
    }
    
  } catch (error) {
    const loading = document.getElementById('aiLoading');
    if (loading) loading.remove();
    console.error('Erro na IA:', error);
    alert('Erro de conexão com a IA. Tente novamente.');
  }
}

// === ENVIAR PERGUNTA CUSTOMIZADA PARA O SERVIDOR ===
async function sendCustomQuestionToServer(question, answer) {
  try {
    // Criar mensagem de pergunta customizada
    const response = await fetch('php/enviar_pergunta.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sala_id: onlineState.salaId,
        pergunta: question,
        jogador_numero: onlineState.jogadorNumero
      })
    });
    
    const data = await response.json();
    
    if (data.sucesso) {
      // Atualizar turno no servidor (próximo jogador)
      const proximoJogador = onlineState.jogadorNumero === 1 ? 2 : 1;
      await fetch('php/atualizar_turno.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sala_id: onlineState.salaId,
          novo_turno: proximoJogador
        })
      });
      
      // Eliminar do MEU tabuleiro baseado na resposta da IA
      eliminateCharactersForPlayer(answer, question, onlineState.jogadorNumero);
      
      addToHistory('IA', question, answer, 'enviada');
      
      onlineState.aguardandoResposta = false;
      onlineState.minhaVez = false;
      gameState.currentQuestion = null;
      
      updateGameHeader();
      renderGameBoard();
      
      const respostaTexto = answer ? 'Sim' : 'Não';
      alert(`IA respondeu: ${respostaTexto}`);
      
    } else {
      alert(data.erro || 'Erro ao enviar pergunta');
    }
    
  } catch (error) {
    console.error('Erro ao enviar pergunta:', error);
    alert('Erro de conexão. Tente novamente.');
  }
}

function answerQuestion(answer) {
  // Modo online - usar função específica
  if (gameState.mode === 'online') {
    const mensagemId = document.getElementById('questionDisplay').dataset.mensagemId;
    answerQuestionOnline(answer, mensagemId);
    return;
  }
  
  // Obter nome do jogador que fez a pergunta
  const askingPlayer = gameState.currentPlayer === 1 ? 'player1' : 'player2';
  const askingPlayerName = gameState[askingPlayer].name;
  
  // Adicionar ao histórico
  addToHistory(askingPlayerName, gameState.currentQuestion, answer);
  
  // Esconder área de resposta
  document.getElementById('answerArea').style.display = 'none';
  
  // Esconder área de tentativa (se estiver aberta)
  document.getElementById('guessArea').style.display = 'none';
  
  const question = gameState.currentQuestion;
  
  // O JOGADOR ATUAL está perguntando
  // Ele quer eliminar personagens do SEU PRÓPRIO tabuleiro
  // baseado na resposta do adversário
  
  const currentIds = [...gameState[askingPlayer].myCharacters];
  const secretId = gameState[askingPlayer].secretCharacter?.id;
  
  // Encontrar a função de filtro correspondente à pergunta
  const matchingQuestion = QUESTIONS.find(q => q.question === question);
  
  let filteredIds = [];
  
  if (matchingQuestion) {
    // Filtrar: manter apenas os personagens que CORRESPONDEM à resposta
    filteredIds = currentIds.filter(id => {
      const char = CHARACTERS.find(c => c.id === id);
      if (!char) return false;
      
      const matchesFilter = matchingQuestion.filter(char);
      // matchesFilter é um boolean (true/false) da função de filtro da pergunta
      return answer ? matchesFilter : !matchesFilter;
    });
  } else {
    // Para perguntas customizadas, manter todos
    filteredIds = currentIds;
  }
  
  // PROTEGER o personagem secreto - nunca pode ser eliminado
  if (secretId && !filteredIds.includes(secretId)) {
    filteredIds.push(secretId);
  }
  
  // Atualizar personagens do jogador que fez a pergunta
  gameState[askingPlayer].myCharacters = filteredIds;
  
  // Calcular eliminados
  const eliminated = currentIds.length - filteredIds.length;
  gameState.eliminatedCount += eliminated;
  gameState[askingPlayer].questionsAsked++;
  
  // Verificar se o jogador que perguntou já pode adivinhar (só 1 restante)
  if (filteredIds.length === 1) {
    updateGuessSelect();
    document.getElementById('guessArea').style.display = 'flex';
    return;
  }
  
  // Alternar jogador
  gameState.turn++;
  gameState.currentPlayer = gameState.currentPlayer === 1 ? 2 : 1;
  
  // Se for CPU no modo CPU
  if (gameState.mode === 'cpu' && gameState.currentPlayer === 2) {
    updateGameHeader();
    renderGameBoard();
    updateGuessSelect();
    
    setTimeout(() => {
      cpuMakeMove();
    }, 1500);
  } else {
    updateGameHeader();
    renderGameBoard();
    updateGuessSelect();
  }
}

// === LÓGICA DO COMPUTADOR ===
function cpuMakeMove() {
  const cpuChars = gameState.player2.myCharacters;
  const playerChars = gameState.player1.myCharacters;
  
  // Se CPU tem apenas 1 personagem, tentar adivinhar
  if (cpuChars.length <= 1) {
    cpuMakeGuess();
    return;
  }
  
  // CPU faz uma pergunta
  let bestQuestion = null;
  let bestScore = 0;
  
  QUESTIONS.forEach(q => {
    const yesCount = playerChars.filter(id => {
      const char = CHARACTERS.find(c => c.id === id);
      return q.filter(char);
    }).length;
    const noCount = playerChars.length - yesCount;
    const score = Math.min(yesCount, noCount);
    
    if (score > bestScore) {
      bestScore = score;
      bestQuestion = q;
    }
  });
  
  if (bestQuestion) {
    // Mostrar pergunta do CPU
    const questionDisplay = document.getElementById('questionDisplay');
    questionDisplay.textContent = bestQuestion.question;
    gameState.currentQuestion = bestQuestion.question;
    
    document.getElementById('answerArea').style.display = 'flex';
  }
}

function cpuMakeGuess() {
  const cpuCharacterId = gameState.player2.myCharacters[0];
  const cpuCharacter = CHARACTERS.find(c => c.id === cpuCharacterId);
  const player1Secret = gameState.player1.secretCharacter;
  
  if (cpuCharacterId === player1Secret.id) {
    showResult(false, player1Secret, '🤖 O CPU adivinhou seu personagem!');
  } else {
    showResult(true, player1Secret, '🎉 Você venceu! O CPU errou!');
  }
}

// === TENTATIVA FINAL ===
function updateGuessAttempts() {
  let playerKey;
  if (gameState.mode === 'online') {
    playerKey = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
  } else {
    playerKey = gameState.currentPlayer === 1 ? 'player1' : 'player2';
  }
  const attempts = gameState[playerKey].guessAttempts;
  const el = document.getElementById('guessAttemptsText');
  if (el) {
    el.textContent = `Tentativas restantes: ${attempts}`;
    el.style.color = attempts <= 1 ? '#e74c3c' : '#666';
  }
}

function toggleGuessArea() {
  const guessArea = document.getElementById('guessArea');
  if (guessArea.style.display === 'none') {
    updateGuessAttempts();
    updateGuessSelect();
    guessArea.style.display = 'flex';
  } else {
    guessArea.style.display = 'none';
  }
}

function showGuessArea() {
  updateGuessAttempts();
  updateGuessSelect();
  document.getElementById('guessArea').style.display = 'flex';
}

function makeGuess() {
  const select = document.getElementById('guessSelect');
  const guessedId = parseInt(select.value);
  
  if (!guessedId) {
    alert('Por favor, selecione um personagem!');
    return;
  }
  
  // Modo online - usar função específica
  if (gameState.mode === 'online') {
    makeGuessOnline();
    return;
  }
  
  // Verificar tentativas restantes
  const playerKey = gameState.currentPlayer === 1 ? 'player1' : 'player2';
  if (gameState[playerKey].guessAttempts <= 0) {
    alert('Você já usou todas as suas tentativas de adivinhação!');
    return;
  }
  
  // O jogador está adivinhar o personagem SECRETO do adversário
  const targetPlayer = gameState.currentPlayer === 1 ? 'player2' : 'player1';
  const secretCharacter = gameState[targetPlayer].secretCharacter;
  
  if (guessedId === secretCharacter.id) {
    // Acertou!
    showResult(true, secretCharacter);
  } else {
    // Errou!
    gameState[playerKey].guessAttempts--;
    
    if (gameState[playerKey].guessAttempts <= 0) {
      alert(`Errou! Você não tem mais tentativas de adivinhação. Continuando o jogo...`);
    } else {
      alert(`Errou! Você tem ${gameState[playerKey].guessAttempts} tentativa(s) restante(s). Perdeu a vez!`);
    }
    
    // Perder a vez - trocar jogador
    document.getElementById('guessArea').style.display = 'none';
    gameState.currentPlayer = gameState.currentPlayer === 1 ? 2 : 1;
    updateGameHeader();
    renderGameBoard();
    updateSecretReminder();
  }
}

function giveUp() {
  const targetPlayer = gameState.currentPlayer === 1 ? 'player2' : 'player1';
  showResult(false, gameState[targetPlayer].secretCharacter);
}

// === RESULTADO ===
function showResult(won, secretCharacter, customMessage) {
  showScreen('screen-result');
  
  if (!secretCharacter) {
    secretCharacter = { name: 'Desconhecido', image: '', emoji: '❓', description: 'Personagem secreto' };
  }
  
  document.getElementById('resultIcon').textContent = won ? '🎉' : '😔';
  document.getElementById('resultTitle').textContent = won ? 'Parabéns!' : 'Que pena!';
  document.getElementById('resultMessage').textContent = customMessage || 
    (won ? 'Você adivinhou o personagem!' : 'Não foi dessa vez...');
  
  document.getElementById('secretCharacter').innerHTML = `
    <img src="${secretCharacter.image}" alt="${secretCharacter.name}" class="secret-img" onerror="this.style.display='none'">
    <span class="secret-name">${secretCharacter.name}</span>
  `;
  document.getElementById('secretDesc').textContent = secretCharacter.description;
  
  const totalQuestions = gameState.player1.questionsAsked + gameState.player2.questionsAsked;
  document.getElementById('statQuestions').textContent = totalQuestions;
  document.getElementById('statEliminated').textContent = gameState.eliminatedCount;
}

// === NOVO JOGO ===
function revenge() {
  gameState.currentPlayer = 1;
  gameState.phase = 'select1';
  gameState.eliminatedCount = 0;
  gameState.turn = 1;
  gameState.selectedTemp = null;
  gameState.currentQuestion = null;
  gameState.questionHistory = [];
  gameState.usedQuestions = [];
  
  const allIds = CHARACTERS.map(c => c.id);
  
  // Manter nomes
  const p1Name = gameState.player1.name || 'Jogador 1';
  const p2Name = gameState.player2.name || 'Jogador 2';
  
  gameState.player1 = {
    name: p1Name,
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0,
    guessAttempts: 3
  };
  gameState.player2 = {
    name: p2Name,
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0,
    guessAttempts: 3
  };
  
  // Esconder áreas que possam estar abertas
  document.getElementById('guessArea').style.display = 'none';
  document.getElementById('answerArea').style.display = 'none';
  
  // Limpar histórico
  document.getElementById('historyList').innerHTML = '';
  
  showScreen('screen-select');
  updateSelectTitle();
  renderSelectionGrid();
}

function newGame() {
  startGame(gameState.mode);
}

function goHome() {
  // Sair da sala online se estiver em modo online
  if (gameState.mode === 'online') {
    leaveOnlineRoom();
  }
  
  gameState.phase = 'menu';
  
  // Esconder áreas que possam estar abertas
  document.getElementById('guessArea').style.display = 'none';
  document.getElementById('answerArea').style.display = 'none';
  
  showScreen('screen-start');
}

// === UTILITÁRIOS ===
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// ============================================
// MODO ONLINE - Funções
// ============================================

// === NAVEGAÇÃO ONLINE ===
function showOnlineMenu() {
  showScreen('screen-online');
}

function showCreateRoom() {
  showScreen('screen-create');
  document.getElementById('roomCodeDisplay').style.display = 'none';
  document.getElementById('waitingMessage').style.display = 'none';
}

function showJoinRoom() {
  showScreen('screen-join');
  document.getElementById('joinError').style.display = 'none';
}

// === CRIAR SALA ===
async function createRoom() {
  const nome = document.getElementById('playerName1').value.trim();
  
  if (!nome) {
    alert('Por favor, digite seu nome!');
    return;
  }
  
  onlineState.meuNome = nome;
  gameState.player1.name = nome;
  
  try {
    const response = await fetch('php/criar_sala.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jogo: 'cara-a-cara',
        nome: nome
      })
    });
    
    const data = await response.json();
    
    if (data.sucesso) {
      onlineState.salaId = data.sala_id;
      onlineState.salaCodigo = data.codigo;
      onlineState.jogadorNumero = 1;
      
      // Mostrar código da sala e botão para prosseguir
      document.getElementById('roomCode').textContent = data.codigo;
      document.getElementById('roomCodeDisplay').style.display = 'block';
      document.getElementById('waitingMessage').style.display = 'none'; // Esconder por enquanto
      
      // Copiar código automaticamente
      navigator.clipboard.writeText(data.codigo).catch(() => {});
      
    } else {
      alert(data.erro || 'Erro ao criar sala');
    }
    
  } catch (error) {
    console.error('Erro ao criar sala:', error);
    alert('Erro de conexão. Tente novamente.');
  }
}

// === PROSSEGUIR PARA SELEÇÃO (Jogador 1) ===
function proceedToSelection() {
  // Iniciar polling para receber mensagens
  startOnlinePolling();
  
  // Ir para tela de seleção
  gameState.mode = 'online';
  gameState.phase = 'select1';
  gameState.currentPlayer = 1;
  gameState.eliminatedCount = 0;
  gameState.turn = 1;
  gameState.selectedTemp = null;
  gameState.currentQuestion = null;
  
  // Cada jogador começa com TODOS os personagens
  const allIds = CHARACTERS.map(c => c.id);
  
  gameState.player1 = {
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0
  };
  gameState.player2 = {
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0
  };
  
  // Esconder áreas que possam estar abertas
  document.getElementById('guessArea').style.display = 'none';
  document.getElementById('answerArea').style.display = 'none';
  
  showScreen('screen-select');
  updateSelectTitle();
  renderSelectionGrid();
}

// === ENTRAR NA SALA ===
async function joinRoom() {
  const nome = document.getElementById('playerName2').value.trim();
  const codigo = document.getElementById('roomCodeInput').value.trim().toUpperCase();
  
  if (!nome) {
    alert('Por favor, digite seu nome!');
    return;
  }
  
  if (!codigo || codigo.length !== 6) {
    alert('Por favor, digite um código válido de 6 caracteres!');
    return;
  }
  
  onlineState.meuNome = nome;
  gameState.player2.name = nome;
  
  try {
    const response = await fetch('php/entrar_sala.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        codigo: codigo,
        nome: nome
      })
    });
    
    const data = await response.json();
    
    if (data.sucesso) {
      onlineState.salaId = data.sala_id;
      onlineState.salaCodigo = codigo;
      onlineState.jogadorNumero = 2;
      
      // Iniciar jogo online e polling
      startOnlineGame();
      
    } else {
      document.getElementById('joinError').textContent = data.erro;
      document.getElementById('joinError').style.display = 'block';
    }
    
  } catch (error) {
    console.error('Erro ao entrar na sala:', error);
    alert('Erro de conexão. Tente novamente.');
  }
}

// === INICIAR JOGO ONLINE ===
function startOnlineGame() {
  gameState.mode = 'online';
  gameState.phase = 'select1';
  gameState.currentPlayer = 1;
  gameState.eliminatedCount = 0;
  gameState.turn = 1;
  gameState.selectedTemp = null;
  gameState.currentQuestion = null;
  
  // Cada jogador começa com TODOS os personagens
  const allIds = CHARACTERS.map(c => c.id);
  
  gameState.player1 = {
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0
  };
  gameState.player2 = {
    secretCharacter: null,
    myCharacters: [...allIds],
    questionsAsked: 0
  };
  
  // Esconder áreas que possam estar abertas
  document.getElementById('guessArea').style.display = 'none';
  document.getElementById('answerArea').style.display = 'none';
  
  // Iniciar polling para receber mensagens
  startOnlinePolling();
  
  showScreen('screen-select');
  updateSelectTitle();
  renderSelectionGrid();
}

// === SELECIONAR PERSONAGEM ONLINE ===
async function confirmSelectionOnline() {
  if (gameState.selectedTemp === null) {
    alert('Por favor, selecione um personagem!');
    return;
  }
  
  const character = CHARACTERS.find(c => c.id === gameState.selectedTemp);
  
  if (!character) {
    alert('Personagem não encontrado!');
    return;
  }
  
  try {
    const response = await fetch('php/selecionar_personagem.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sala_id: onlineState.salaId,
        personagem_id: character.id
      })
    });
    
    const data = await response.json();
    
    if (data.sucesso) {
      // Salvar personagem secreto
      const playerKey = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
      gameState[playerKey].secretCharacter = character;
      
      if (data.ambos_escolheram) {
        // Ambos já escolheram, iniciar jogo
        gameState.phase = 'play';
        gameState.currentPlayer = 1;
        startGamePlay();
      } else {
        // Aguardar adversário escolher
        gameState.phase = 'waiting';
        
        // Atualizar tela para mostrar que está aguardando
        const title = document.getElementById('selectTitle');
        const subtitle = document.getElementById('selectSubtitle');
        const btn = document.getElementById('btnConfirm');
        
        title.textContent = '⏳ Aguardando adversário...';
        subtitle.textContent = 'O outro jogador está escolhendo seu personagem';
        btn.disabled = true;
        
        // Garantir que polling está ativo
        if (!onlineState.pollingInterval) {
          startOnlinePolling();
        }
      }
      
    } else {
      alert(data.erro || 'Erro ao selecionar personagem');
    }
    
  } catch (error) {
    console.error('Erro ao selecionar personagem:', error);
    alert('Erro de conexão. Tente novamente.');
  }
}

// === POLLING ONLINE ===
function startOnlinePolling() {
  // Limpar polling anterior se existir
  if (onlineState.pollingInterval) {
    clearInterval(onlineState.pollingInterval);
  }
  
  onlineState.pollingInterval = setInterval(async () => {
    try {
      const response = await fetch(`php/receber_estado.php?sala_id=${onlineState.salaId}&ultima_msg=${onlineState.ultimaMsgId}`);
      const data = await response.json();
      
      if (data.sucesso) {
        processOnlineState(data);
      }
      
    } catch (error) {
      console.error('Erro no polling:', error);
    }
  }, 2000); // Verificar a cada 2 segundos
}

function stopOnlinePolling() {
  if (onlineState.pollingInterval) {
    clearInterval(onlineState.pollingInterval);
    onlineState.pollingInterval = null;
  }
}

// === PROCESSAR ESTADO ONLINE ===
function processOnlineState(data) {
  // Verificar se a sala ainda está ativa
  if (data.sala.status === 'finalizado') {
    stopOnlinePolling();
    return;
  }
  
  // Atualizar nomes dos jogadores
  if (data.jogador1_nome && data.jogador2_nome) {
    gameState.player1.name = data.jogador1_nome;
    gameState.player2.name = data.jogador2_nome;
    
    if (gameState.phase === 'play') {
      updatePlayerNames();
      updateSecretReminder();
    }
  }
  
  // Processar novas mensagens
  if (data.mensagens && data.mensagens.length > 0) {
    data.mensagens.forEach(msg => {
      if (msg.remetente !== 'eu') {
        processIncomingMessage(msg);
      }
      onlineState.ultimaMsgId = Math.max(onlineState.ultimaMsgId, msg.id);
    });
  }
  
  // Verificar se o adversário entrou na sala
  if (data.sala.status === 'em_andamento' && gameState.phase === 'waiting') {
    gameState.phase = 'select1';
    showScreen('screen-select');
    updateSelectTitle();
    renderSelectionGrid();
  }
  
  // Verificar se ambos já escolheram e é hora de jogar
  if (data.status_jogo === 'jogando' && gameState.phase !== 'play') {
    gameState.phase = 'play';
    gameState.currentPlayer = data.jogador_atual || 1;
    startGamePlay();
  }
  
  // ATUALIZAR TURNO - CORRIGIDO
  if (data.status_jogo === 'jogando' && gameState.phase === 'play') {
    const newTurn = data.jogador_atual || 1;
    
    // Se o turno mudou, atualizar
    if (gameState.currentPlayer !== newTurn) {
      gameState.currentPlayer = newTurn;
      gameState.turn = data.turno || gameState.turn;
    }
    
    // Determinar se é minha vez
    const ehMinhaVez = (newTurn === onlineState.jogadorNumero);
    
    // Só atualizar se NÃO estou aguardando resposta
    if (!onlineState.aguardandoResposta) {
      onlineState.minhaVez = ehMinhaVez;
    }
    
    // Atualizar interface
    updateGameHeader();
    updateSecretReminder();
  }
}

// === PROCESSAR MENSAGEM RECEBIDA ===
function processIncomingMessage(msg) {
  console.log('=== PROCESSANDO MENSAGEM ===');
  console.log('Tipo:', msg.tipo, '| Remetente:', msg.remetente);
  
  // IGNORAR minhas próprias mensagens
  if (msg.remetente === 'eu') {
    console.log('IGNORANDO - mensagem é minha');
    return;
  }
  
  if (msg.tipo === 'pergunta') {
    // Adversário fez uma pergunta, preciso responder
    let pergunta = '';
    let jogadorPerguntou = 0;
    
    if (typeof msg.conteudo === 'string') {
      try {
        const dados = JSON.parse(msg.conteudo);
        pergunta = dados.pergunta || msg.conteudo;
        jogadorPerguntou = dados.jogador_perguntou || 0;
      } catch (e) {
        pergunta = msg.conteudo;
      }
    } else if (msg.conteudo && typeof msg.conteudo === 'object') {
      pergunta = msg.conteudo.pergunta || '';
      jogadorPerguntou = msg.conteudo.jogador_perguntou || 0;
    }
    
    console.log('PERGUNTA RECEBIDA:', pergunta, 'de Jogador', jogadorPerguntou);
    
    gameState.currentQuestion = pergunta;
    onlineState.perguntaPendente = { pergunta, perguntador: jogadorPerguntou, mensagemId: msg.id };
    onlineState.minhaVez = false;
    onlineState.aguardandoResposta = false;
    
    showAnswerArea(pergunta, msg.id);
    updateGameHeader();
    
  } else if (msg.tipo === 'resposta') {
    // Recebi resposta - EU PERGUNTEI, então elimino do MEU tabuleiro
    let conteudo = {};
    if (typeof msg.conteudo === 'string') {
      try { conteudo = JSON.parse(msg.conteudo); } catch (e) { return; }
    } else if (msg.conteudo && typeof msg.conteudo === 'object') {
      conteudo = msg.conteudo;
    }
    
    const perguntaRespondida = conteudo.pergunta || '';
    const resposta = conteudo.resposta;
    
    console.log('=== RESPOSTA RECEBIDA VIA POLLING ===');
    console.log('Pergunta:', perguntaRespondida);
    console.log('Resposta:', resposta ? 'SIM' : 'NÃO');
    console.log('EU sou Jogador', onlineState.jogadorNumero, '- vou eliminar do MEU tabuleiro');
    
    // ELIMINAR DO MEU TABULEIRO (eu que perguntei)
    if (perguntaRespondida && resposta !== null) {
      eliminateCharactersForPlayer(resposta, perguntaRespondida, onlineState.jogadorNumero);
    }
    
    const nomeAdversario = onlineState.jogadorNumero === 1 ? gameState.player2.name : gameState.player1.name;
    addToHistory(nomeAdversario, perguntaRespondida, resposta, 'enviada');
    
    onlineState.aguardandoResposta = false;
    onlineState.minhaVez = false;
    onlineState.perguntaPendente = null;
    gameState.currentQuestion = null;
    
    alert(`${nomeAdversario} respondeu: ${resposta ? 'Sim' : 'Não'}`);
    updateGameHeader();
    renderGameBoard();
    
  } else if (msg.tipo === 'adivinhar') {
    const conteudo = typeof msg.conteudo === 'string' ? JSON.parse(msg.conteudo) : msg.conteudo;
    handleOpponentGuess(conteudo);
    
  } else if (msg.tipo === 'errou_adivinhar') {
    // Adversário errou a adivinhação - eu continuo jogando
    onlineState.minhaVez = true;
    alert(`O adversário errou a adivinhação! É sua vez de perguntar.`);
    updateGameHeader();
    
  } else if (msg.tipo === 'sair') {
    alert('O adversário saiu da sala!');
    stopOnlinePolling();
    goHome();
  }
}

// === MOSTRAR ÁREA DE RESPOSTA ONLINE ===
function showAnswerArea(pergunta, mensagemId) {
  const answerArea = document.getElementById('answerArea');
  const questionDisplay = document.getElementById('questionDisplay');
  
  // Obter nome de quem perguntou
  const jogadorPerguntou = onlineState.perguntaPendente?.perguntador || (onlineState.jogadorNumero === 1 ? 2 : 1);
  const nomeAdversario = gameState[jogadorPerguntou === 1 ? 'player1' : 'player2'].name;
  
  // Formatar pergunta para mostrar claramente
  questionDisplay.innerHTML = `
    <div style="text-align: center; margin-bottom: 10px;">
      <span style="font-size: 1.2rem; color: var(--cara-primary);">📥 Pergunta Recebida</span>
    </div>
    <div style="font-size: 1.1rem; color: #333;">
      <strong>${nomeAdversario}</strong> pergunta:
    </div>
    <div style="font-size: 1.3rem; font-style: italic; margin-top: 10px; color: #555;">
      "${pergunta}"
    </div>
  `;
  questionDisplay.dataset.mensagemId = mensagemId;
  answerArea.style.display = 'flex';
  
  // Histórico será adicionado quando a resposta for enviada
}

// === ENVIAR PERGUNTA ONLINE ===
async function askQuestionOnline(question) {
  console.log('Tentando enviar pergunta...', { 
    minhaVez: onlineState.minhaVez, 
    aguardando: onlineState.aguardandoResposta 
  });
  
  if (!onlineState.minhaVez) {
    alert('Não é sua vez de perguntar!');
    return;
  }
  
  if (onlineState.aguardandoResposta) {
    alert('Aguarde a resposta da pergunta anterior!');
    return;
  }
  
  try {
    const response = await fetch('php/enviar_pergunta.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sala_id: onlineState.salaId,
        pergunta: question,
        jogador_numero: onlineState.jogadorNumero
      })
    });
    
    const data = await response.json();
    
    if (data.sucesso) {
      // Atualizar estado
      onlineState.aguardandoResposta = true;
      onlineState.minhaVez = false;
      gameState.currentQuestion = question;
      
      // Histórico será adicionado quando a resposta chegar via polling
      
      // Atualizar interface
      updateGameHeader();
      
      alert('Pergunta enviada! Aguardando resposta...');
    } else {
      alert(data.erro || 'Erro ao enviar pergunta');
    }
    
  } catch (error) {
    console.error('Erro ao enviar pergunta:', error);
    alert('Erro de conexão. Tente novamente.');
  }
}

// === ENVIAR RESPOSTA ONLINE ===
async function answerQuestionOnline(answer, mensagemId) {
  try {
    // Obter a pergunta que foi recebida
    const perguntaRecebida = gameState.currentQuestion;
    
    // QUEM PERGUNTOU é o ADVERSÁRIO (não eu)
    const jogadorPerguntou = onlineState.jogadorNumero === 1 ? 2 : 1;
    
    console.log('=== ENVIANDO RESPOSTA ===');
    console.log('Resposta:', answer ? 'Sim' : 'Não');
    console.log('Pergunta:', perguntaRecebida);
    console.log('EU sou Jogador', onlineState.jogadorNumero);
    console.log('Quem perguntou: Jogador', jogadorPerguntou);
    
    const response = await fetch('php/responder.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sala_id: onlineState.salaId,
        mensagem_id: mensagemId,
        resposta: answer,
        pergunta: perguntaRecebida,
        jogador_respondeu: onlineState.jogadorNumero,
        jogador_perguntou: jogadorPerguntou
      })
    });
    
    const data = await response.json();
    
    if (data.sucesso) {
      // NÃO eliminar aqui! A eliminação será feita no browser de quem PERGUNTOU
      // quando ele receber a resposta via polling
      
      // Adicionar ao histórico
      const nomePerguntador = gameState[jogadorPerguntou === 1 ? 'player1' : 'player2'].name;
      addToHistory(nomePerguntador, perguntaRecebida, answer, 'recebida');
      
      // Esconder área de resposta
      document.getElementById('answerArea').style.display = 'none';
      document.getElementById('guessArea').style.display = 'none';
      
      // LIMPAR ESTADO CORRETAMENTE
      onlineState.aguardandoResposta = false;
      onlineState.minhaVez = false;
      onlineState.perguntaPendente = null;
      gameState.currentQuestion = null;
      
      const respostaTexto = answer ? 'Sim' : 'Não';
      alert(`Resposta enviada: ${respostaTexto}`);
      
      // Atualizar interface
      updateGameHeader();
      renderGameBoard();
    } else {
      alert(data.erro || 'Erro ao enviar resposta');
    }
    
  } catch (error) {
    console.error('Erro ao enviar resposta:', error);
    alert('Erro de conexão. Tente novamente.');
  }
}

// === ELIMINAR PERSONAGENS PARA JOGADOR ESPECÍFICO ===
function eliminateCharactersForPlayer(answer, question, playerNumber) {
  const chavePlayer = playerNumber === 1 ? 'player1' : 'player2';
  const currentIds = [...gameState[chavePlayer].myCharacters];
  const secretId = gameState[chavePlayer].secretCharacter?.id;
  
  console.log('=== ELIMINANDO PERSONAGENS ===');
  console.log('Jogador:', playerNumber, '(' + gameState[chavePlayer].name + ')');
  console.log('Tabuleiro:', chavePlayer);
  console.log('Pergunta:', question);
  console.log('Resposta:', answer ? 'Sim' : 'Não');
  console.log('Personagens antes:', currentIds.length);
  console.log('Personagem secreto ID:', secretId);
  
  // Encontrar filtro correspondente
  const matchingQuestion = QUESTIONS.find(q => q.question === question);
  
  let filteredIds = [];
  
  if (matchingQuestion) {
    console.log('Filtro encontrado:', matchingQuestion.category);
    filteredIds = currentIds.filter(id => {
      const char = CHARACTERS.find(c => c.id === id);
      if (!char) return false;
      
      const matchesFilter = matchingQuestion.filter(char);
      // matchesFilter é um boolean (true/false) da função de filtro da pergunta
      return answer ? matchesFilter : !matchesFilter;
    });
  } else {
    console.log('Pergunta customizada - não eliminando');
    filteredIds = currentIds;
  }
  
  // PROTEGER o personagem secreto - nunca pode ser eliminado
  if (secretId && !filteredIds.includes(secretId)) {
    filteredIds.push(secretId);
    console.log('⚠️ Personagem secreto foi protegido da eliminação!');
  }
  
  // Se elimination resultou em 0 personagens (impossível agora, mas seguro)
  if (filteredIds.length === 0) {
    filteredIds = currentIds;
    console.log('⚠️ Eliminação resultou em 0 - mantendo tabuleiro original');
  }
  
  // Calcular eliminados antes de atualizar
  const eliminated = currentIds.length - filteredIds.length;
  
  console.log('Personagens depois:', filteredIds.length);
  console.log('Eliminados:', eliminated);
  console.log('===========================');
  
  // Atualizar personagens
  gameState[chavePlayer].myCharacters = filteredIds;
  gameState[chavePlayer].questionsAsked++;
  
  // Mostrar resultado
  const nomeJogador = gameState[chavePlayer].name;
  if (eliminated > 0) {
    alert(`${eliminated} personagem(ns) eliminado(s) do tabuleiro de ${nomeJogador}!`);
  }
  
  // Verificar se pode adivinhar
  if (filteredIds.length === 1) {
    const jogadorAtual = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
    if (chavePlayer === jogadorAtual) {
      updateGuessSelect();
      document.getElementById('guessArea').style.display = 'flex';
    }
  }
  
  // Atualizar interface
  updateGameHeader();
  renderGameBoard();
}

// === ELIMINAR PERSONAGENS ONLINE (LEGADO) ===
function eliminateCharactersOnline(answer) {
  const askingPlayer = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
  const currentIds = [...gameState[askingPlayer].myCharacters];
  const secretId = gameState[askingPlayer].secretCharacter?.id;
  const question = gameState.currentQuestion;
  
  // Encontrar filtro correspondente
  const matchingQuestion = QUESTIONS.find(q => q.question === question);
  
  let filteredIds = [];
  
  if (matchingQuestion) {
    filteredIds = currentIds.filter(id => {
      const char = CHARACTERS.find(c => c.id === id);
      if (!char) return false;
      
      const matchesFilter = matchingQuestion.filter(char);
      return answer ? matchesFilter : !matchesFilter;
    });
  } else {
    filteredIds = currentIds;
  }
  
  // PROTEGER o personagem secreto
  if (secretId && !filteredIds.includes(secretId)) {
    filteredIds.push(secretId);
  }
  
  gameState[askingPlayer].myCharacters = filteredIds;
  
  const eliminated = currentIds.length - filteredIds.length;
  gameState.eliminatedCount += eliminated;
  gameState[askingPlayer].questionsAsked++;
  
  if (filteredIds.length === 1) {
    updateGuessSelect();
    document.getElementById('guessArea').style.display = 'flex';
  }
  
  updateGameHeader();
  renderGameBoard();
}

// === PROCESSAR RESPOSTA DO ADVERSÁRIO ===
function handleOnlineAnswer(answer) {
  // Adversário respondeu à minha pergunta
  eliminateCharactersOnline(answer);
  onlineState.aguardandoResposta = false;
  
  alert(`Resposta: ${answer ? 'Sim' : 'Não'}`);
}

// === ADIVINHAR ONLINE ===
async function makeGuessOnline() {
  const select = document.getElementById('guessSelect');
  const guessedId = parseInt(select.value);
  
  if (!guessedId) {
    alert('Por favor, selecione um personagem!');
    return;
  }
  
  // Verificar tentativas restantes
  const playerKey = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
  if (gameState[playerKey].guessAttempts <= 0) {
    alert('Você já usou todas as suas tentativas de adivinhação!');
    return;
  }
  
  try {
    // Enviar tentativa de adivinhação
    const response = await fetch('php/adivinhar.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sala_id: onlineState.salaId,
        personagem_id: guessedId
      })
    });
    
    const data = await response.json();
    
    if (data.sucesso) {
      if (data.acertou) {
        // Acertou! Fim de jogo - mostrar para AMBOS via notificação
        stopOnlinePolling();
        let secretChar = CHARACTERS.find(c => c.id === guessedId);
        
        // Notificar adversário que o jogo acabou (ele perdeu)
        await fetch('php/enviar_pergunta.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sala_id: onlineState.salaId,
            tipo: 'adivinhar',
            pergunta: 'VENCEDOR',
            jogador_perguntou: onlineState.jogadorNumero,
            personagem_id: guessedId,
            acertou: true
          })
        });
        
        showResult(true, secretChar, '🎉 Parabéns! Você é o vencedor!');
      } else {
        // Errou! Perde tentativa e perde a vez
        gameState[playerKey].guessAttempts--;
        
        if (gameState[playerKey].guessAttempts <= 0) {
          alert(`Errou! Você não tem mais tentativas de adivinhação. O jogo continua...`);
        } else {
          alert(`Errou! Você tem ${gameState[playerKey].guessAttempts} tentativa(s) restante(s). Perdeu a vez!`);
        }
        
        document.getElementById('guessArea').style.display = 'none';
        
        // Notificar adversário que errou (ele continua jogando)
        await fetch('php/enviar_pergunta.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sala_id: onlineState.salaId,
            tipo: 'errou_adivinhar',
            pergunta: `${gameState[playerKey].name} errou a adivinhação!`,
            jogador_perguntou: onlineState.jogadorNumero
          })
        });
        
        // Trocar vez
        onlineState.minhaVez = false;
        updateGameHeader();
        renderGameBoard();
      }
    } else {
      alert(data.erro || 'Erro ao adivinhar');
    }
    
  } catch (error) {
    console.error('Erro ao adivinhar:', error);
    alert('Erro de conexão. Tente novamente.');
  }
}

// === PROCESSAR ADIVINHAÇÃO DO ADVERSÁRIO ===
function handleOpponentGuess(conteudo) {
  if (conteudo.acertou) {
    stopOnlinePolling();
    const myPlayerKey = onlineState.jogadorNumero === 1 ? 'player1' : 'player2';
    let secretChar = gameState[myPlayerKey].secretCharacter;
    if (!secretChar && conteudo.personagem_id) {
      secretChar = CHARACTERS.find(c => c.id === conteudo.personagem_id);
    }
    // Jogador 2 vê que Jogador 1 venceu — mostrar tela de resultado com Revanche
    showResult(false, secretChar, '😔 O adversário adivinhou seu personagem! Você perdeu. Mas pode tentar Revanche!');
  } else if (conteudo.tipo === 'adivinhar' && !conteudo.acertou) {
    // Jogador 2 vê que Jogador 1 tentou (não acertou) — apenas notifica
    alert(`⚠️ ${conteudo.jogador_perguntou === 1 ? 'Jogador 1' : 'Jogador 2'} tentou adivinhar!`);
  }
}

// === SAIR DA SALA ONLINE ===
async function leaveOnlineRoom() {
  if (onlineState.salaId) {
    try {
      await fetch('php/sair_sala.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sala_id: onlineState.salaId
        })
      });
    } catch (error) {
      console.error('Erro ao sair da sala:', error);
    }
  }
  
  stopOnlinePolling();
  onlineState = {
    salaId: null,
    salaCodigo: null,
    jogadorNumero: 0,
    meuNome: '',
    pollingInterval: null,
    ultimaMsgId: 0,
    aguardandoResposta: false,
    aguardandoAdversario: false
  };
}
