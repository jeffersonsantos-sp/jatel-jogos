(() => {
  "use strict";

  const screens = {
    inicio: document.getElementById("screen-inicio"),
    pauta: document.getElementById("screen-pauta"),
    entrega: document.getElementById("screen-entrega"),
    entrevista: document.getElementById("screen-entrevista"),
    revelacao: document.getElementById("screen-revelacao"),
    final: document.getElementById("screen-final")
  };

  const elements = {
    durationButtons: Array.from(document.querySelectorAll(".duration-btn")),
    btnComecar: document.getElementById("btnComecar"),
    btnTrocar: document.getElementById("btnTrocar"),
    btnIniciarEntrevista: document.getElementById("btnIniciarEntrevista"),
    btnEstouPronto: document.getElementById("btnEstouPronto"),
    btnVoltarPauta: document.getElementById("btnVoltarPauta"),
    btnDica: document.getElementById("btnDica"),
    btnRevelar: document.getElementById("btnRevelar"),
    btnAcertou: document.getElementById("btnAcertou"),
    btnErrou: document.getElementById("btnErrou"),
    btnProximo: document.getElementById("btnProximo"),
    btnEncerrar: document.getElementById("btnEncerrar"),
    btnJogarNovamente: document.getElementById("btnJogarNovamente"),
    pautaImagem: document.getElementById("pautaImagem"),
    pautaTestamento: document.getElementById("pautaTestamento"),
    pautaNome: document.getElementById("pautaNome"),
    pautaOnde: document.getElementById("pautaOnde"),
    pautaAconteceu: document.getElementById("pautaAconteceu"),
    pautaPerguntaWrap: document.getElementById("pautaPerguntaWrap"),
    pautaPergunta: document.getElementById("pautaPergunta"),
    pautaRodada: document.getElementById("pautaRodada"),
    timer: document.getElementById("timer"),
    timerBar: document.getElementById("timerBar"),
    dicaBox: document.getElementById("dicaBox"),
    dicaTexto: document.getElementById("dicaTexto"),
    revealImagem: document.getElementById("revealImagem"),
    revealTestamento: document.getElementById("revealTestamento"),
    revealNome: document.getElementById("revealNome"),
    revealOnde: document.getElementById("revealOnde"),
    revealAconteceu: document.getElementById("revealAconteceu"),
    revealReferencia: document.getElementById("revealReferencia"),
    revealPlacar: document.getElementById("revealPlacar"),
    resultPrompt: document.getElementById("resultPrompt"),
    finalRodadas: document.getElementById("finalRodadas"),
    finalAcertos: document.getElementById("finalAcertos"),
    finalMensagem: document.getElementById("finalMensagem"),
    srStatus: document.getElementById("srStatus"),
    statusRodada: document.getElementById("statusRodada"),
    statusAcertos: document.getElementById("statusAcertos"),
    entregaRodada: document.getElementById("entregaRodada"),
    entregaAcertos: document.getElementById("entregaAcertos"),
    entrevistaRodada: document.getElementById("entrevistaRodada"),
    entrevistaAcertos: document.getElementById("entrevistaAcertos"),
    revealRodada: document.getElementById("revealRodada"),
    revealAcertos: document.getElementById("revealAcertos")
  };

  const state = {
    deck: [],
    current: null,
    round: 1,
    total: 0,
    correct: 0,
    seconds: 180,
    remaining: 180,
    deadline: 0,
    timerId: null,
    hintUsed: false,
    revealed: false,
    resultChosen: false
  };

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  function formatTime(totalSeconds) {
    const safe = Math.max(0, Math.ceil(totalSeconds));
    const minutes = Math.floor(safe / 60);
    const seconds = safe % 60;
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  function announce(message) {
    elements.srStatus.textContent = "";
    window.setTimeout(() => {
      elements.srStatus.textContent = message;
    }, 30);
  }

  function showScreen(name) {
    Object.values(screens).forEach(screen => {
      screen.classList.remove("is-active");
    });
    screens[name].classList.add("is-active");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function updateStatus() {
    const round = pad(state.round);
    const score = `${state.correct}/${state.total}`;
    const roundNodes = [
      elements.statusRodada,
      elements.entregaRodada,
      elements.entrevistaRodada,
      elements.revealRodada
    ];
    const scoreNodes = [
      elements.statusAcertos,
      elements.entregaAcertos,
      elements.entrevistaAcertos,
      elements.revealAcertos
    ];
    roundNodes.forEach(node => { node.textContent = round; });
    scoreNodes.forEach(node => { node.textContent = score; });
    elements.pautaRodada.textContent = `RODADA ${round}`;
    elements.revealPlacar.textContent = `${state.correct} de ${state.total}`;
  }

  function renderBriefing() {
    const personagem = state.current;
    elements.pautaImagem.src = personagem.imagem;
    elements.pautaImagem.alt = `Ilustração de ${personagem.nome}`;
    elements.pautaTestamento.textContent = personagem.testamento.toUpperCase();
    elements.pautaNome.textContent = personagem.nome;
    elements.pautaOnde.textContent = personagem.onde;
    elements.pautaAconteceu.textContent = personagem.aconteceu;

    if (personagem.pergunta) {
      elements.pautaPergunta.textContent = personagem.pergunta;
      elements.pautaPerguntaWrap.hidden = false;
    } else {
      elements.pautaPergunta.textContent = "";
      elements.pautaPerguntaWrap.hidden = true;
    }

    updateStatus();
  }

  function resetRoundFlags() {
    state.hintUsed = false;
    state.revealed = false;
    state.resultChosen = false;
    state.remaining = state.seconds;
    elements.dicaBox.hidden = true;
    elements.dicaTexto.textContent = "";
    elements.btnDica.disabled = false;
    elements.btnDica.textContent = "PEDIR UMA PISTA";
    elements.resultPrompt.hidden = false;
    elements.btnProximo.hidden = true;
    elements.btnAcertou.disabled = false;
    elements.btnErrou.disabled = false;
    renderTimer();
  }

  function drawNext() {
    stopTimer();

    if (state.deck.length === 0) {
      finishSession();
      return;
    }

    state.current = state.deck.shift();
    state.round = state.total + 1;
    resetRoundFlags();
    renderBriefing();
    showScreen("pauta");
    announce(`Rodada ${state.round}. Pauta confidencial pronta para os repórteres.`);
  }

  function startSession(seconds) {
    stopTimer();
    state.seconds = seconds;
    state.deck = shuffle(PERSONAGENS);
    state.current = null;
    state.round = 1;
    state.total = 0;
    state.correct = 0;
    resetRoundFlags();
    updateStatus();
    drawNext();
  }

  function swapCharacter() {
    if (!state.current || state.deck.length === 0) {
      announce("Não há outro personagem disponível para trocar.");
      return;
    }

    state.deck.push(state.current);
    state.current = state.deck.shift();
    renderBriefing();
    announce(`Personagem trocado. Nova pauta pronta para a rodada ${state.round}.`);
  }

  function showHandoff() {
    if (!state.current) return;
    updateStatus();
    showScreen("entrega");
    announce("Passe o dispositivo para o entrevistado. Toque em Estou pronto para começar.");
    window.setTimeout(() => elements.btnEstouPronto.focus(), 80);
  }

  function backToBriefing() {
    if (!state.current) return;
    showScreen("pauta");
    announce("De volta à pauta dos repórteres.");
  }

  function startInterview() {
    if (!state.current) return;
    state.remaining = state.seconds;
    state.hintUsed = false;
    elements.dicaBox.hidden = true;
    elements.dicaTexto.textContent = "";
    elements.btnDica.disabled = false;
    elements.btnDica.textContent = "PEDIR UMA PISTA";
    updateStatus();
    renderTimer();
    showScreen("entrevista");
    startTimer();
    announce("Entrevista iniciada. Responda como o personagem sem dizer seu nome.");
    window.setTimeout(() => elements.btnRevelar.focus(), 80);
  }

  function startTimer() {
    stopTimer();
    state.deadline = Date.now() + state.remaining * 1000;
    state.timerId = window.setInterval(tickTimer, 200);
    tickTimer();
  }

  function tickTimer() {
    const remaining = Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
    if (remaining !== state.remaining) {
      state.remaining = remaining;
      renderTimer();
    }

    if (remaining <= 0) {
      stopTimer();
      revealAnswer("timeout");
    }
  }

  function stopTimer() {
    if (state.timerId !== null) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function renderTimer() {
    elements.timer.textContent = formatTime(state.remaining);
    const ratio = state.seconds > 0 ? Math.min(1, Math.max(0, state.remaining / state.seconds)) : 0;
    elements.timerBar.style.width = `${ratio * 100}%`;
    elements.timer.classList.toggle("is-low", state.remaining <= 30);
  }

  function askHint() {
    if (!state.current || state.hintUsed) return;
    state.hintUsed = true;
    elements.dicaTexto.textContent = `A história está registrada em ${state.current.livro}. Procure pistas sobre o lugar, as pessoas ao redor e o que aconteceu antes e depois.`;
    elements.dicaBox.hidden = false;
    elements.btnDica.disabled = true;
    elements.btnDica.textContent = "PISTA USADA";
    announce(`Pista liberada: a história está em ${state.current.livro}.`);
  }

  function revealAnswer(reason) {
    if (!state.current || state.revealed) return;
    state.revealed = true;
    stopTimer();
    state.resultChosen = false;

    const personagem = state.current;
    elements.revealImagem.src = personagem.imagem;
    elements.revealImagem.alt = `Ilustração de ${personagem.nome}`;
    elements.revealTestamento.textContent = personagem.testamento.toUpperCase();
    elements.revealNome.textContent = personagem.nome;
    elements.revealOnde.textContent = personagem.onde;
    elements.revealAconteceu.textContent = personagem.aconteceu;
    elements.revealReferencia.textContent = personagem.referencia;
    elements.resultPrompt.hidden = false;
    elements.btnProximo.hidden = true;
    elements.btnAcertou.disabled = false;
    elements.btnErrou.disabled = false;
    updateStatus();
    showScreen("revelacao");

    const message = reason === "timeout"
      ? "Tempo esgotado. Resposta revelada. O entrevistado acertou?"
      : "Resposta revelada. O entrevistado acertou?";
    announce(message);
    window.setTimeout(() => elements.btnAcertou.focus(), 80);
  }

  function registerResult(correct) {
    if (!state.current || state.resultChosen) return;
    state.resultChosen = true;
    state.total += 1;
    if (correct) state.correct += 1;
    updateStatus();
    elements.resultPrompt.hidden = true;
    elements.btnProximo.hidden = false;
    elements.btnAcertou.disabled = true;
    elements.btnErrou.disabled = true;
    elements.btnProximo.focus();
    announce(correct ? "Acertou. Placar atualizado." : "Não acertou. Placar atualizado.");
  }

  function nextCharacter() {
    if (!state.resultChosen) return;
    drawNext();
  }

  function finishSession() {
    stopTimer();
    elements.finalRodadas.textContent = String(state.total);
    elements.finalAcertos.textContent = String(state.correct);
    elements.finalMensagem.textContent = buildFinalMessage();
    showScreen("final");
    announce(`Fim da coletiva. ${state.correct} acertos em ${state.total} rodadas.`);
    window.setTimeout(() => elements.btnJogarNovamente.focus(), 80);
  }

  function buildFinalMessage() {
    if (state.total === 0) {
      return "A coletiva terminou antes da primeira pergunta. A redação está esperando a próxima edição.";
    }

    const ratio = state.correct / state.total;
    if (ratio >= 0.8) {
      return "A redação está impressionada. Esse entrevistado conhece muito bem os bastidores das histórias bíblicas.";
    }
    if (ratio >= 0.5) {
      return "Bom desempenho. Algumas pistas passaram despercebidas, mas a próxima edição promete.";
    }
    return "A redação pede uma nova rodada de investigação. Releia os relatos e convoque a família para a revanche.";
  }

  function endSession() {
    if (state.total === 0 && !state.current) {
      showScreen("inicio");
      return;
    }

    const confirmed = window.confirm("Encerrar a coletiva agora e ver o placar?");
    if (confirmed) finishSession();
  }

  function selectDuration(button) {
    const seconds = Number(button.dataset.seconds);
    if (!Number.isFinite(seconds)) return;
    state.seconds = seconds;
    elements.durationButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    if (!state.current) renderTimer();
  }

  function bindEvents() {
    elements.durationButtons.forEach(button => {
      button.addEventListener("click", () => selectDuration(button));
    });

    elements.btnComecar.addEventListener("click", () => startSession(state.seconds));
    elements.btnTrocar.addEventListener("click", swapCharacter);
    elements.btnIniciarEntrevista.addEventListener("click", showHandoff);
    elements.btnEstouPronto.addEventListener("click", startInterview);
    elements.btnVoltarPauta.addEventListener("click", backToBriefing);
    elements.btnDica.addEventListener("click", askHint);
    elements.btnRevelar.addEventListener("click", () => revealAnswer("manual"));
    elements.btnAcertou.addEventListener("click", () => registerResult(true));
    elements.btnErrou.addEventListener("click", () => registerResult(false));
    elements.btnProximo.addEventListener("click", nextCharacter);
    elements.btnEncerrar.addEventListener("click", endSession);
    elements.btnJogarNovamente.addEventListener("click", () => startSession(state.seconds));

    window.addEventListener("beforeunload", stopTimer);
  }

  function init() {
    bindEvents();
    renderTimer();
    updateStatus();
  }

  window.ColetivaGame = {
    state,
    startSession,
    drawNext,
    swapCharacter,
    startInterview,
    askHint,
    revealAnswer,
    registerResult,
    nextCharacter,
    finishSession,
    getCurrent: () => state.current,
    getPersonagens: () => PERSONAGENS
  };

  init();
})();
