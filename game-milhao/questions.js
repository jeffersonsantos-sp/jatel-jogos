// ============================================
// Banco de Perguntas - Jogo do Milhão Bíblico
// Baseado em 3 livros da jw.org:
// 1. "Aprenda com as Histórias da Bíblia" (Iniciante)
// 2. "Ande Corajosamente com Deus" (Médio)
// 3. "De Testemunho Cabal" (Difícil)
// Fonte: jw.org
// ============================================

const MILHAO_QUESTIONS = [
  // ============================================
  // LIVRO 1: APRENDA COM AS HISTÓRIAS DA BÍBLIA (INICIANTE)
  // 40 perguntas
  // ============================================
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Quem andou com Deus e foi levado ao céu sem morrer?",
    options: ["Noé", "Enoque", "Abraão", "Moisés"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Noé construiu a arca de acordo com?",
    options: ["Suas próprias ideias", "O que Deus mostrou", "O que os vizinhos fizeram", "Não há registro"],
    correct: 1,
    audience: [5, 80, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Sara se recusou a olhar para trás quando deixou?",
    options: ["Egito", "Ur dos Caldeus", "Babilônia", "Canaã"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Abraão lutou uma guerra justa para resgatar quem?",
    options: ["Isaac", "Ló", "Jacó", "José"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Rebeca aceitou ir para uma terra distante. Com quem ela se casou?",
    options: ["Isaac", "Jacó", "Abraão", "Esaú"],
    correct: 0,
    audience: [15, 65, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Jacó lutou com um anjo e recebeu o nome de?",
    options: ["Abraão", "Israel", "José", "Dan"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "José resistiu à tentação de quem?",
    options: ["A esposa de Potifar", "Faraó", "Sua mãe", "Deus"],
    correct: 0,
    audience: [5, 80, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Quem eram as parteiras que desobedeceram a ordem do Faraó?",
    options: ["Sifrá e Puá", "Ana e Raquel", "Sara e Rebeca", "Débora e Jael"],
    correct: 0,
    audience: [15, 60, 15, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Moisés tomou a decisão certa quando?",
    options: ["Viu o mar vermelho", "Matou um egípcio", "Recebeu os mandamentos", "Partiu a rocha"],
    correct: 1,
    audience: [10, 65, 15, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Calebe continuou leal a Deus mesmo quando?",
    options: ["Os outros murmuraram", "O exército fugiu", "O templo foi destruído", "Os filhos morreram"],
    correct: 0,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Josué obedeceu a Deus mesmo sem entender quando?",
    options: ["Caiu o muro de Jericó", "Foi para o deserto", "Lutou contra Amaleque", "Cruzou o Jordão"],
    correct: 0,
    audience: [15, 65, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Raabe escolheu o lado de Deus e escondeu?",
    options: ["O rei de Jericó", "Os espias israelitas", "Seu marido", "Seus filhos"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Noemi e Rute enfrentaram juntas as dificuldades em?",
    options: ["Moabe", "Belém", "Egito", "Samaria"],
    correct: 1,
    audience: [10, 65, 15, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Baraque insistiu que Débora o acompanhasse até onde?",
    options: ["O templo", "O campo de batalha", "O palácio", "O deserto"],
    correct: 1,
    audience: [15, 65, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Gideão venceu a batalha com quantos homens?",
    options: ["1.000", "500", "300", "100"],
    correct: 2,
    audience: [10, 15, 65, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Sansão foi corajoso mesmo quando estava?",
    options: ["Rico", "Fraco", "Doente", "Cego"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Samuel teve a coragem de falar em nome de Jeová quando?",
    options: ["Era velho", "Era menino", "Era sacerdote", "Era rei"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Jonatã mostrou lealdade ao seu amigo?",
    options: ["Saul", "Davi", "Natã", "Absalão"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Davi enfrentou o gigante Golias usando?",
    options: ["Uma espada", "Uma funda e pedras", "Um arco", "Uma lança"],
    correct: 1,
    audience: [5, 85, 5, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Abigail lidou com dois homens furiosos: Davi e?",
    options: ["Saul", "Nabal", "Absalão", "Joabe"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Natã teve a coragem de corrigir quem?",
    options: ["Um sacerdote", "O rei Davi", "Um profeta", "Um soldado"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Mefibosete não se deixou abater pelas dificuldades. Ele era?",
    options: ["Filho de Saul", "Filho de Davi", "Filho de Salomão", "Filho de Roboão"],
    correct: 0,
    audience: [20, 50, 20, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Elias declarou 'Meu Deus é Jeová' no Monte?",
    options: ["Sinai", "Carmelo", "Horebe", "Sion"],
    correct: 1,
    audience: [15, 65, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "A viúva de Sarefá encontrou coragem em um momento de?",
    options: ["Alegria", "Aflição", "Riqueza", "Paz"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Eliseu orou: 'Ó Jeová, abre os olhos dele' para?",
    options: ["Um soldado", "Seu ajudante", "Um profeta", "Um rei"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Ezequias 'se apegava a Jeová' mesmo quando?",
    options: ["Era rico", "Estava doente", "Era jovem", "Era rei"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Manassés teve coragem para?",
    options: ["Matar inimigos", "Mudar de vida", "Construir templos", "Viajar"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Josias ajudou o povo a voltar para?",
    options: ["A terra prometida", "Jeová", "O templo", "A lei"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Daniel decidiu que não se tornaria?",
    options: ["Impuro", "Rico", "Famoso", "Rei"],
    correct: 0,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Os três hebreus 'apagaram a força do fogo' de?",
    options: ["Uma fogueira", "O forno de Nabucodonosor", "Um incêndio", "Uma vela"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Ester disse: 'Se eu tiver de morrer, morrerei' para salvar?",
    options: ["Seu marido", "Seu povo", "Seus filhos", "Seus amigos"],
    correct: 1,
    audience: [5, 80, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Neemias reconstruiu a muralha de?",
    options: ["Babilônia", "Jerusalém", "Roma", "Samaria"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Maria colocou sua vida nas mãos de Jeová quando?",
    options: ["Casou", "Recebeu a visita do anjo", "Teve Jesus", "Fugiu para o Egito"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "José cuidou bem de sua família quando levou Maria e Jesus para?",
    options: ["Jerusalém", "Belém", "Egito", "Nazaré"],
    correct: 2,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "João Batista foi um homem corajoso que levou uma vida?",
    options: ["Luxuosa", "Simples", "Perigosa", "Fácil"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Pedro disse: 'Sou um homem pecador' depois de?",
    options: ["Negar Jesus", "Ver Jesus ressuscitar", "Pregar no Pentecostes", "Curar um doente"],
    correct: 0,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Maria Madalena disse: 'Eu vi o Senhor!' depois da?",
    options: ["Ressurreição", "Ascensão", "Pentecostes", "Crucificação"],
    correct: 0,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Estêvão foi um 'homem cheio de fé e de espírito' que?",
    options: ["Fugiu", "Foi apedrejado", "Morreu velho", "Viajou"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Paulo (Saulo) se tornou uma pessoa completamente diferente quando?",
    options: ["Nasceu", "Converteu-se", "Morreu", "Viajou"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Barnabé foi chamado de 'filho do consolo' porque?",
    options: ["Era rico", "Ajudava outros", "Era forte", "Era sábio"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "Paulo incentivou marinheiros a terem coragem durante um?",
    options: ["Terremoto", "Naufrágio", "Incêndio", "Batalha"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 1,
    difficulty: "Iniciante",
    question: "O apóstolo João teve coragem em tempos?",
    options: ["Felizes", "Sombrios", "Fáceis", "Pacíficos"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },

  // ============================================
  // LIVRO 2: ANDE CORAJOSAMENTE COM DEUS (MÉDIO)
  // 40 perguntas
  // ============================================
  {
    book: 2,
    difficulty: "Médio",
    question: "Jesus disse: 'Vão e façam discípulos' em qual livro da Bíblia?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correct: 0,
    audience: [60, 15, 10, 15]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Os apóstolos foram 'cheios de espírito santo' no dia de?",
    options: ["Páscoa", "Pentecostes", "Expiação", "Tabernáculos"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Os apóstolos foram presos por pregar e disseram: 'Temos de obedecer a'?",
    options: ["Aos homens", "A Deus como governante", "Ao imperador", "Aos sacerdotes"],
    correct: 1,
    audience: [5, 80, 10, 5]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Estêvão foi 'cheio de favor divino e de poder' e deu testemunho diante de?",
    options: ["O imperador", "O Sinédrio", "O povo", "Os soldados"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Filipe declarou 'as boas novas a respeito de Jesus' em qual cidade?",
    options: ["Jerusalém", "Samaria", "Roma", "Antioquia"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "O cruel perseguidor Saulo se tornou um ministro?",
    options: ["Fiel", "Zeloso", "Rico", "Famoso"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Deus não é parcial e aceitou gentios incircuncisos como?",
    options: ["Judeus", "Cristãos", "Sacerdotes", "Reis"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "A palavra de Jeová crescia mesmo com a?",
    options: ["Perseguição", "Paz", "Riqueza", "Fama"],
    correct: 0,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo e Barnabé foram 'cheios de alegria e de espírito' depois de?",
    options: ["Serem presos", "Serem expulsos", "Viajarem", "Dormirem"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo e Barnabé falaram 'com a autoridade de Jeová' em?",
    options: ["Listra", "Roma", "Corinto", "Filipos"],
    correct: 0,
    audience: [20, 50, 20, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "A questão da circuncisão foi levada ao corpo governante em?",
    options: ["Roma", "Jerusalém", "Antioquia", "Alexandria"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "O corpo governante chegou a uma decisão 'de comum acordo' sobre?",
    options: ["O batismo", "A circuncisão", "O João Batista", "A ceia"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Ministros viajantes 'fortaleciam as congregações' em suas?",
    options: ["Casas", "Viagens", "Reuniões", "Escolas"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo teve uma visão de um homem da Macedônia dizendo 'Venha para'?",
    options: ["A Ásia", "A Macedônia", "A África", "A Europa"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo 'raciocinou com eles usando as Escrituras' em Tessalônica e?",
    options: ["Roma", "Corinto", "Bereia", "Éfeso"],
    correct: 2,
    audience: [20, 30, 40, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo foi encorajado a 'buscar a Deus e realmente o achar' em?",
    options: ["Atenas", "Roma", "Corinto", "Jerusalém"],
    correct: 0,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo 'persistiu em falar e não ficou calado' em?",
    options: ["Roma", "Corinto", "Éfeso", "Filipos"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "A palavra 'crescia e prevalecia' apesar da oposição em?",
    options: ["Roma", "Éfeso", "Antioquia", "Alexandria"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo disse 'Estou limpo do sangue de todos os homens' em?",
    options: ["Éfeso", "Corinto", "Roma", "Jerusalém"],
    correct: 0,
    audience: [20, 50, 20, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo disse 'Seja feita a vontade de Jeová' e foi para?",
    options: ["Roma", "Corinto", "Jerusalém", "Antioquia"],
    correct: 2,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo fez sua defesa jurídica diante de?",
    options: ["O imperador", "O governador Félix", "O Sinédrio", "O povo"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo apelou para César e foi enviado a?",
    options: ["Grécia", "Egito", "Roma", "Espanha"],
    correct: 2,
    audience: [10, 75, 10, 5]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo disse 'Nenhum de vocês morrerá' durante um?",
    options: ["Terremoto", "Naufrágio", "Incêndio", "Batalha"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Preso em Roma, Paulo continuou a pregar 'até a parte mais'?",
    options: ["Distante da terra", "Perto do templo", "Longe do mar", "Alta do céu"],
    correct: 0,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Os apóstolos foram 'homens comuns e sem instrução' que agiram com?",
    options: ["Cobiça", "Coragem", "Medo", "Preguiça"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Pedro foi libertado da prisão por um?",
    options: ["Soldado", "Anjo", "Amigo", "Sacerdote"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Timóteo foi fortalecido por Paulo em suas?",
    options: ["Viagens", "Doenças", "Pregações", "Visões"],
    correct: 0,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo e seus companheiros foram escoltados por um guarda em?",
    options: ["Roma", "Filipos", "Corinto", "Éfeso"],
    correct: 1,
    audience: [20, 50, 20, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Demétrio era um prateiro que se opôs a Paulo em?",
    options: ["Roma", "Éfeso", "Corinto", "Filipos"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo encarou seus inimigos com?",
    options: ["Medo", "Raiva", "Humildade", "Coragem"],
    correct: 2,
    audience: [10, 20, 50, 20]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Barnabé apresentou Saulo (Paulo) aos apóstolos em?",
    options: ["Roma", "Jerusalém", "Antioquia", "Corinto"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: " Marcos foi útil para Paulo em suas?",
    options: ["Viagens", "Doenças", "Visões", "Prisões"],
    correct: 0,
    audience: [15, 60, 15, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo teve que enfrentar hostilidade em?",
    options: ["Só Roma", "Várias cidades", "Só Jerusalém", "Só Corinto"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "A congregação cristã do primeiro século crescia mesmo com?",
    options: ["Paz", "Riqueza", "Perseguição", "Fama"],
    correct: 2,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo pregava 'publicamente e de casa em'?",
    options: ["Em casa", "Na praça", "Na rua", "No templo"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "O sobrinho de Paulo alertou sobre uma conspiração para matá-lo em?",
    options: ["Roma", "Jerusalém", "Corinto", "Éfeso"],
    correct: 1,
    audience: [20, 50, 20, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Cláudio Lísias protegeu Paulo de uma?",
    options: ["Doença", "Turba furiosa", "Inundação", "Fome"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Paulo orou no porão de um navio durante uma?",
    options: ["Calmaria", "Tempestade", "Noite escura", "Festa"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "A_Tickethickcia (Tabita) costurava roupas para os santos em?",
    options: ["Roma", "Jope", "Corinto", "Éfeso"],
    correct: 1,
    audience: [25, 45, 20, 10]
  },
  {
    book: 2,
    difficulty: "Médio",
    question: "Cornélio era um centurião romano que temia a Deus em?",
    options: ["Roma", "Cesareia", "Antioquia", "Corinto"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },

  // ============================================
  // LIVRO 3: DE TESTEMUNHO CABAL (DIFÍCIL)
  // 35 perguntas
  // ============================================
  {
    book: 3,
    difficulty: "Difícil",
    question: "Jesus disse: 'Vão e façam discípulos' em qual livro da Bíblia?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correct: 0,
    audience: [60, 15, 10, 15]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Os apóstolos receberam o espírito santo no dia de?",
    options: ["Páscoa", "Pentecostes", "Expiação", "Tabernáculos"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Os apóstolos foram presos por pregar e disseram: 'Temos de obedecer a'?",
    options: ["Aos homens", "A Deus como governante", "Ao imperador", "Aos sacerdotes"],
    correct: 1,
    audience: [5, 80, 10, 5]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Estêvão foi 'cheio de favor divino e de poder' e deu testemunho diante de?",
    options: ["O imperador", "O Sinédrio", "O povo", "Os soldados"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Filipe declarou 'as boas novas a respeito de Jesus' em qual cidade?",
    options: ["Jerusalém", "Samaria", "Roma", "Antioquia"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "O cruel perseguidor Saulo se tornou um ministro?",
    options: ["Fiel", "Zeloso", "Rico", "Famoso"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Deus não é parcial e aceitou gentios incircuncisos como?",
    options: ["Judeus", "Cristãos", "Sacerdotes", "Reis"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "A palavra de Jeová crescia mesmo com a?",
    options: ["Perseguição", "Paz", "Riqueza", "Fama"],
    correct: 0,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo e Barnabé foram 'cheios de alegria e de espírito' depois de?",
    options: ["Serem presos", "Serem expulsos", "Viajarem", "Dormirem"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo e Barnabé falaram 'com a autoridade de Jeová' em?",
    options: ["Listra", "Roma", "Corinto", "Filipos"],
    correct: 0,
    audience: [20, 50, 20, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "A questão da circuncisão foi levada ao corpo governante em?",
    options: ["Roma", "Jerusalém", "Antioquia", "Alexandria"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "O corpo governante chegou a uma decisão 'de comum acordo' sobre?",
    options: ["O batismo", "A circuncisão", "O João Batista", "A ceia"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Ministros viajantes 'fortaleciam as congregações' em suas?",
    options: ["Casas", "Viagens", "Reuniões", "Escolas"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo teve uma visão de um homem da Macedônia dizendo 'Venha para'?",
    options: ["A Ásia", "A Macedônia", "A África", "A Europa"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo 'raciocinou com eles usando as Escrituras' em Tessalônica e?",
    options: ["Roma", "Corinto", "Bereia", "Éfeso"],
    correct: 2,
    audience: [20, 30, 40, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo foi encorajado a 'buscar a Deus e realmente o achar' em?",
    options: ["Atenas", "Roma", "Corinto", "Jerusalém"],
    correct: 0,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo 'persistiu em falar e não ficou calado' em?",
    options: ["Roma", "Corinto", "Éfeso", "Filipos"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "A palavra 'crescia e prevalecia' apesar da oposição em?",
    options: ["Roma", "Éfeso", "Antioquia", "Alexandria"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo disse 'Estou limpo do sangue de todos os homens' em?",
    options: ["Éfeso", "Corinto", "Roma", "Jerusalém"],
    correct: 0,
    audience: [20, 50, 20, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo disse 'Seja feita a vontade de Jeová' e foi para?",
    options: ["Roma", "Corinto", "Jerusalém", "Antioquia"],
    correct: 2,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo fez sua defesa jurídica diante de?",
    options: ["O imperador", "O governador Félix", "O Sinédrio", "O povo"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo apelou para César e foi enviado a?",
    options: ["Grécia", "Egito", "Roma", "Espanha"],
    correct: 2,
    audience: [10, 75, 10, 5]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo disse 'Nenhum de vocês morrerá' durante um?",
    options: ["Terremoto", "Naufrágio", "Incêndio", "Batalha"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Preso em Roma, Paulo continuou a pregar 'até a parte mais'?",
    options: ["Distante da terra", "Perto do templo", "Longe do mar", "Alta do céu"],
    correct: 0,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Os apóstolos foram 'homens comuns e sem instrução' que agiram com?",
    options: ["Cobiça", "Coragem", "Medo", "Preguiça"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Pedro foi libertado da prisão por um?",
    options: ["Soldado", "Anjo", "Amigo", "Sacerdote"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Timóteo foi fortalecido por Paulo em suas?",
    options: ["Viagens", "Doenças", "Pregações", "Visões"],
    correct: 0,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo e seus companheiros foram escoltados por um guarda em?",
    options: ["Roma", "Filipos", "Corinto", "Éfeso"],
    correct: 1,
    audience: [20, 50, 20, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Demétrio era um prateiro que se opôs a Paulo em?",
    options: ["Roma", "Éfeso", "Corinto", "Filipos"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo encarou seus inimigos com?",
    options: ["Medo", "Raiva", "Humildade", "Coragem"],
    correct: 2,
    audience: [10, 20, 50, 20]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Barnabé apresentou Saulo (Paulo) aos apóstolos em?",
    options: ["Roma", "Jerusalém", "Antioquia", "Corinto"],
    correct: 1,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Marcos foi útil para Paulo em suas?",
    options: ["Viagens", "Doenças", "Visões", "Prisões"],
    correct: 0,
    audience: [15, 60, 15, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo teve que enfrentar hostilidade em?",
    options: ["Só Roma", "Várias cidades", "Só Jerusalém", "Só Corinto"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "A congregação cristã do primeiro século crescia mesmo com?",
    options: ["Paz", "Riqueza", "Perseguição", "Fama"],
    correct: 2,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo pregava 'publicamente e de casa em'?",
    options: ["Em casa", "Em casa", "Na rua", "No templo"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "O sobrinho de Paulo alertou sobre uma conspiração para matá-lo em?",
    options: ["Roma", "Jerusalém", "Corinto", "Éfeso"],
    correct: 1,
    audience: [20, 50, 20, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Cláudio Lísias protegeu Paulo de uma?",
    options: ["Doença", "Turba furiosa", "Inundação", "Fome"],
    correct: 1,
    audience: [10, 70, 10, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Paulo orou no porão de um navio durante uma?",
    options: ["Calmaria", "Tempestade", "Noite escura", "Festa"],
    correct: 1,
    audience: [10, 75, 10, 5]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Tabita (Dorcas) costurava roupas para os santos em?",
    options: ["Roma", "Jope", "Corinto", "Éfeso"],
    correct: 1,
    audience: [25, 45, 20, 10]
  },
  {
    book: 3,
    difficulty: "Difícil",
    question: "Cornélio era um centurião romano que temia a Deus em?",
    options: ["Roma", "Cesareia", "Antioquia", "Corinto"],
    correct: 1,
    audience: [15, 60, 15, 10]
  }
];

// Valores dos prêmios (30 níveis progressivos até R$1.000.000)
const PRIZE_VALUES = [
  1000,       // P1
  2000,       // P2
  3000,       // P3
  5000,       // P4
  10000,      // P5 (Patamar)
  15000,      // P6
  20000,      // P7
  25000,      // P8
  30000,      // P9
  50000,      // P10 (Patamar)
  60000,      // P11
  70000,      // P12
  80000,      // P13
  90000,      // P14
  100000,     // P15 (Patamar)
  120000,     // P16
  140000,     // P17
  160000,     // P18
  180000,     // P19
  200000,     // P20 (Patamar)
  230000,     // P21
  260000,     // P22
  300000,     // P23
  350000,     // P24
  400000,     // P25 (Patamar)
  450000,     // P26
  500000,     // P27
  600000,     // P28
  750000,     // P29
  1000000     // P30 (MILHÃO!)
];

// Patamares de segurança (índices)
const SAFE_LEVELS = [4, 9, 14, 19, 24]; // P5, P10, P15, P20, P25

// Total de questões por jogo
const QUESTIONS_PER_GAME = 30;
