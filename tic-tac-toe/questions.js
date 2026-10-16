// ============================================
// Banco de Perguntas - Jogo da Velha Bíblico
// Baseado em:
// 1. "Imite a Sua Fé" (Verdadeira Fé)
// 2. "Viva Tendo em Mente o Dia de Jeová"
// Fonte: jw.org
// ============================================

const BIBLICAL_QUESTIONS = [
  // ============================================
  // LIVRO 1: IMITE A SUA FÉ (PERSONAGENS)
  // ============================================
  // ABEL
  {
    category: "Imite a Fé",
    question: "Segundo Hebreus 11:4, mesmo morto, o que Abel ainda faz?",
    options: ["Fala pela fé", "Chora por justiça", "Dorme na memória", "Reina no céu"],
    correct: 0
  },
  {
    category: "Imite a Fé",
    question: "Por que o sacrifício de Abel foi aceito por Deus e o de Caim não?",
    options: ["Porque Abel era mais velho", "Porque Abel ofereceu com fé", "Porque Deus preferia carne", "Não sabemos"],
    correct: 1
  },

  // NOÉ
  {
    category: "Imite a Fé",
    question: "A Bíblia diz que Noé 'andou com o verdadeiro Deus'. O que isso significa?",
    options: ["Ele caminhava muito", "Ele obedecia a Deus", "Ele era amigo de Deus", "Ele viajou muito"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Noé demorou quantos anos para construir a arca?",
    options: ["50 anos", "70 anos", "100 anos", "120 anos"],
    correct: 2
  },
  {
    category: "Imite a Fé",
    question: "Noé enfrentou qual grande desafio ao criar seus filhos?",
    options: ["Falta de dinheiro", "Influência mundana", "Perseguição do governo", "Doença"],
    correct: 1
  },

  // ABRAÃO
  {
    category: "Imite a Fé",
    question: "Por que Abraão é chamado de 'pai de todos os que têm fé'?",
    options: ["Porque tinha muitos filhos", "Porque obedeceu a Deus sem ver o resultado", "Porque era rico", "Porque era profeta"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Abraão mostrou fé quando aceitou deixar sua terra para ir onde?",
    options: ["Para o Egito", "Para Canaã", "Para Babilônia", "Para o deserto"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "De que maneira você pode imitar a fé de Abraão hoje?",
    options: ["Mudando de país", "Obedecendo a Deus mesmo sem ver o resultado", "Tendo muitos filhos", "Sendo rico"],
    correct: 1
  },

  // RUTE
  {
    category: "Imite a Fé",
    question: "O que Rute disse a Noemi que demonstrou sua lealdade?",
    options: ["'Eu vou embora'", "'Aonde quer que fores, irei eu'", "'Eu não te conheço'", "'Eu prefiro minha terra'"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Que qualidades Rute demonstrou que a tornaram valiosa aos olhos de Jeová?",
    options: ["Beleza e riqueza", "Lealdade e fé", "Inteligência e força", "Humildade apenas"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "O casamento de Rute e Boaz foi importante porque?",
    options: ["Eram ricos", "Ligou Rute à linhagem do Messias", "Eram da mesma cidade", "Eram da mesma idade"],
    correct: 1
  },

  // ANA
  {
    category: "Imite a Fé",
    question: "Ana enfrentou qual problema que parecia não ter solução?",
    options: ["Pobreza", "Perseguição", "Esterilidade", "Doença"],
    correct: 2
  },
  {
    category: "Imite a Fé",
    question: "Como Ana lidou com seu problema de esterilidade?",
    options: ["Desistiu de Deus", "Abriu seu coração a Deus em oração", "Odiou Penina", "Fugiu de casa"],
    correct: 1
  },

  // SAMUEL
  {
    category: "Imite a Fé",
    question: "Por que a infância de Samuel foi diferente de outras crianças?",
    options: ["Era rico", "Vivia no tabernáculo", "Era o único filho", "Não tinha pais"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "O que ajudou Samuel a desenvolver sua fé quando estava no tabernáculo?",
    options: ["Diversão", "Obediência e serviço a Deus", "Amizades", "Brincadeiras"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Samuel perseverou apesar de qual grande desapontamento?",
    options: ["Perda de dinheiro", "Filhos rebeldes", "Perseguição", "Morte prematura"],
    correct: 1
  },

  // ABIGAIL
  {
    category: "Imite a Fé",
    question: "Abigail agiu com qual qualidade ao lidar com Nabal?",
    options: ["Raiva", "Discrição", "Vingança", "Cobiça"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "O que podemos aprender da situação difícil de Abigail no casamento?",
    options: ["Devemos divorciar", "Devemos ser desleais", "Devemos ser sábias e pacientemente", "Não há lição"],
    correct: 2
  },

  // ELIAS
  {
    category: "Imite a Fé",
    question: "Elias defendeu a adoração pura em qual famoso confronto?",
    options: ["No Monte Sinai", "No Monte Carmelo", "No Templo", "No deserto"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Elias demonstrou ser um homem de oração em que momento?",
    options: ["Quando estava feliz", "Enquanto esperava o cumprimento da promessa de Deus", "Quando estava com fome", "Quando dormia"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Que acontecimento fez Elias ficar tão desanimado a ponto de pedir para morrer?",
    options: ["Perda de dinheiro", "Ameaça de Jezabel", "Derrota em batalha", "Doença"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Como Jeová consolou Elias quando ele estava desanimado?",
    options: ["Enviou um anjo", "Mandou trovão", "Enviou um terremoto", "Tudo isso"],
    correct: 0
  },

  // JONAS
  {
    category: "Imite a Fé",
    question: "Jonas fugiu de Deus porque?",
    options: ["Tinha medo de morrer", "Não queria pregar a Nínive", "Estava com raiva", "Tinha vergonha"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Jonas aprendeu uma lição importante sobre qual attribute de Jeová?",
    options: ["Poder", "Justiça", "Misericórdia", "Onisciência"],
    correct: 2
  },

  // ESTER
  {
    category: "Imite a Fé",
    question: "Ester arriscou a vida para defender qual povo?",
    options: ["Os egípcios", "Os israelitas", "Os babilônicos", "Os romanos"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Ester demonstrou qual qualidade ao agir em favor do povo de Deus?",
    options: ["Cobiça", "Abnegação", "Vaidade", "Medo"],
    correct: 1
  },

  // MARIA
  {
    category: "Imite a Fé",
    question: "Como Maria reagiu quando o anjo Gabriel a visitou?",
    options: ["Fugiu", "'Eis a escrava de Jeová!'", "Recusou", "Gritou"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Maria tirou 'conclusões no seu coração' sobre o que?",
    options: ["Sobre seu futuro", "Sobre as promessas de Jeová", "Sobre seus problemas", "Sobre sua família"],
    correct: 1
  },

  // JOSÉ
  {
    category: "Imite a Fé",
    question: "José levou Maria e Jesus para o Egito por qual motivo?",
    options: ["Turismo", "Proteger Jesus de Herodes", "Trabalho", "Família"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "José demonstrou ser um bom protetor ao?",
    options: ["Viajar muito", "Obedecer às ordens de Deus", "Ser rico", "Ser famoso"],
    correct: 1
  },

  // MARTA
  {
    category: "Imite a Fé",
    question: "Marta mostrou fé notável mesmo durante qual período?",
    options: ["De alegria", "De prosperity", "De muita dor", "De descanso"],
    correct: 2
  },

  // PEDRO
  {
    category: "Imite a Fé",
    question: "Pedro lutou contra qual sentimento que pode ser destrutivo?",
    options: ["Alegria", "Medo e dúvida", "Gratidão", "Amor"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Pedro foi leal a Jesus ao enfrentar qual provação?",
    options: ["Riqueza", "Fama", "Perseguição", "Enfermidade"],
    correct: 2
  },
  {
    category: "Imite a Fé",
    question: "Pedro aprendeu a ser perdoador com Jesus ao?",
    options: ["Perdoar seus inimigos", "Ser perdoado por negar Jesus", "Ensinar sobre perdão", "Rezr por outros"],
    correct: 1
  },

  // ============================================
  // LIVRO 2: VIVA TENDO EM MENTE O DIA DE JEHOVÁ
  // ============================================
  // Preparação para o Dia de Jeová
  {
    category: "Dia de Jeová",
    question: "O que Deus pode ajudá-lo a fazer para Seu grande dia?",
    options: ["Ficar rico", "Preparar-se", "Viajar", "Dormir"],
    correct: 1
  },
  {
    category: "Dia de Jeová",
    question: "Que tipo de mensagens Jeová deu no passado que podem influir na nossa vida?",
    options: ["Apenas sobre dinheiro", "Proféticas e de aviso", "Apenas sobre paz", "Não há mensagens"],
    correct: 1
  },
  {
    category: "Dia de Jeová",
    question: "O dia de Jeová é um assunto de que tipo?",
    options: ["Irrelevante", "Vital", "Secundário", "Optional"],
    correct: 1
  },

  // Conhecer e Servir a Jeová
  {
    category: "Conhecer a Jeová",
    question: "Como podemos conhecer melhor a Jeová?",
    options: ["Apenas rezando", "Estudando suas palavras e praticando-as", "Apenas frequentando reuniões", "Não é possível"],
    correct: 1
  },
  {
    category: "Conhecer a Jeová",
    question: "Jeová é um Deus que?",
    options: ["Mente sempre", "Cumpre o que prediz", "Não se importa", "Está distante"],
    correct: 1
  },

  // Adoração Aprovada
  {
    category: "Adoração Aprovada",
    question: "Para 'procurar a Jeová', devemos praticar?",
    options: ["Rituais humanos", "A adoração que ele aprova", "Tradições antigas", "O que achamos melhor"],
    correct: 1
  },
  {
    category: "Adoração Aprovada",
    question: "Qual é uma chave para conhecer a Deus segundo Amós 5:24?",
    options: ["Ter muito dinheiro", "Haver tanta justiça como as águas de uma enchente", "Fazer muitas festas", "Não fazer nada"],
    correct: 1
  },

  // Padrões de Jeová
  {
    category: "Padrões de Jeová",
    question: "Devemos servir a Jeová de acordo com?",
    options: ["Nossos próprios padrões", "Seus elevados padrões", "Padrões do mundo", "Não há padrões"],
    correct: 1
  },
  {
    category: "Padrões de Jeová",
    question: "Devemos agradar a Deus na nossa?",
    options: ["Apenas na oração", "Conduta e relacionamentos", "Apenas no trabalho", "Apenas em família"],
    correct: 1
  },

  // O que Jeová pede
  {
    category: "Jeová Pede",
    question: "O que Jeová pede de nós segundo Miquéias 6:8?",
    options: ["Dinheiro e presentes", "Praticar justiça, amar a bondade, caminhar humildemente", "Fazer sacrifícios", "Não fazer nada"],
    correct: 1
  },
  {
    category: "Jeová Pede",
    question: "Como devemos tratar os outros segundo Deus deseja?",
    options: ["Com indiferença", "Como gostaríamos de ser tratados", "Com desprezo", "Não importa"],
    correct: 1
  },

  // Vida Familiar
  {
    category: "Vida Familiar",
    question: "Como devemos contribuir para a vida familiar?",
    options: ["Ignorando a família", "De acordo com os padrões de Deus", "Deixando que cada um faça o que quiser", "Não é necessário"],
    correct: 1
  },

  // Expectativa e Alegria
  {
    category: "Expectativa",
    question: "Como devemos aguardar o dia de Jeová?",
    options: ["Com medo", "Com alegria", "Com indiferença", "Com raiva"],
    correct: 1
  },
  {
    category: "Expectativa",
    question: "Jeová deseja que as pessoas ganhem a vida eterna e nós também devemos?",
    options: ["Desistir", "Continuar na expectativa", "Não acreditar", "Esquecer"],
    correct: 1
  },

  // Pregação
  {
    category: "Pregação",
    question: "O que devemos proclamar entre as nações segundo Jesus ordenou?",
    options: ["Nossas opiniões", "As boas novas do Reino", "Notícias do mundo", "Críticas aos outros"],
    correct: 1
  },
  {
    category: "Pregação",
    question: "A pregação é uma 'bênção até que não haja mais' o que?",
    options: ["Necessidade de comida", "Necessidade de Deus", "Necessidade de повидеться", "Não há essa expressão"],
    correct: 0
  },

  // Justiça e Conduta
  {
    category: "Justiça",
    question: "Devemos ter tanta justiça como?",
    options: ["Os fariseus", "As águas de uma enchente", "Os sacerdotes", "Os reis"],
    correct: 1
  },
  {
    category: "Justiça",
    question: "A justiça deve fluir de nós como?",
    options: ["Gotas de chuva", "Águas de uma enchente", "Fogo", "Vento"],
    correct: 1
  },

  // Vida Familiar
  {
    category: "Vida Familiar",
    question: "A vida familiar deve agradar a Deus em que aspectos?",
    options: ["Apenas na oração", "Em todas as condutas", "Apenas aos domingos", "Não importa"],
    correct: 1
  },
  {
    category: "Vida Familiar",
    question: "O que contribui para uma vida familiar que agrada a Deus?",
    options: ["Discórdia", "Amor, respeito e obediência à Bíblia", "Ignorância", "Dinheiro"],
    correct: 1
  },

  // Desafio
  {
    category: "Desafio",
    question: "Os profetas cujas mensagens influem na nossa vida incluem?",
    options: ["Apenas Isaías", "Vários profetas do AT e NT", "Apenas Paulo", "Não há profetas"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "O 'dia de Jeová' se refere a?",
    options: ["Um dia da semana", "Um período de julgamento divino", "O aniversário de Deus", "Um feriado"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "Para servir a Jeová de acordo com seus padrões, devemos?",
    options: ["Fazer o que o mundo faz", "Seguir a Bíblia e não as tradições humanas", "Não fazer nada", "Esperar que outros façam"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "Jeová cumpre o que prediz, então devemos?",
    options: ["Duvidar", "Confiar nele e obedecer", "Ignorar as profecias", "Não acreditar"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "A 'bênção até que não haja mais necessidade' se refere a?",
    options: ["Dinheiro infinito", "A pregação que continua até o fim", "Uma religião perfeita", "Não há essa expressão"],
    correct: 1
  },

  // ============================================
  // LIVRO 1: MAIS PERGUNTAS (50 NO TOTAL)
  // ============================================
  // NOÉ - Mais perguntas
  {
    category: "Imite a Fé",
    question: "Noé construiu a arca de acordo com que instrução?",
    options: ["Suas próprias ideias", "O que Deus mostrou", "O que os vizinhos fizeram", "Não há registro"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Quantas pessoas foram salvas na arca com Noé?",
    options: ["4", "6", "8", "12"],
    correct: 2
  },
  {
    category: "Imite a Fé",
    question: "Noé era um homem justo porque?",
    options: ["Era rico", "Caminhava com Deus", "Era famoso", "Tinha muitos filhos"],
    correct: 1
  },

  // ABRAÃO - Mais perguntas
  {
    category: "Imite a Fé",
    question: "Abraão mostrou fé ao aceitar deixar sua terra e ir para?",
    options: ["Egito", "Canaã", "Babilônia", "Roma"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Deus fez uma promessa a Abraão sobre sua descendência. O que prometeu?",
    options: ["Muitas riquezas", "Ser nação grande", "Um reino", "Um templo"],
    correct: 1
  },

  // RUTE - Mais perguntas
  {
    category: "Imite a Fé",
    question: "Rute era de que nacionalidade?",
    options: ["Israelita", "Moabita", "Egípcia", "Filisteia"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Rute escolheu seguir Noemi porque?",
    options: ["Não tinha opção", "Amava sua sogra e a Deus", "Queria ser rica", "Não tinha família"],
    correct: 1
  },

  // ANA - Mais perguntas
  {
    category: "Imite a Fé",
    question: "Ana fez uma promessa a Deus antes de conceber. Qual?",
    options: ["Dedicaria o filho ao serviço de Deus", "Seria rica", "Viajaria muito", "Não há registro"],
    correct: 0
  },

  // SAMUEL - Mais perguntas
  {
    category: "Imite a Fé",
    question: "Como Deus chamou Samuel quando ele era menino?",
    options: ["Em um sonho", "Por uma voz", "Por um anjo", "Por um sonho"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Samuel cresceu no tabernáculo sob a supervisão de quem?",
    options: ["Davi", "Eli", "Moisés", "Josué"],
    correct: 1
  },

  // ELIAS - Mais perguntas
  {
    category: "Imite a Fé",
    question: "No Monte Carmelo, Elias enfrentou profetas de qual deus?",
    options: ["Jeová", "Baal", "Dagon", "Moloc"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Elias foi sustentado por Deus através de?",
    options: ["Umanuenses", "Corvos e uma viúva", "Soldados", "Reis"],
    correct: 1
  },

  // ESTER - Mais perguntas
  {
    category: "Imite a Fé",
    question: "Ester arriscou a vida ao entrar na presença de quem sem ser chamada?",
    options: ["Mardoqueu", "O rei Assuero", "Hamã", "Um anjo"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "O que Mardoqueu disse a Ester que a激励 a agir?",
    options: ["'Fuja do país'", "'Quem sabe se não foi para uma ocasião assim que você foi feita rainha?'", "'Não faça nada'", "'Espere'"],
    correct: 1
  },

  // PEDRO - Mais perguntas
  {
    category: "Imite a Fé",
    question: "Pedro foi um dos três discípulos mais próximos de Jesus junto com?",
    options: ["Paulo e Tiago", "Tiago e João", "André e Filipe", "Tomé e Judas"],
    correct: 1
  },
  {
    category: "Imite a Fé",
    question: "Pedro negou Jesus quantas vezes antes do galo cantar?",
    options: ["1 vez", "2 vezes", "3 vezes", "4 vezes"],
    correct: 2
  },

  // ============================================
  // LIVRO 2: MAIS PERGUNTAS (50 NO TOTAL)
  // ============================================
  // Preparação para o Dia de Jeová
  {
    category: "Dia de Jeová",
    question: "Devemos viver tendo em mente o dia de Jeová porque?",
    options: ["Para ter medo", "Para nos prepararmos", "Por diversão", "Não é necessário"],
    correct: 1
  },
  {
    category: "Dia de Jeová",
    question: "Jeová deu mensagens no passado para?",
    options: ["Assustar as pessoas", "Ajudar e advertir", "Mostrar poder", "Não tem motivo"],
    correct: 1
  },
  {
    category: "Dia de Jeová",
    question: "O dia de Jeová é importante porque envolve?",
    options: ["Festas", "Julgamento e salvação", "Férias", "Nada especial"],
    correct: 1
  },

  // Conhecer a Jeová - Mais
  {
    category: "Conhecer a Jeová",
    question: "Como podemos demonstrar que conhecemos a Jeová?",
    options: ["Apenas falando", "Obedecendo às suas leis", "Apenas rezando", "Não é possível"],
    correct: 1
  },

  // Adoração Aprovada - Mais
  {
    category: "Adoração Aprovada",
    question: "Que tipo de adoração Jeová aprova?",
    options: ["Baseada na Bíblia", "Baseada em tradições humanas", "Qualquer uma", "Não aprova nenhuma"],
    correct: 0
  },

  // Padrões de Jeová - Mais
  {
    category: "Padrões de Jeová",
    question: "Jeová tem elevados padrões porque?",
    options: ["É perfeito", "É exigente", "Não gosta de nós", "É ruim"],
    correct: 0
  },
  {
    category: "Padrões de Jeová",
    question: "Para agradar a Deus, devemos agir com?",
    options: ["Egoísmo", "Justiça e amor", "Indiferença", "Raiva"],
    correct: 1
  },

  // O que Jeová pede - Mais
  {
    category: "Jeová Pede",
    question: "Jeová pede que caminhemos humildemente porque?",
    options: ["Para sermos fracos", "Para sermos humildes e dependentes Dele", "Para sermos submissos", "Não há motivo"],
    correct: 1
  },

  // Vida Familiar - Mais
  {
    category: "Vida Familiar",
    question: "Como os pais devem criar seus filhos segundo a Bíblia?",
    options: ["Com indiferença", "Nos conselhos e instrução de Jeová", "Com permissividade", "Com agressividade"],
    correct: 1
  },
  {
    category: "Vida Familiar",
    question: "A unidade familiar é importante porque?",
    options: ["Para ter dinheiro", "Reflete o amor de Deus", "Para impressionar outros", "Não é importante"],
    correct: 1
  },
  {
    category: "Vida Familiar",
    question: "Como devemos resolver conflitos em família?",
    options: ["Com discussão", "Com沟通, paciência e perdão", "Ignorando", "Com violência"],
    correct: 1
  },

  // Expectativa - Mais
  {
    category: "Expectativa",
    question: "Por que devemos continuar na expectativa?",
    options: ["Porque é divertido", "Porque as promessas de Deus são seguras", "Porque não há nada melhor", "Não há motivo"],
    correct: 1
  },

  // Pregação - Mais
  {
    category: "Pregação",
    question: "A pregação do Reino é uma obrigação de?",
    options: ["Apenas anciãos", "Todos os cristãos", "Apenas homens", "Apenas missionários"],
    correct: 1
  },
  {
    category: "Pregação",
    question: "Por que devemos proclamar as boas novas entre as nações?",
    options: ["Para ganhar dinheiro", "Por ordem de Jesus e amor ao próximo", "Para ter fama", "Não é necessário"],
    correct: 1
  },

  // Justiça - Mais
  {
    category: "Justiça",
    question: "A justiça de Deus deve ser praticada em que lugares?",
    options: ["Apenas na igreja", "Em toda a nossa vida", "Apenas no trabalho", "Apenas em família"],
    correct: 1
  },

  // Desafio - Mais
  {
    category: "Desafio",
    question: "Jeová deseja que as pessoas ganhem a vida eterna e isso mostra que Ele é?",
    options: ["Cruel", "Misericordioso e amoroso", "Indiferente", "Distante"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "Viver tendo em mente o dia de Jeová significa?",
    options: ["Ter medo o tempo todo", "Viver de acordo com sua vontade", "Não fazer nada", "Esperar o fim do mundo"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "A bênção de Jeová é temporária ou contínua?",
    options: ["Temporária", "Contínua até que não haja mais necessidade", "Apenas aos domingos", "Não há bênção"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "Devemos tratar os outros como Deus deseja que nos tratemos porque?",
    options: ["É legal", "Mostra amor e obediência a Deus", "Para ganhar dinheiro", "Não é necessário"],
    correct: 1
  },

  // Mais 6 perguntas para chegar a 100
  {
    category: "Desafio",
    question: "Jeová cumpre suas promessas porque Ele é?",
    options: ["Mentiroso", "Fiel e não pode mentir", "Irresponsável", "Distante"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "A justiça de Deus deve ser praticada por?",
    options: ["Apenas anciãos", "Todos os cristãos", "Apenas homens", "Apenas mulheres"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "Viver com expectativa do dia de Jeová traz?",
    options: ["Ansiedade", "Alegria e esperança", "Medo", "Indiferença"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "Deus deseja que as pessoas ganhem a vida eterna, então devemos?",
    options: ["Ignorar", "Ajudar outros a conhecê-lo", "Desistir", "Não acreditar"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "A bênção de Jeová vai continuar até quando?",
    options: ["Até o fim do mundo", "Até que não haja mais necessidade", "Por mais 100 anos", "Não há resposta"],
    correct: 1
  },
  {
    category: "Desafio",
    question: "Para viver tendo em mente o dia de Jeová, devemos?",
    options: ["Viver de qualquer jeito", "Viver de acordo com seus padrões", "Não fazer nada", "Esperar sentados"],
    correct: 1
  }
];
