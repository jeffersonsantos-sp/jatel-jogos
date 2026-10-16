const quotes = [
 { text: "Portanto, vão e façam discípulos de pessoas de todas as nações.", author: "Jesus" }, // Mateus 28:19
  { text: "Senhor, para quem iremos? O senhor tem declarações de vida eterna.", author: "Pedro" }, // João 6:68
  { text: "Creia no Senhor Jesus, e você será salvo.", author: "Paulo" }, // Atos 16:31
  { text: "Alegrem-se sempre. Orem constantemente.", author: "Paulo" }, // 1 Tessalonicenses 5:16-17
  { text: "Combati o bom combate, terminei a corrida, mantive a fé.", author: "Paulo" }, // 2 Timóteo 4:7
  // PROFETAS
  { text: "Aqui estou! Envia-me a mim.", author: "Isaías" }, // Isaías 6:8
  { text: "Mas, quanto a mim e à minha casa, serviremos a Jeová.", author: "Josué" }, // Josué 24:15
  { text: "O justo viverá por causa da sua fidelidade.", author: "Habacuque" }, // Habacuque 2:4
  { text: "Ah! Soberano Senhor Jeová! Eis que tu fizeste os céus e a terra com o teu grande poder.", author: "Jeremias" }, // Jeremias 32:17
  { text: "Jeová é bom; é uma fortaleza no dia da aflição.", author: "Naum" }, // Naum 1:7

  // REIS
  { text: "Jeová é o meu pastor. Nada me faltará.", author: "Davi" }, // Salmo 23:1
  { text: "Agora sei que Jeová salva o seu ungido.", author: "Davi" }, // Salmo 20:6
  { text: "Dá ao teu servo um coração obediente, para julgar o teu povo.", author: "Salomão" }, // 1 Reis 3:9
  { text: "Confie em Jeová de todo o seu coração e não se apoie no seu próprio entendimento.", author: "Salomão" }, // Provérbios 3:5
  { text: "Porque Jeová é nossa Juiz, Jeová é nosso Legislador, Jeová é nosso Rei.", author: "Ezequias" }, // Isaías 33:22 (dito no contexto do reinado dele)

  // JUÍZES
  { text: "Levante-se, Débora; levante-se e cante!", author: "Débora" }, // Juízes 5:12
  { text: "Jeová esteja com você, homem valente!", author: "Anjo a Gideão" }, // Juízes 6:12
  { text: "Com a força que você tem, vá libertar Israel das mãos de Midiã.", author: "Jeová a Gideão" }, // Juízes 6:14
  { text: "Ó Jeová, por favor, lembra-te de mim, e fortalece-me só desta vez.", author: "Sansão" }, // Juízes 16:28
  { text: "Quem é como Jeová? Ele é quem luta por vocês!", author: "Samuel" },// resumo do espírito de 1 Samuel 7:12-13
  
   { text: "Ó homem terreno, ele te comunicou o que é bom.", author: "Miqueias" }, // Miqueias 6:8
  { text: "O zelo pela tua casa me consumirá.", author: "Davi" }, // Salmo 69:9
  { text: "O que Jeová promete, isso ele fará.", author: "Isaías" }, // Isaías 46:11
  { text: "A tua palavra é lâmpada para o meu pé e luz para o meu caminho.", author: "Davi" }, // Salmo 119:105
  { text: "Os que esperam em Jeová renovarão as suas forças.", author: "Isaías" }, // Isaías 40:31
  { text: "Eis que o verdadeiro temor de Jeová — isso é sabedoria.", author: "Jó" }, // Jó 28:28
  { text: "Eu sei que o meu Redentor está vivo.", author: "Jó" }, // Jó 19:25
  { text: "Jeová é minha força e minha proteção; ele se tornou a minha salvação.", author: "Moisés" }, // Êxodo 15:2
  { text: "Quem habita no esconderijo do Altíssimo descansará à sombra do Todo-Poderoso.", author: "Davi" }, // Salmo 91:1
  { text: "O homem que confia em Jeová é abençoado.", author: "Jeremias" }, // Jeremias 17:7
  // REIS
  { text: "Proclamarei o nome de Jeová; atribuam grandeza ao nosso Deus!", author: "Moisés" }, // Deuteronômio 32:3
  { text: "Louvem a Jeová, pois ele é bom; o seu amor leal dura para sempre.", author: "Salomão" }, // 2 Crônicas 5:13
  { text: "Como posso fazer esta grande maldade e realmente pecar contra Deus?", author: "José" }, // Gênesis 39:9
  { text: "Preparem o caminho de Jeová! Endireitem as suas estradas.", author: "João Batista" }, // Mateus 3:3
  { text: "Examinem as Escrituras, porque pensam ter por meio delas vida eterna.", author: "Jesus" }, // João 5:39

  // JUÍZES
  { text: "Jeová reina para sempre!", author: "Débora" }, // Juízes 5:3
  { text: "Bendito seja Jeová, que me vingou dos meus inimigos!", author: "Sansão" }, // Juízes 15:18
  { text: "Não se assustem nem fiquem com medo; Jeová, o seu Deus, lutará por vocês.", author: "Moisés" }, // Deuteronômio 3:22
  { text: "Se Jeová estiver conosco, por que nos aconteceu tudo isso?", author: "Gideão" }, // Juízes 6:13
  { text: "Não tenho poder contra essa multidão, mas nossos olhos estão fixos em ti.", author: "Rei Jeosafá" }, // 2 Crônicas 20:12

  // EXTRA - OUTROS FIÉIS
  { text: "Que me aconteça conforme disseste.", author: "Maria" }, // Lucas 1:38
  { text: "Eu sou a serva de Jeová; cumpra-se em mim segundo a tua palavra.", author: "Maria" }, // Lucas 1:38
  { text: "Felizes os que não veem e, mesmo assim, acreditam.", author: "Jesus" }, // João 20:29
  { text: "Eu acredito que tu és o Cristo, o Filho de Deus.", author: "Marta" }, // João 11:27
  { text: "Eis-me aqui, pois tu me chamaste.", author: "Samuel" }, // 1 Samuel 3:8
  
    { text: "Busquem a Jeová enquanto ele pode ser achado.", author: "Isaías" }, // Isaías 55:6
  { text: "Porque os pensamentos de Jeová não são os nossos pensamentos.", author: "Isaías" }, // Isaías 55:8
  { text: "Eis que a virgem ficará grávida e dará à luz um filho.", author: "Isaías" }, // Isaías 7:14
  { text: "Ó Jeová, tu és o nosso Pai; nós somos o barro, e tu és o nosso Oleiro.", author: "Isaías" }, // Isaías 64:8
  { text: "Por que o homem mortal ficaria com medo?", author: "Isaías" }, // Isaías 51:12
  { text: "Não temas, pois eu estou com você.", author: "Jeová através de Isaías" }, // Isaías 41:10
  { text: "O Deus eterno, Jeová, é o Criador dos confins da terra.", author: "Isaías" }, // Isaías 40:28
  { text: "Os céus estão contando a glória de Deus.", author: "Davi" }, // Salmo 19:1
  { text: "Felizes os que trilham o caminho sem culpa, os que andam segundo a lei de Jeová.", author: "Davi" }, // Salmo 119:1
  { text: "Só em Deus a minha alma espera silenciosa.", author: "Davi" }, // Salmo 62:1

  // REIS
  { text: "Jeová está comigo; não terei medo.", author: "Davi" }, // Salmo 118:6
  { text: "Em paz me deitarei e logo dormirei, pois só tu, ó Jeová, me fazes morar em segurança.", author: "Davi" }, // Salmo 4:8
  { text: "Quem sou eu, ó Jeová Deus, e o que é a minha casa, para me teres trazido até aqui?", author: "Davi" }, // 2 Samuel 7:18
  { text: "Quem teme a Jeová possui forte confiança.", author: "Salomão" }, // Provérbios 14:26
  { text: "O temor de Jeová é o princípio da sabedoria.", author: "Salomão" }, // Provérbios 9:10
    // JUÍZES
  { text: "Quando Jeová escolheu líderes, Israel se dispôs voluntariamente; louvem a Jeová!", author: "Débora" }, // Juízes 5:2
  { text: "Se Jeová for Deus, sigam a ele!", author: "Elias" }, // 1 Reis 18:21
  { text: "Por Jeová e por Gideão!", author: "Gideão" }, // Juízes 7:18
  { text: "Seja forte e corajoso. Não tenha medo.", author: "Jeová a Josué" }, // Josué 1:9
  { text: "Santifiquem-se, pois amanhã Jeová fará coisas maravilhosas entre vocês.", author: "Josué" }, // Josué 3:5
    { text: "Ai de mim! Pois sou um homem de lábios impuros.", author: "Isaías" }, // Isaías 6:5
  { text: "Jeová me chamou desde o ventre de minha mãe.", author: "Isaías" }, // Isaías 49:1
  { text: "Ele mostrou a você, ó homem, o que é bom.", author: "Miqueias" }, // Miqueias 6:8
  { text: "Jeová é bom, é uma fortaleza no dia da aflição.", author: "Naum" }, // Naum 1:7
  { text: "Ainda que a figueira não floresça, eu exultarei em Jeová.", author: "Habacuque" }, // Habacuque 3:17-18
  { text: "Jeová está no meio de você. Ele é poderoso, salvará.", author: "Sofonias" }, // Sofonias 3:17
  { text: "Este é o meu nome para sempre, e esta é a lembrança de mim de geração em geração.", author: "Jeová a Moisés" }, // Êxodo 3:15
  { text: "Não sou eu capaz de fazer com vocês como este oleiro?", author: "Jeová através de Jeremias" }, // Jeremias 18:6
  { text: "Clama a mim, e eu te responderei.", author: "Jeová através de Jeremias" }, // Jeremias 33:3
  { text: "Eu amei vocês com amor eterno.", author: "Jeová através de Jeremias" }, // Jeremias 31:3
   // REIS
  { text: "Jeová é a minha luz e a minha salvação. A quem temerei?", author: "Davi" }, // Salmo 27:1
  { text: "Jeová é a fortaleza da minha vida. De quem terei medo?", author: "Davi" }, // Salmo 27:1
  { text: "Confie em Jeová e faça o bem.", author: "Davi" }, // Salmo 37:3
  { text: "Agrada-te de Jeová, e ele satisfará os desejos do seu coração.", author: "Davi" }, // Salmo 37:4
  { text: "Ensina-me a fazer a tua vontade, pois tu és o meu Deus.", author: "Davi" }, // Salmo 143:10
  { text: "O nome de Jeová é uma torre forte; o justo corre para ela e recebe proteção.", author: "Salomão" }, // Provérbios 18:10
  { text: "Feliz é o homem que encontrou sabedoria.", author: "Salomão" }, // Provérbios 3:13
  { text: "Em tudo o que fizer, pense nele, e ele endireitará os seus caminhos.", author: "Salomão" }, // Provérbios 3:6
  { text: "Para tudo há um tempo determinado, sim, um tempo para cada atividade debaixo dos céus.", author: "Salomão" }, // Eclesiastes 3:1
  { text: "O dever de toda a humanidade é: tema o verdadeiro Deus e obedeça aos seus mandamentos.", author: "Salomão" }, // Eclesiastes 12:13 
    { text: "Como poderia fazer esta grande maldade e realmente pecar contra Deus?", author: "José" }, // Gênesis 39:9
  { text: "Não tenham medo, pois estou no lugar de Deus?", author: "José" }, // Gênesis 50:19
  { text: "Vão para casa em paz; não briguem pelo caminho.", author: "José" }, // Gênesis 45:24
  { text: "Meu filho, o próprio Deus providenciará a ovelha para a oferta queimada.", author: "Abraão" }, // Gênesis 22:8
  { text: "Não passaremos de noite entre o povo dessa cidade.", author: "Ló" }, // Gênesis 19:2
  { text: "Jeová proverá.", author: "Abraão" }, // Gênesis 22:14
  { text: "Ó Jeová, se achei favor aos teus olhos, não passes adiante sem parar.", author: "Abraão" }, // Gênesis 18:3
  { text: "Que se faça com a serva conforme for bom aos seus olhos.", author: "Abraão" }, // Gênesis 16:6
  { text: "Se Jeová não edificar a casa, será inútil o trabalho dos construtores.", author: "Salomão" }, // Salmo 127:1
  { text: "O Senhor é meu pastor; nada me faltará.", author: "Davi" }, // Salmo 23:1  
  { text: "Permaneçam no meu amor.", author: "Jesus" }
];

// Função para embaralhar o array de perguntas
function shuffleQuotes() {
  for (let i = quotes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quotes[i], quotes[j]] = [quotes[j], quotes[i]]; // Troca os elementos
  }
}

let score = 0;
let currentQuoteIndex = 0;
let timer;
let timeLeft = 60;

// Iniciar o jogo
function startGame() {
  shuffleQuotes();  // Embaralha as perguntas
  currentQuoteIndex = 0; // Reinicia o índice das perguntas
  score = 0;  // Reinicia a pontuação
  timeLeft = 60;  // Reinicia o tempo
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('game-area').classList.remove('hidden');
  startTimer();
  showQuote();
}

// Função para iniciar o temporizador
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = `Tempo restante: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// Mostrar a citação na tela
function showQuote() {
  const quote = quotes[currentQuoteIndex];
  document.getElementById('quote').innerText = `"${quote.text}"`;

  const options = generateOptions(quote.author);
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.onclick = () => checkAnswer(option, quote.author);
    optionsDiv.appendChild(button);
  });
}

// Gerar opções aleatórias para a resposta
function generateOptions(correctAuthor) {
const authors = [
  "Moisés", "Josué", "Samuel", "Davi", "Salomão", "Esdras", "Neemias", "Isaías", "Jeremias", 
  "Ezequiel", "Daniel", "Oséias", "Joel", "Amós", "Obadias", "Jonas", "Miqueias", "Naum", 
  "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias", 
  "Mateus", "Marcos", "Lucas", "João", "Pedro", "Tiago", "Judas", "Paulo", 
  "André", "Tomé", "Filipe", "Bartolomeu", "Simão", "Matias", 
  "Barnabé", "Apolo", "Timóteo", "Tito", "Silas", "Estevão", "Filemom", 
  "João Batista", "Tiago filho de Alfeu", "Judas Tadeu", "Natanael", "Zacarias", "Eliseu", 
  "Elias", "Miqueias", "Ageu", "Zacarias", "Malaquias",
  "Maria", "Marta", "Miriã", "Rute", "Raquel", "Priscila", "Sara", "Rebeca", "Ester"
];


  const options = [correctAuthor];

  // Adiciona opções aleatórias até completar 4 opções
  while (options.length < 4) {
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    if (!options.includes(randomAuthor)) {
      options.push(randomAuthor);
    }
  }

  // Embaralha as opções para que a posição da resposta correta seja aleatória
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}

// Verificar a resposta
function checkAnswer(selectedOption, correctAnswer) {
  const resultElement = document.getElementById('result');
  const nextButton = document.getElementById('nextButton');
  if (selectedOption === correctAnswer) {
    resultElement.innerText = 'Você acertou!';
    resultElement.style.color = 'green';
    score++;
  } else {
    resultElement.innerText = `Você errou! A resposta correta é ${correctAnswer}.`;
    resultElement.style.color = 'red';
  }
  nextButton.disabled = false; // Habilita o botão "Próxima Pergunta"
  document.getElementById('score').innerText = `Pontuação: ${score}`;
}

// Próxima pergunta
function nextQuote() {
  currentQuoteIndex++;
  if (currentQuoteIndex >= quotes.length) {
    currentQuoteIndex = 0; // Reinicia o jogo quando as perguntas acabarem
  }
  document.getElementById('result').innerText = '';
  document.getElementById('nextButton').disabled = true;
  showQuote();
}

// Fim do jogo
function endGame() {
  alert(`O tempo acabou! Sua pontuação final é ${score}.`);
  document.getElementById('start-screen').classList.remove('hidden');
  document.getElementById('game-area').classList.add('hidden');
  score = 0;
  timeLeft = 60;
  document.getElementById('score').innerText = `Pontuação: ${score}`;
  document.getElementById('timer').innerText = `Tempo restante: 10s`;
}

document.getElementById('startButton').addEventListener('click', startGame);

