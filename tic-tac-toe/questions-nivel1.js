// ============================================
// Banco de Perguntas - Nível 1
// 15 perguntas de "Meu Livro de Histórias Bíblicas"
// 15 perguntas de "Imite a Sua Fé"
// 20 perguntas de "Jesus — o Caminho, a Verdade e a Vida"
// ============================================

const BIBLICAL_QUESTIONS_NIVEL1 = [
  {
    "category": "Histórias Bíblicas — Parte 1 — Da criação ao Dilúvio",
    "reference": "História 1 — Deus começa a criar coisas",
    "question": "Quem criou o céu, a Terra e tudo o que existe?",
    "options": [
      "Jeová",
      "Noé",
      "Moisés",
      "Davi"
    ],
    "correct": 0
  },
  {
    "category": "Histórias Bíblicas — Parte 1 — Da criação ao Dilúvio",
    "reference": "História 9 — Noé constrói uma arca",
    "question": "O que Noé construiu para salvar sua família e os animais?",
    "options": [
      "Uma torre",
      "Um templo",
      "Uma arca",
      "Uma cidade"
    ],
    "correct": 2
  },
  {
    "category": "Histórias Bíblicas — Parte 2 — Do Dilúvio à libertação do Egito",
    "reference": "História 12 — A grande torre dos homens",
    "question": "O que os homens tentaram construir na Torre de Babel?",
    "options": [
      "Uma torre que chegasse ao céu",
      "Um palácio para Noé",
      "Uma arca maior",
      "Um muro para Jericó"
    ],
    "correct": 0
  },
  {
    "category": "Histórias Bíblicas — Parte 2 — Do Dilúvio à libertação do Egito",
    "reference": "História 15 — A esposa de Ló olhou para trás",
    "question": "Em que a esposa de Ló se transformou por olhar para trás?",
    "options": [
      "Numa estátua de ouro",
      "Numa nuvem de fumaça",
      "Numa árvore",
      "Numa coluna de sal"
    ],
    "correct": 3
  },
  {
    "category": "Histórias Bíblicas — Parte 2 — Do Dilúvio à libertação do Egito",
    "reference": "História 21 — José é odiado pelos irmãos",
    "question": "O que os irmãos de José fizeram com ele por inveja?",
    "options": [
      "Venderam-no como escravo",
      "Fizeram dele rei",
      "Deram-lhe um presente",
      "Levaram-no para Canaã"
    ],
    "correct": 0
  },
  {
    "category": "Histórias Bíblicas — Parte 2 — Do Dilúvio à libertação do Egito",
    "reference": "História 28 — Salvo o menino Moisés",
    "question": "Quem foi colocado num cesto e escondido no rio Nilo?",
    "options": [
      "José",
      "Moisés bebê",
      "Arão",
      "Josué"
    ],
    "correct": 1
  },
  {
    "category": "Histórias Bíblicas — Parte 2 — Do Dilúvio à libertação do Egito",
    "reference": "História 32 — As 10 pragas",
    "question": "Quantas pragas Jeová enviou ao Egito?",
    "options": [
      "3",
      "7",
      "9",
      "10"
    ],
    "correct": 3
  },
  {
    "category": "Histórias Bíblicas — Parte 2 — Do Dilúvio à libertação do Egito",
    "reference": "História 33 — Travessia do mar Vermelho",
    "question": "Como os israelitas atravessaram o mar Vermelho?",
    "options": [
      "Em terra seca",
      "Em barcos",
      "Nadando",
      "Sobre pontes"
    ],
    "correct": 0
  },
  {
    "category": "Histórias Bíblicas — Parte 3 — Da libertação do Egito ao primeiro rei",
    "reference": "História 34 — Um novo tipo de comida",
    "question": "Qual alimento Jeová fez cair do céu para os israelitas?",
    "options": [
      "Pão assado",
      "O maná",
      "Uvas",
      "Peixes"
    ],
    "correct": 1
  },
  {
    "category": "Histórias Bíblicas — Parte 3 — Da libertação do Egito ao primeiro rei",
    "reference": "História 44 — Raabe esconde os espiões",
    "question": "Quem escondeu os espias em Jericó?",
    "options": [
      "Débora",
      "Raabe",
      "Rute",
      "Ana"
    ],
    "correct": 1
  },
  {
    "category": "Histórias Bíblicas — Parte 3 — Da libertação do Egito ao primeiro rei",
    "reference": "História 46 — Os muros de Jericó",
    "question": "O que aconteceu com os muros de Jericó?",
    "options": [
      "Ficaram intactos",
      "Foram queimados",
      "Caíram",
      "Foram reconstruídos"
    ],
    "correct": 2
  },
  {
    "category": "Histórias Bíblicas — Parte 4 — Do primeiro rei ao cativeiro",
    "reference": "História 58 — Davi e Golias",
    "question": "Qual arma Davi usou para derrotar Golias?",
    "options": [
      "Uma espada",
      "Uma lança",
      "Um arco",
      "Uma funda com uma pedra"
    ],
    "correct": 3
  },
  {
    "category": "Histórias Bíblicas — Parte 4 — Do primeiro rei ao cativeiro",
    "reference": "História 70 — Jonas e o grande peixe",
    "question": "O que aconteceu com Jonas quando fugiu de Jeová?",
    "options": [
      "Ficou perdido",
      "Foi preso",
      "Ficou cego",
      "Foi engolido por um grande peixe"
    ],
    "correct": 3
  },
  {
    "category": "Histórias Bíblicas — Parte 6 — Do nascimento de Jesus à sua morte",
    "reference": "História 85 — Jesus nasce num estábulo",
    "question": "Onde Jesus nasceu?",
    "options": [
      "Num palácio",
      "Numa sinagoga",
      "Num estábulo",
      "No templo"
    ],
    "correct": 2
  },
  {
    "category": "Histórias Bíblicas — Parte 7 — Da ressurreição à prisão de Paulo",
    "reference": "História 102 — Jesus vive",
    "question": "O que aconteceu com Jesus no terceiro dia depois de sua morte?",
    "options": [
      "Ele foi ressuscitado",
      "Ele voltou para Nazaré",
      "Ele foi levado para Roma",
      "Ele reapareceu no templo"
    ],
    "correct": 0
  },
  {
    "category": "Imite a Sua Fé — Abel",
    "reference": "Abel — ‘Embora morto, ele ainda fala’",
    "question": "Por que o sacrifício de Abel foi aceito por Jeová?",
    "options": [
      "Porque Abel ofereceu com fé",
      "Porque era o filho mais velho",
      "Porque ofereceu mais animais",
      "Porque era pastor"
    ],
    "correct": 0
  },
  {
    "category": "Imite a Sua Fé — Noé",
    "reference": "Noé — Ele ‘andou com o verdadeiro Deus’",
    "question": "O que significa dizer que Noé ‘andou com o verdadeiro Deus’?",
    "options": [
      "Que ele viajava muito",
      "Que ele era amigo de todos",
      "Que ele obedecia a Jeová",
      "Que ele construiu cidades"
    ],
    "correct": 2
  },
  {
    "category": "Imite a Sua Fé — Abrão",
    "reference": "Abrão — O ‘pai de todos os que têm fé’",
    "question": "Por que Abrão é chamado de ‘pai de todos os que têm fé’?",
    "options": [
      "Porque tinha muitos filhos",
      "Porque obedeceu a Jeová sem ver o cumprimento",
      "Porque era rico",
      "Porque era profeta"
    ],
    "correct": 1
  },
  {
    "category": "Imite a Sua Fé — Rute",
    "reference": "Rute — ‘Aonde quer que fores, irei eu’",
    "question": "O que Rute disse a Noemi que mostrou lealdade?",
    "options": [
      "Vou voltar para Moabe",
      "Aonde quer que fores, irei eu",
      "Não te conheço",
      "Espere por mim"
    ],
    "correct": 1
  },
  {
    "category": "Imite a Sua Fé — Ana",
    "reference": "Ana — Ela abriu seu coração a Deus",
    "question": "Qual problema Ana enfrentava?",
    "options": [
      "Pobreza",
      "Esterilidade",
      "Perseguição",
      "Doença"
    ],
    "correct": 1
  },
  {
    "category": "Imite a Sua Fé — Samuel",
    "reference": "Samuel — Ele ‘continuava a crescer com Jeová’",
    "question": "Por que a infância de Samuel foi diferente?",
    "options": [
      "Ele vivia no tabernáculo, servindo a Jeová",
      "Ele era rico",
      "Ele não tinha pais",
      "Ele vivia no palácio"
    ],
    "correct": 0
  },
  {
    "category": "Imite a Sua Fé — Abigail",
    "reference": "Abigail — Ela agiu com discrição",
    "question": "Como Abigail agiu com discrição?",
    "options": [
      "Falou com sabedoria e levou provisões",
      "Fugiu com Nabal",
      "Pediu ajuda a Saul",
      "Escondeu-se"
    ],
    "correct": 0
  },
  {
    "category": "Imite a Sua Fé — Elias",
    "reference": "Elias — Ele defendeu a adoração pura",
    "question": "Em que confronto Elias defendeu a adoração pura?",
    "options": [
      "No monte Sinai",
      "No monte Carmelo",
      "No templo",
      "No deserto"
    ],
    "correct": 1
  },
  {
    "category": "Imite a Sua Fé — Jonas",
    "reference": "Jonas — Ele aprendeu de seus erros",
    "question": "Por que Jonas fugiu de Jeová?",
    "options": [
      "Tinha medo de morrer",
      "Não queria pregar a Nínive",
      "Estava com raiva de Deus",
      "Tinha vergonha"
    ],
    "correct": 1
  },
  {
    "category": "Imite a Sua Fé — Ester",
    "reference": "Ester — Ela defendeu o povo de Deus",
    "question": "Que povo Ester defendeu?",
    "options": [
      "Os egípcios",
      "Os judeus",
      "Os babilônios",
      "Os romanos"
    ],
    "correct": 1
  },
  {
    "category": "Imite a Sua Fé — Maria",
    "reference": "Maria — ‘Eis a escrava de Jeová!’",
    "question": "Como Maria reagiu ao anúncio do anjo Gabriel?",
    "options": [
      "Com humildade: ‘Eis a escrava de Jeová’",
      "Recusou a mensagem",
      "Fugiu",
      "Gritou"
    ],
    "correct": 0
  },
  {
    "category": "Imite a Sua Fé — José",
    "reference": "José — Ele foi protetor, provisor e perseverou fielmente",
    "question": "Por que José levou Maria e Jesus para o Egito?",
    "options": [
      "Para protegê-los de Herodes",
      "Para visitar parentes",
      "Para trabalhar",
      "Para fugir da pobreza"
    ],
    "correct": 0
  },
  {
    "category": "Imite a Sua Fé — Marta",
    "reference": "Marta — ‘Eu acredito’",
    "question": "Que declaração de fé Marta fez?",
    "options": [
      "Eu acredito que tu és o Cristo, o Filho de Deus",
      "Não acredito em ressurreição",
      "Vou embora",
      "Não sei quem és"
    ],
    "correct": 0
  },
  {
    "category": "Imite a Sua Fé — Pedro",
    "reference": "Pedro — Ele lutou contra o medo e a dúvida",
    "question": "Contra que sentimentos Pedro lutou?",
    "options": [
      "Alegria e paz",
      "Medo e dúvida",
      "Gratidão e amor",
      "Raiva e inveja"
    ],
    "correct": 1
  },
  {
    "category": "Imite a Sua Fé — Pedro",
    "reference": "Pedro — Ele aprendeu a ser perdoador com o seu Mestre",
    "question": "Quantas vezes Jesus disse que devemos perdoar?",
    "options": [
      "Apenas 1 vez",
      "Até 7 vezes",
      "Até 77 vezes",
      "Apenas 3 vezes"
    ],
    "correct": 2
  },
  {
    "category": "Jesus — Seção 1 — Antes do ministério de Jesus",
    "reference": "Capítulo 1 — Duas mensagens de Deus",
    "question": "Qual anjo anunciou o nascimento de João Batista?",
    "options": [
      "Gabriel",
      "Miguel",
      "Rafael",
      "Uriel"
    ],
    "correct": 0
  },
  {
    "category": "Jesus — Seção 1 — Antes do ministério de Jesus",
    "reference": "Capítulo 2 — Jesus recebe honra antes de nascer",
    "question": "O que o anjo Gabriel disse a Maria sobre seu filho?",
    "options": [
      "Que seria um profeta comum",
      "Que seria chamado Filho do Altíssimo e reinaria para sempre",
      "Que viveria no Egito",
      "Que seria sacerdote em Jerusalém"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 2 — O começo do ministério",
    "reference": "Capítulo 12 — Jesus é batizado",
    "question": "Por que Jesus foi batizado?",
    "options": [
      "Para cumprir a justiça de Deus",
      "Porque tinha pecado",
      "Para ser feito rei",
      "Para fugir de Herodes"
    ],
    "correct": 0
  },
  {
    "category": "Jesus — Seção 2 — O começo do ministério",
    "reference": "Capítulo 15 — Ele realiza seu primeiro milagre",
    "question": "Qual foi o primeiro milagre de Jesus?",
    "options": [
      "Curar um cego",
      "Ressuscitar Lázaro",
      "Acalmar uma tempestade",
      "Transformar água em vinho em Caná"
    ],
    "correct": 3
  },
  {
    "category": "Jesus — Seção 2 — O começo do ministério",
    "reference": "Capítulo 16 — Jesus mostra zelo pela adoração verdadeira",
    "question": "Por que Jesus expulsou os cambistas do templo?",
    "options": [
      "A casa de seu Pai não devia ser casa de comércio",
      "Porque não gostava de animais",
      "Porque queria comprar tudo",
      "Porque os cambistas eram romanos"
    ],
    "correct": 0
  },
  {
    "category": "Jesus — Seção 2 — O começo do ministério",
    "reference": "Capítulo 17 — Ele ensina Nicodemos à noite",
    "question": "O que Jesus disse a Nicodemos que era necessário para entrar no Reino?",
    "options": [
      "Nascer numa família judia",
      "Nascer da água e do espírito",
      "Fazer muitas obras",
      "Ser sacerdote"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 21 — Na sinagoga em Nazaré",
    "question": "O que Jesus disse na sinagoga de Nazaré que irritou o povo?",
    "options": [
      "Que era o Messias",
      "Que nenhum profeta é honrado em sua terra",
      "Que o templo seria destruído",
      "Que todos deviam pagar impostos"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 25 — Ele mostra compaixão ao curar um leproso",
    "question": "O que Jesus fez a um leproso que o procurou?",
    "options": [
      "Mandou-o embora",
      "Tocou nele e o curou",
      "Disse que não podia ajudar",
      "Enviou-o aos fariseus"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 27 — Um convite para Mateus",
    "question": "Quem Jesus chamou da coletoria de impostos?",
    "options": [
      "Zaqueu",
      "Pedro",
      "Mateus",
      "Nicodemos"
    ],
    "correct": 2
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 34 — Jesus escolhe os doze apóstolos",
    "question": "Quantos apóstolos Jesus escolheu?",
    "options": [
      "Sete",
      "Dez",
      "Doze",
      "Setenta"
    ],
    "correct": 2
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 35 — O famoso Sermão do Monte",
    "question": "Qual é o tema central do Sermão do Monte?",
    "options": [
      "A política de Roma",
      "O Reino de Deus e como agradar a Jeová",
      "A construção do templo",
      "As tradições dos fariseus"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 36 — A grande fé de um centurião",
    "question": "Que oficial mostrou grande fé em Jesus?",
    "options": [
      "Um fariseu",
      "Um centurião",
      "Um escriba",
      "Um rei"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 37 — Jesus ressuscita o filho de uma viúva",
    "question": "Quem Jesus ressuscitou em Naim?",
    "options": [
      "O filho de uma viúva",
      "A filha de Jairo",
      "Lázaro",
      "O filho de um centurião"
    ],
    "correct": 0
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 54 — Jesus é ‘o pão da vida’",
    "question": "O que Jesus disse que é o ‘pão da vida’?",
    "options": [
      "O maná",
      "O pão literal",
      "Ele mesmo",
      "A Lei de Moisés"
    ],
    "correct": 2
  },
  {
    "category": "Jesus — Seção 3 — O grande ministério na Galileia",
    "reference": "Capítulo 64 — A importância de ser perdoador",
    "question": "O que Jesus respondeu quando Pedro perguntou se devia perdoar até sete vezes?",
    "options": [
      "Que devia perdoar até 77 vezes",
      "Que não devia perdoar",
      "Que bastava uma vez",
      "Que só devia perdoar amigos"
    ],
    "correct": 0
  },
  {
    "category": "Jesus — Seção 4 — Ministério na Judeia",
    "reference": "Capítulo 73 — Um samaritano mostra o que é ser o próximo",
    "question": "Qual ilustração mostra quem é o próximo?",
    "options": [
      "O filho pródigo",
      "As dez virgens",
      "O bom samaritano",
      "Os talentos"
    ],
    "correct": 2
  },
  {
    "category": "Jesus — Seção 5 — Ministério ao leste do Jordão",
    "reference": "Capítulo 91 — Lázaro é ressuscitado",
    "question": "O que Jesus fez por Lázaro?",
    "options": [
      "Curou-o de uma doença",
      "Ressuscitou-o após quatro dias",
      "Levou-o para o Egito",
      "Fez dele apóstolo"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 6 — Últimos dias do ministério",
    "reference": "Capítulo 101 — O rei entra em Jerusalém montado num jumento",
    "question": "Como Jesus entrou em Jerusalém?",
    "options": [
      "A pé, sozinho",
      "Montado num jumentinho",
      "Num carro de guerra",
      "De barco"
    ],
    "correct": 1
  },
  {
    "category": "Jesus — Seção 7 — Morte e ressurreição",
    "reference": "A Ceia do Senhor",
    "question": "O que Jesus instituiu na última Páscoa?",
    "options": [
      "A Ceia do Senhor",
      "A Páscoa judaica",
      "O batismo",
      "O sábado"
    ],
    "correct": 0
  },
  {
    "category": "Jesus — Seção 7 — Morte e ressurreição",
    "reference": "Jesus é entregue para ser morto",
    "question": "Que governador romano condenou Jesus?",
    "options": [
      "Herodes",
      "Caifás",
      "Pilatos",
      "César"
    ],
    "correct": 2
  }
];
