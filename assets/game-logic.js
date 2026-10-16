let wordLists = [
    {
      words: ['genesis', 'exodo', 'levitico', 'numeros', 'deuteronomio', 'josue', 'juizes', 'rute', '1ªsamuel',
        '2ªsamuel', '1ªreis', '2ªreis', '1ªcronicas', '2ªcronicas', 'esdras', 'neemias', 'ester', 'jo',
        'salmos', 'proverbios', 'eclesiastes', 'cantico-de-salomao', 'isaias', 'lamentacoes', 'jeremias',
        'ezequiel', 'daniel', 'oseias', 'joel', 'amos', 'obadias', 'jonas', 'miqueias', 'habacuque', 'sofonias',
        'ageu', 'zacarias', 'malaquias'],
      hints: Array(38).fill('Escrituras Hebraicas - Alguns nomes tem "1ª,2ª,3ª ')
    },
    {
      words: ['mateus', 'marcos', 'lucas', 'joao', 'atos', 'romanos', 'paulo', '1ªcorintios', '2ªcorintios', 'galatas', 
      'paulo', 'efesios', 'filipenses', 'colossenses', '1ªtessalonicenses', '2ªtessalonicenses', 
      '1ªtimoteo', '2ªtimoteo', 'tito', 'filemon', 'hebreus', 'tiago', '1ªpedro', 
      '2ªpedro', '1ªjoao', '2ªjoao', '3ªjoao', 'judas', 'apocalipse'],
      hints: Array(30).fill('Escrituras Gregas - Alguns nomes tem "1ª,2ª,3ª"')
    },
    {
      words: ['tiago','tome','pedro','andre','judas', 'simao','filipe','joao','natanael','mateus','tiago','tadeu'],
      hints: Array(12).fill('Apóstolos de Cristo')

      
    },
    {
        words: ['jonas','joel','amos','oseias','miqueias', 'sofonias','naum','habacuque','obadias','ageu','zacarias','malaquias'],
        hints: Array(12).fill('Profetas Menores')
  
        
      },
      {
        words: ['roboao', 'asa', 'jeosafa', 'jeorao', 'acazias', 'jeoas', 'amazias', 'jeroboao', 'nadabe', 'baasa', 'ela', 'zinri', 
        'onri', 'onri', 'acabe', 'acazias', 'jeorao', 'jeu', 'jeoacaz', 'jeoas',
         'jeroboao','jotao', 'acaz', 'ezequias', 'manasses', 'amom', 'josias', 'jeoacaz', 'jeoiaquim', 'joaquim', 'zedequias', 
         'zacarias', 'salum', 'menaem', 'pecaias', 'peca', 'oseias'],
        hints: Array(38).fill('Reis de Israel')
  
        
      },  
  ];
  
  
  let chosenWord;
  let correctWord = "";
  let letters = [];
  let tries = 10;
  let gameOver = false;
  
  
  function pickRandomWord() {
      const randomListIndex = Math.floor(Math.random() * wordLists.length);
      const chosenList = wordLists[randomListIndex];
      const randomWordIndex = Math.floor(Math.random() * chosenList.words.length);
  
      chosenWord = chosenList.words[randomWordIndex].toUpperCase();
      drawLines();
      console.log(`Dica: ${chosenList.hints[randomWordIndex]}`);
      return chosenWord;
  }

function checkLetter(letter) {
    if (!gameOver) {
        if (!letters.includes(letter)) {
            letters.push(letter);
            if (chosenWord.includes(letter)) {
                for (let i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === letter) {
                        drawCorrectLetter(i);
                        addCorrectLetter(i);
                    }
                }
                checkGameOver();
                disableKey(letter, "correct");
            } else {
                tries--;
                drawHangman();
                checkGameOver();
                disableKey(letter, "incorrect");
            }
        }
    }
}

function checkGameOver() {
    if (tries == 0) {
        // gameover
        showEndGameText("lose", "Game Over!");
        gameOver = true;
    }
    if (correctWord.length === chosenWord.length) {
        // gamewin
        showEndGameText("win", "You Win!");
        gameOver = true;
    }
}

function addCorrectLetter(i) {
    correctWord += chosenWord[i].toUpperCase();
}

function disableKey(key, status) {
    //Add respective class to visually disable key
    const keysButtons = document.querySelectorAll('.letter');
    for (let i = 0; i < keysButtons.length; i++) {
        if (keysButtons[i].textContent === key) {
            keysButtons[i].classList.add(status);
            break;
        }
    }
}

function addListeners() {
    //Adds event listeners to keyboard
    window.addEventListener('keydown', (e) => {
        let letter = e.key.toUpperCase();
        // validation if it's a letter
        if (keys.toString().includes(letter)) {
            checkLetter(letter);
        }
    });

    //Adds events listeners to virtual keyboard
    const keysButtons = document.querySelectorAll('.letter');
    keysButtons.forEach(key => key.addEventListener('click', () => {
        let letter = key.textContent;
        checkLetter(letter);
    }));
}
function pickRandomWord() {
    const randomListIndex = Math.floor(Math.random() * wordLists.length);
    const chosenList = wordLists[randomListIndex];
    const randomWordIndex = Math.floor(Math.random() * chosenList.words.length);

    chosenWord = chosenList.words[randomWordIndex].toUpperCase();
    drawLines();

    // Exibir a dica no elemento com id="hint"
    const hintElement = document.getElementById('hint');
    hintElement.textContent = ` ${chosenList.hints[randomWordIndex]}`;

    return chosenWord;
}