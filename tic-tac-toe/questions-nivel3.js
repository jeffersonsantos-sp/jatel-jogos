// ============================================
// Banco de Perguntas - Nível 3
// 25 perguntas de "Profecia de Isaías — Uma Luz para Toda a Humanidade I"
// Fonte: https://www.jw.org/pt/biblioteca/livros/Profecia-de-Isa%C3%ADas-Uma-Luz-para-Toda-a-Humanidade-I/
// 25 perguntas de "Viva Tendo em Mente o Dia de Jeová"
// Fonte: https://www.jw.org/pt/biblioteca/livros/Viva-Tendo-em-Mente-o-Dia-de-Jeov%C3%A1/
// ============================================

const BIBLICAL_QUESTIONS_NIVEL3 = [
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 1 — Um profeta antigo com uma mensagem moderna (Isaías 1:1)",
    question: "O que significa o nome Isaías?",
    options: ["Salvação de Jeová","Servo fiel","Mensageiro da paz","Luz das nações"],
    correct: 0
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 2 — Um pai e seus filhos rebeldes (Isaías 1:2)",
    question: "Como Jeová preferiu se apresentar a Judá?",
    options: ["Como um rei poderoso","Como um pai que criou filhos que se rebelaram","Como um juiz severo","Como um pastor distante"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 3 — “Resolvamos as questões” (Isaías 1:18)",
    question: "Mesmo que os pecados fossem como escarlate, o que Jeová prometeu fazer?",
    options: ["Torná-los mais escarlates","Torná-los brancos como a neve","Escondê-los para sempre","Cobrá-los dos filhos"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 4 — A casa de Jeová se eleva (Isaías 2:4)",
    question: "O que as nações fariam com suas espadas e lanças?",
    options: ["Enterrariam para esconder","Transformariam em relhas de arado e podadeiras","Venderiam para a Assíria","Fundiriam em ídolos"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 5 — Jeová humilha os altivos (Isaías 2:11, 17)",
    question: "O que aconteceria aos altivos no dia de Jeová?",
    options: ["Seriam exaltados","Seriam humilhados, e somente Jeová seria exaltado","Receberiam riquezas","Seriam poupados por sua posição"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 6 — Jeová Deus tem misericórdia de um restante (Isaías 4:2-6)",
    question: "O que aconteceu em 537 AEC, cumprindo a profecia sobre um restante?",
    options: ["Jerusalém foi destruída","Um restante voltou do exílio em Babilônia para restaurar a adoração pura","O templo foi construído por Salomão","Israel foi dividido em dois reinos"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 7 — Ai do vinhedo infiel! (Isaías 5:1-2)",
    question: "O que o dono do vinhedo fez antes de esperar por bons frutos?",
    options: ["Apenas plantou e esperou","Cavou o terreno, removeu pedras, plantou uma videira escolhida e construiu uma torre e um lagar","Entregou o vinhedo a estranhos","Cercou o vinhedo com muros de ferro"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 8 — Jeová Deus está em seu santo templo (Isaías 6:1-2)",
    question: "O que Isaías viu em sua visão no templo?",
    options: ["Jeová num trono elevado, com serafins acima dele","Um exército de anjos no céu","O rei Uzias oferecendo sacrifícios","Uma cidade em chamas"],
    correct: 0
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 9 — Confie em Jeová diante de adversidades (Isaías 7:14)",
    question: "O que significa o nome Emanuel?",
    options: ["Príncipe da paz","Deus está conosco","Salvação de Jeová","Luz do mundo"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 10 — A promessa de um Príncipe da Paz (Isaías 9:6)",
    question: "Quais títulos foram dados ao menino que nasceria?",
    options: ["Rei Davi, Profeta, Sacerdote e Juiz","Conselheiro Maravilhoso, Deus Poderoso, Pai Eterno e Príncipe da Paz","Anjo de Jeová, Messias, Servo e Rei","Filho do Homem, Cordeiro, Leão e Pastor"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 11 — Ai dos rebeldes (1 Reis 12:28, 29)",
    question: "Qual foi o grande erro de Jeroboão?",
    options: ["Construir um templo em Jerusalém","Fazer dois bezerros de ouro e levar Israel à idolatria","Aliar-se a Judá","Proibir o sacerdócio"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 12 — ‘Não tenhas medo do assírio’ (Isaías 10:5-12)",
    question: "Como Jeová usaria a Assíria?",
    options: ["Como um aliado permanente de Israel","Como uma “vara” para disciplinar seu povo, mas depois pediria contas de sua arrogância","Como construtora do templo","Como protetora de Jerusalém"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 13 — Salvação e alegria sob o reinado do Messias (Isaías 11:1-2)",
    question: "De onde viria o Messias, segundo Isaías 11?",
    options: ["Do Egito","Do tronco de Jessé","Da Babilônia","Da casa de Saul"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 14 — Jeová humilhou uma cidade arrogante (Isaías 13:17)",
    question: "Que povo Jeová usaria para derrotar Babilônia?",
    options: ["Os egípcios","Os medos","Os filisteus","Os assírios"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 15 — O “conselho” de Jeová contra as nações (Isaías 16:14)",
    question: "O que Isaías profetizou sobre Moabe?",
    options: ["Que seria exaltado para sempre","Que dentro de três anos sua glória seria desonrada e restariam poucos sobreviventes","Que se tornaria aliado de Judá","Que nunca seria julgado"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 17 — “Babilônia caiu!” (Isaías 21:9)",
    question: "Que anúncio o vigia fez sobre Babilônia?",
    options: ["“Babilônia está em paz!”","“Babilônia caiu! Caiu!”","“Babilônia foi reconstruída!”","“Babilônia está cercada!”"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 18 — Lições a respeito de infidelidade (Isaías 22:8-11)",
    question: "Que erro os moradores de Jerusalém cometeram ao se preparar para o cerco?",
    options: ["Confiaram totalmente em Jeová","Fizeram medidas defensivas, mas não olharam para Jeová nem para o seu Criador","Abandonaram a cidade","Pediriam ajuda à Babilônia"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 19 — Jeová rebaixou o orgulho de Tiro (Isaías 23:15-18)",
    question: "Por quanto tempo Tiro seria “esquecida”?",
    options: ["7 anos","40 anos","70 anos","120 anos"],
    correct: 2
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 20 — Jeová é Rei (Isaías 24:23)",
    question: "O que aconteceria quando Jeová se tornasse Rei em Sião?",
    options: ["A lua e o sol seriam envergonhados, e Jeová reinaria em glória","As nações seriam destruídas para sempre","O templo seria reconstruído por Ciro","A Terra deixaria de existir"],
    correct: 0
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 21 — A mão de Jeová tornou-se elevada (Isaías 25:8)",
    question: "O que Jeová prometeu fazer com a morte?",
    options: ["Torná-la eterna","Engoli-la para sempre","Adiá-la por mil anos","Deixá-la apenas para os ímpios"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 22 — Isaías prediz o ‘ato estranho’ de Jeová (Isaías 28:16)",
    question: "Que pedra Jeová colocaria em Sião como fundamento?",
    options: ["Uma pedra preciosa sem valor","Uma pedra provada, um precioso canto de fundamento","Uma pedra de tropeço para todos","Uma pedra que seria destruída"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 23 — Fiquemos à espera de Jeová (Isaías 30:18)",
    question: "O que Isaías disse sobre Jeová nesse capítulo?",
    options: ["Que ele se cansaria de esperar","Que esperaria para mostrar favor, pois é um Deus de justiça","Que não se importaria com o seu povo","Que puniria sem esperança de retorno"],
    correct: 1
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 26 — “Nenhum residente dirá: ‘Estou doente’” (Isaías 33:24)",
    question: "Que promessa é registrada em Isaías 33:24?",
    options: ["Nenhum residente dirá: “Estou doente”; o povo será perdoado de seu erro","Todos adoecerão, mas serão curados","Só os reis terão saúde","A doença será a punição eterna"],
    correct: 0
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 28 — O Paraíso restaurado! (Isaías 35:5-6)",
    question: "Que milagres acompanhariam a restauração descrita em Isaías 35?",
    options: ["Os cegos veriam, os surdos ouviriam, os coxos saltariam e os mudos gritariam","Todos ficariam ricos","As montanhas seriam aplainadas","Os animais selvagens desapareceriam"],
    correct: 0
  },
  {
    category: "Profecia de Isaías I",
    reference: "Capítulo 30 — ‘Consolai o meu povo’ (Isaías 40:1-2)",
    question: "Que palavras de consolo Jeová mandou dizer a Jerusalém?",
    options: ["“O seu castigo nunca terminará”","“A sua guerra terminou, o seu erro foi perdoado”","“Fujam para o Egito”","“Reconstruam o templo imediatamente”"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 1 — Mensagens de Jeová para o passado e o presente",
    question: "A expressão “Profetas Menores” refere-se principalmente ao quê?",
    options: ["À menor importância de seus autores","Ao tamanho menor dos 12 livros","Ao número reduzido de profetas","Ao período mais curto em que atuaram"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 1 — Mensagens de Jeová para o passado e o presente",
    question: "Além de predizer o futuro, qual era o papel dos profetas de Jeová?",
    options: ["Apenas interpretar sonhos","Servir como porta-vozes para revelar a vontade de Deus","Governar como reis","Oficiar sacrifícios no templo"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 2 — Profetas cujas mensagens podem influir na nossa vida",
    question: "Quantos quilômetros, aproximadamente, Jonas viajou na direção oposta à sua designação?",
    options: ["900 km","1.800 km","3.500 km","5.000 km"],
    correct: 2
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 2 — Profetas cujas mensagens podem influir na nossa vida",
    question: "Qual era o trabalho de Amos antes de ser usado como profeta?",
    options: ["Sacerdote em Betel","Criador de ovelhas e riscador de figos de sicômoros","Carpinteiro em Nazaré","Escriba do rei Uzias"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 3 — O dia de Jeová — um assunto vital",
    question: "Segundo os profetas, o que é o dia de Jeová?",
    options: ["Um dia de festa para todas as nações","Um período em que Jeová executa julgamento contra seus inimigos","O dia da criação de Israel","Apenas o dia da vinda do Messias"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 3 — O dia de Jeová — um assunto vital",
    question: "Em que ano Jerusalém foi destruída pelos babilônios, marcando o dia de Jeová contra Judá?",
    options: ["740 AEC","607 AEC","537 AEC","1914 EC"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 4 — Jeová — o Deus que cumpre o que prediz",
    question: "O que significa o nome Jeová?",
    options: ["O Senhor é Deus","Ele Causa que Venha a Ser","Deus Todo-Poderoso","O Eterno"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 4 — Jeová — o Deus que cumpre o que prediz",
    question: "Quem revalidou o decreto de Ciro e apoiou a reconstrução do templo por volta de 520 AEC?",
    options: ["Dario, o Grande","Alexandre, o Grande","Nabucodonosor","Xerxes"],
    correct: 0
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 5 — ‘Procure a Jeová’ praticando a adoração que ele aprova",
    question: "Por que Jeová rejeitou Israel nos dias dos profetas?",
    options: ["Porque não ofereciam sacrifícios suficientes","Porque rejeitaram o conhecimento de Deus","Porque não tinham reis","Porque viviam no exílio"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 5 — ‘Procure a Jeová’ praticando a adoração que ele aprova",
    question: "O que significava a expressão “limpeza de dentes” nos dias de Amos?",
    options: ["Uma prática de higiene","Um sinal de fome e falta de alimento","Uma cerimônia religiosa","Um castigo sobre os animais"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 6 — “Haja tanta justiça como as águas de uma enchente” — uma chave para conhecer a Deus",
    question: "Segundo Miqueias 6:8, o que Jeová pede de nós?",
    options: ["Que exercitemos a justiça, amemos a benignidade e andemos modestamente com Deus","Que ofereçamos sacrifícios caros","Que construamos templos","Que jejuemos todos os dias"],
    correct: 0
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 6 — “Haja tanta justiça como as águas de uma enchente” — uma chave para conhecer a Deus",
    question: "Em Malaquias 3:5, que prática injusta é mencionada junto com feitiçaria, adultério e juramento falso?",
    options: ["Aceitar estrangeiros","Agir fraudulentamente com o salário do assalariado","Vender terras","Não pagar impostos ao rei"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 7 — Sirva a Jeová de acordo com seus elevados padrões",
    question: "O que Amos viu Jeová segurando em uma visão?",
    options: ["Uma espada","Um prumo","Uma balança","Um cajado"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 7 — Sirva a Jeová de acordo com seus elevados padrões",
    question: "O que o prumo na visão de Amos ajudava a mostrar?",
    options: ["A altura do templo","Se Israel ainda estava à altura dos padrões de Jeová","O número de profetas fiéis","A distância até a Assíria"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 8 — ‘O que Jeová pede de você?’",
    question: "O que caracteriza a pessoa que anda modestamente com Deus?",
    options: ["Achar que não precisa de orientação","Reconhecer suas limitações e buscar a orientação de Deus","Evitar todo contato com outros","Confiar apenas em si mesma"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 8 — ‘O que Jeová pede de você?’",
    question: "O que a pessoa modesta reconhece sobre o pecado?",
    options: ["Que o pecado não tem consequências","Que o pecado pode ser sedutor e escravizador","Que só os outros pecam","Que o pecado pode ser ignorado"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 9 — Trate os outros como Deus deseja que os tratemos",
    question: "Por que Jeová condenou Tiro?",
    options: ["Por não comerciar com Israel","Por entregar um grupo inteiro de exilados a Edom e não lembrar do pacto de irmãos","Por adorar no templo de Jerusalém","Por se recusar a construir navios"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 9 — Trate os outros como Deus deseja que os tratemos",
    question: "O que os edomitas fizeram quando Judá sofreu calamidade?",
    options: ["Ajudaram Judá","Alegraram-se com a desgraça de Judá","Permaneceram neutros","Enviaram alimento"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 10 — Contribua para uma vida familiar que agrada a Deus",
    question: "Como Jeová encara o divórcio?",
    options: ["Aprova quando há desentendimentos","Odia o divórcio e leva a sério o vínculo conjugal","Considera o casamento temporário","Deixa a decisão apenas aos anciãos"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 10 — Contribua para uma vida familiar que agrada a Deus",
    question: "Segundo Malaquias, o que ajuda o casal a manter um forte vínculo?",
    options: ["Guardar o próprio espírito e não agir traiçoeiramente","Evitar conversar sobre problemas","Passar mais tempo longe um do outro","Comparar o cônjuge com outras pessoas"],
    correct: 0
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 11 — Jeová deseja que as pessoas ganhem a vida eterna — você também?",
    question: "O que a reação de Jonas à misericórdia com Nínive revelou?",
    options: ["Que ele se importava mais com seus próprios sentimentos do que com a misericórdia e a vida das pessoas","Que ele não acreditava em Jeová","Que ele queria ser rei da Assíria","Que ele não havia pregado em Nínive"],
    correct: 0
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 11 — Jeová deseja que as pessoas ganhem a vida eterna — você também?",
    question: "Como a justiça e a misericórdia de Jeová se relacionam?",
    options: ["Opõem-se completamente","Complementam-se e contribuem para a salvação de vidas","A justiça anula a misericórdia","A misericórdia só se aplica a Israel"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 12 — ‘Continue na expectativa’",
    question: "O que Habacuque 2:3 diz sobre a visão profética?",
    options: ["Que ela já se cumpriu totalmente","Que, mesmo que se demore, devemos continuar na expectativa dela, pois se cumprirá sem falta","Que ninguém pode entendê-la","Que ela foi cancelada"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 13 — “Proclamai isto entre as nações”",
    question: "O que significa oferecer “os novilhos dos nossos lábios”?",
    options: ["Oferecer animais literais no altar","Oferecer a Jeová o melhor dos nossos lábios: palavras de louvor","Fazer votos de silêncio","Cantar apenas no templo"],
    correct: 1
  },
  {
    category: "Viva Tendo em Mente o Dia de Jeová",
    reference: "Capítulo 14 — “Uma bênção até que não haja mais necessidade”",
    question: "Que convite Jeová faz em Malaquias 3:10?",
    options: ["Que seu povo o experimente e veja se ele não abrirá as comportas dos céus","Que seu povo pare de contribuir","Que seu povo construa um novo templo","Que seu povo deixe Jerusalém"],
    correct: 0
  }
];
