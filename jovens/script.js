const situations = [
  // ============================================
  // SEÇÃO 1: INICIANDO CONVERSAS
  // ============================================
  // Lição 1: Interesse pelas pessoas
  {
    category: "Iniciando Conversas",
    situation: "Você toca a campainha e uma pessoa abre, mas está segurando o bebê que chora alto. Ela diz: 'Estou muito ocupada agora'.",
    choices: [
      { text: "Agradeço e pergunto se posso voltar em outro horário que seja melhor para ela.", consequence: "Demonstrar interesse pelo bem-estar dela abre portas. (Filipenses 2:3, 4)", points: 1 },
      { text: "Deixo uma revista e digo que é rápida, só para ela receber.", consequence: "Pressa não respeita o momento dela. (Tiago 1:19)", points: 0 },
      { text: "Comento que criar filho é difícil mesmo e começo a falar da Bíblia.", consequence: "Intrometer-se na vida pessoal sem permissão não é gentileza. (Provérbios 25:11)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Uma mulher mais velha abre a porta e parece animada. Ela diz: 'Ah, vocês são daquela religião que vai de casa em casa, não são?'",
    choices: [
      { text: "Sorrio e digo: 'Somos! E achamos que valia a pena vir ver como a senhora está.'", consequence: "Naturalidade e interesse pessoal são a base. (1 Tessalonicenses 2:8)", points: 1 },
      { text: "Respondo: 'Somos Testemunhas de Jeová e gostaríamos de apresentar uma mensagem bíblica.'", consequence: "Formal demais pode criar barreira. (1 Coríntios 9:22)", points: 0 },
      { text: "Digo: 'Na verdade, somos cristãos, não somos de nenhuma religião em particular.'", consequence: "Esconder a identidade não é franqueza. (João 18:37)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Um homem abre a porta e diz: 'Já tenho religião, obrigado'. Ele parece educado, mas já faz sinal de que vai fechar a porta.",
    choices: [
      { text: "Pergunto rapidamente: 'E a senhora tem achado consolo nas Escrituras Ultimamente?'", consequence: "Abrir uma pergunta genuína pode prender atenção. (Mateus 7:7)", points: 1 },
      { text: "Aceito e me despeço educadamente.", consequence: "Desistir rápido pode perder oportunidade. (Lucas 15:4)", points: 0 },
      { text: "Digo que a religião dele provavelmente não ensina a verdade toda.", consequence: "Críticas iniciais afastam pessoas. (2 Timóteo 2:24)", points: 0 }
    ]
  },
  // Lição 2: Naturalidade
  {
    category: "Iniciando Conversas",
    situation: "Um vizinho que você vê toda semana no supermercado te encontra quando você está na pregação. Ele sorri e diz: 'Ah, é você! Agora entendi por que anda sumido aos sábados'.",
    choices: [
      { text: "Riso e digo: 'É, sábado é meu dia de ajudar as pessoas. E você, tem feito algo interessante?'", consequence: "Naturalidade transforma um encontro casual em testemunho. (Romanos 12:13)", points: 1 },
      { text: "Fico sem jeito e mudo de assunto rapidamente.", consequence: "Falta de naturalidade perde oportunidade. (1 Pedro 3:15)", points: 0 },
      { text: "Começo a explicar por que o sábado é sagrado.", consequence: "Ir direto ao assunto semConnection parece robótico. (Provérbios 25:11)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Uma pessoa abre a porta e está assistindo televisão. Você ouve o barulho de um programa engraçado. Ela diz: 'Pode falar, estou ouvindo'.",
    choices: [
      { text: "Pergunto se ela gosta desse tipo de programa e depois mudo sutilmente para assuntos mais profundos.", consequence: "Conectar-se antes de ensinar é sábio. (1 Coríntios 9:22)", points: 1 },
      { text: "Começo a falar sobre a importância de guardar os olhos e ouvidos.", consequence: "Prédica imediata soa como julgamento. (Mateus 7:1)", points: 0 },
      { text: "Digo que não posso falar enquanto ela estiver com a televisão ligada.", consequence: "Dar ultimatos não é gentileza. (1 Pedro 3:15)", points: 0 }
    ]
  },
  // Lição 3: Bondade
  {
    category: "Iniciando Conversas",
    situation: "Você toca a campainha e uma mulher abre com os olhos vermelhos, como se tivesse chorado. Ela diz: 'Está tudo bem, pode falar'.",
    choices: [
      { text: "Pergunto com gentileza: 'A senhora está se sentindo bem? Posso ajudar em algo?'", consequence: "Demonstrar preocupação genuína é bondade cristã. (Romanos 12:15)", points: 1 },
      { text: "Começo a falar sobre a esperança que a Bíblia dá para quem sofre.", consequence: "Pré-assumir que ela precisa de consolo bíblico pode ser precipitado. (Jó 2:13)", points: 0 },
      { text: "Entrego uma revista sobre ansiedade e estresse.", consequence: "Material semConnection parece frio. (1 João 3:18)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Um homem grande e imponente abre a porta e cruza os braços. Ele pergunta: 'Vocês são para quê exatamente?'",
    choices: [
      { text: "Respondo com calma: 'Estamos aqui porque nos importamos com as pessoas da vizinhança. A senhora tem precisado de algo?'", consequence: "Serenidade diante de postura intimidadora mostra fé. (Provérbios 15:1)", points: 1 },
      { text: "Fico nervoso e começo a falar rápido sobre a organização.", consequence: "Pressa por nervosismo não é eficaz. (2 Timóteo 1:7)", points: 0 },
      { text: "Mantenho a postura firme e respondo que estamos ali para pregar a verdade.", consequence: "Confronto não é atitude cristã. (Filipenses 2:3)", points: 0 }
    ]
  },
  // Lição 4: Humildade
  {
    category: "Iniciando Conversas",
    situation: "Um professor de filosofia abre a porta e diz: 'Já estudei todas as religiões e sei mais que vocês. O que podem me ensinar?'",
    choices: [
      { text: "Digo: 'Fascinante! E qual foi a sua conclusão pessoal sobre o sentido da vida?'", consequence: "Humildade e interesse abrem portas. (Atos 17:23)", points: 1 },
      { text: "Respondo: 'Sabedoria humana não se compara ao que a Bíblia revela.'", consequence: "Arrogância espiritual afasta. (1 Coríntios 8:1)", points: 0 },
      { text: "Pergunto: 'E sobre a origem da vida, o que o senhor acha?'", consequence: "Pergunta boa, mas semConnection com a abertura dele. (Provérbios 18:13)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Uma mulher pergunta: 'Se a religião de vocês é a certa, por que tem tanta desgraça no mundo?'",
    choices: [
      { text: "Pergunto: 'Essa é uma excelente pergunta. A senhora já pensou no que a Bíblia diz sobre isso?'", consequence: "Transformar a crítica em oportunidade de ensino é sábio. (1 Pedro 3:15)", points: 1 },
      { text: "Explico logo de cara sobre a permissão de Deus e Satanás.", consequence: "Ir direto ao assunto sem ouvir pode parecer indiferente. (Tiago 1:19)", points: 0 },
      { text: "Respondo: 'Isso acontece porque as pessoas não seguem os mandamentos de Deus.'", consequence: "Julgar as pessoas não é gentileza. (Mateus 7:1)", points: 0 }
    ]
  },
  // Lição 5: Tato
  {
    category: "Iniciando Conversas",
    situation: "Uma pessoa abre a porta e você percebe que ela está com marcas de violência no rosto. Ela diz: 'Estou bem, pode falar'.",
    choices: [
      { text: "Converso com gentileza e, antes de ir, deixo um cartão com números de ajuda e digo que Deus se importa com ela.", consequence: "Tato e cuidado prático são amor. (Tiago 2:15, 16)", points: 1 },
      { text: "Começo a falar sobre o que a Bíblia diz sobre violência doméstica.", consequence: "Falar sobre o problema dela semConnection pode machucar. (Efésios 4:29)", points: 0 },
      { text: "Ignoro as marcas e sigo normalmente com a mensagem.", consequence: "Fingir que não viu não é empatia. (Mateus 25:35, 36)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Uma pessoa mais jovem abre a porta usando roupas que você considera inadequadas. Ela sorri e pergunta: 'O que vocês estão pregando hoje?'",
    choices: [
      { text: "Respondo com um sorriso e ofereço uma revista com um artigo que pode interessá-la.", consequence: "Focar na mensagem, não na aparência, é correto. (1 Samuel 16:7)", points: 1 },
      { text: "Faço um comentário discreto sobre a importância de se vestir com modéstia.", consequence: "Crítica à aparência não é tato. (Efésios 4:29)", points: 0 },
      { text: "Fico sem jeito e mudo de assunto.", consequence: "Desconforto próprio não deve impedir o testemunho. (2 Timóteo 1:7)", points: 0 }
    ]
  },
  // Lição 6: Coragem
  {
    category: "Iniciando Conversas",
    situation: "Você está em uma rua movimentada e vê uma pessoa sentada no banco, parecendo triste e solitária. Você sente um medo inexplicável de se aproximar.",
    choices: [
      { text: "Oro rapidamente em pensamento e me aproximo oferecendo uma revista com um artigo sobre superar tristeza.", consequence: "Coragem vem de confiar em Jeová. (Salmo 56:11)", points: 1 },
      { text: "Passo reto, pois ela pode não querer ser incomodada.", consequence: "Presunção de que não quer falar pode ser errada. (Mateus 25:35)", points: 0 },
      { text: "Entrego a revista sem parar, sem dizer nada.", consequence: "Falar semConnection não é eficaz. (1 Pedro 3:15)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Você toca a campainha e um homem abre e grita: 'Não quero nada com religião! Sai da minha porta!'",
    choices: [
      { text: "Mantenho a calma, deixo um folheto no_DRIVE e digo: 'Tudo bem, fico feliz que a porta estivesse aberta.'", consequence: "Responder com mansidão ao agressor é forte testemunho. (Romanos 12:17, 21)", points: 1 },
      { text: "Respondo: 'Não precisa ser grosso, estou só fazendo meu trabalho.'", consequence: "Defender-se não é mansidão. (Provérbios 15:1)", points: 0 },
      { text: "Fico com raiva e comento alto: 'Coitado de quem mora aqui.'", consequence: "Retribuir maldade com maldade não é cristão. (1 Pedro 3:9)", points: 0 }
    ]
  },

  // ============================================
  // SEÇÃO 2: CULTIVANDO O INTERESSE
  // ============================================
  // Lição 7: Perseverança
  {
    category: "Cultivando o Interesse",
    situation: "Há 8 meses você visita uma pessoa que sempre diz que não tem tempo. Uma vez ela aceitou uma revista, mas nunca leu. Hoje ela abre a porta e diz: 'Ah, é você de novo'.",
    choices: [
      { text: "Digo: 'Sim! Vim trazer algo novo que pode interessar a senhora.' Ofereço uma revista diferente da última.", consequence: "Perseverança criativa mantém a porta aberta. (Gálatas 6:9)", points: 1 },
      { text: "Pergunto: 'A senhora leu a revista que deixei?'", consequence: "Pressionar sobre algo que ela não fez pode criar constrangimento. (Provérbios 25:11)", points: 0 },
      { text: "Fico animado e começo a insistir que ela aceite estudar a Bíblia.", consequence: "Pressão afasta pessoas. (1 Coríntios 3:6)", points: 0 }
    ]
  },
  {
    category: "Cultivando o Interesse",
    situation: "Um interessado marcou um estudo, mas cancelou nas últimas horas. Isso já aconteceu três vezes. Ele diz: 'Desculpa, é que estou muito ocupado'.",
    choices: [
      { text: "Digo: 'Sem problemas! Quando for bom para você, me avise.' E deixo um material para ele ler.", consequence: "Paciência semressentimento é sábio. (2 Timóteo 2:24)", points: 1 },
      { text: "Pergunto: 'Mas o senhor realmente quer estudar ou prefiro não voltar?'", consequence: "Dar ultimato pode afastar definitivamente. (Lucas 15:4)", points: 0 },
      { text: "Aceito, mas fico visivelmente frustrado.", consequence: "Mostrar frustração machuca o vínculo. (Efésios 4:26)", points: 0 }
    ]
  },
  // Lição 8: Paciência
  {
    category: "Cultivando o Interesse",
    situation: "Seu estudo Bíblico é com uma pessoa idosa que tem dificuldade de entender conceitos novos. Você já explicou a mesma coisa cinco vezes.",
    choices: [
      { text: "Volto a explicar com outras palavras e exemplos diferentes, com um sorriso.", consequence: "Paciência é amor em ação. (2 Timóteo 2:24)", points: 1 },
      { text: "Digo: 'Já expliquei isso várias vezes, a senhora não está prestando atenção.'", consequence: "Reclamar machuca. (Efésios 4:29)", points: 0 },
      { text: "Acelero o ritmo para cobrir mais material, mesmo que ela não entenda.", consequence: "Pressa não produz aprendizado. (Tiago 1:19)", points: 0 }
    ]
  },
  // Lição 9: Empatia
  {
    category: "Cultivando o Interesse",
    situation: "Uma mulher que você estuda chorou durante a última aula e não compareceu hoje. Seu marido abre a porta e diz: 'Ela não está bem. Não venha mais'.",
    choices: [
      { text: "Digo: 'Entendo. Posso deixar algo que talvez a ajude? Só isso.' E deixo uma revista com um artigo sobre encorajamento.", consequence: "Empatia e gentileza permanecem mesmo quando somos rejeitados. (Romanos 12:15)", points: 1 },
      { text: "Insisto: 'Se eu pudesse falar com ela, ela ficaria melhor.'", consequence: "Desrespeitar o pedido do marido não é gentileza. (Mateus 7:12)", points: 0 },
      { text: "Fico irritado e digo que ela que está perdendo a oportunidade.", consequence: "Irresponsabilidade não é atitude cristã. (2 Timóteo 2:24)", points: 0 }
    ]
  },
  {
    category: "Cultivando o Interesse",
    situation: "Um homem que você estuda diz: 'Eu acredito em Deus, mas a Bíblia foi escrita por homens. Como posso confiar?'",
    choices: [
      { text: "Reconheço a honestidade dele e sugiro que pesquisemos juntos evidências históricas e proféticas.", consequence: "Levar as dúvidas a sério mostra respeito. (Atos 17:11)", points: 1 },
      { text: "Respondo: 'Se a Bíblia não fosse de Deus, ela não teria sobrevivido por tanto tempo.'", consequence: "Argumento fraco pode não convencê-lo. (1 Pedro 3:15)", points: 0 },
      { text: "Digo: 'O importante é que ela traz paz.'", consequence: "Evitar a pergunta não resolve. (1 Pedro 3:15)", points: 0 }
    ]
  },

  // ============================================
  // SEÇÃO 3: FAZENDO DISCÍPULOS
  // ============================================
  // Lição 10: Senso de compromisso
  {
    category: "Fazendo Discípulos",
    situation: "Um estudante Bíblico quer se batizar, mas nunca compareceu a uma reunião e não tem amizade com os irmãos.",
    choices: [
      { text: "Converso sobre a importância de fazer parte da congregação para crescer espiritualmente.", consequence: "Compromisso com o corpo cristão é essencial. (Hebreus 10:24, 25)", points: 1 },
      { text: "Apoio o batismo, pois ele acredita em Deus.", consequence: "Batismo sem compromisso comunitário é precipitado. (Atos 8:36, 37)", points: 0 },
      { text: "Deixo de estudar com ele, pois ele não está sério.", consequence: "Desistir pode perder uma pessoa. (Lucas 15:4)", points: 0 }
    ]
  },
  {
    category: "Fazendo Discípulos",
    situation: "Sua estudante Bíblica começa a comparecer às reuniões, mas no trabalho ela continua fingindo que não é Testemunha de Jeová.",
    choices: [
      { text: "Converso com ela sobre a importância de ser autêntica em todos os lugares.", consequence: "Integridade em todas as situações é essencial. (Mateus 5:16)", points: 1 },
      { text: "Não me intrometo, pois é assunto dela.", consequence: "Ignorar pode impedir seu crescimento. (Gálatas 6:1)", points: 0 },
      { text: "Falo na frente dos outros para ela não esconder a fé.", consequence: "Constranger não é atitude cristã. (Mateus 18:15)", points: 0 }
    ]
  },
  // Lição 11: Simplicidade
  {
    category: "Fazendo Discípulos",
    situation: "Um homem com pouco estudo Bíblico pergunta: 'Se Deus é amor, por que Ele permite o sofrimento?'",
    choices: [
      { text: "Uso uma analogia simples: 'Seus pais o amam, mas deixam que você tome decisões. Da mesma forma, Deus respeita nosso livre-arbítrio.'", consequence: "Simplicidade facilita o aprendizado. (Mateus 13:10-13)", points: 1 },
      { text: "Explico sobre Satanás, Adão e Eva, e o propósito de Deus em 20 minutos.", consequence: "Sobrecarregar de informação confunde. (1 Coríntios 2:1, 2)", points: 0 },
      { text: "Digo: 'Essa é uma pergunta muito complexa, talvez seja melhor estudarmos isso depois.'", consequence: "Evitar a pergunta perde oportunidade. (1 Pedro 3:15)", points: 0 }
    ]
  },
  {
    category: "Fazendo Discípulos",
    situation: "Uma jovem que você estuda quer saber por que a organização tem regras sobre regulagem de nascimento.",
    choices: [
      { text: "Explico de forma simples, mencionando que a Bíblia nos ensina a pensar no futuro e ser responsável.", consequence: "Simplicidade e respeito são importantes. (Provérbios 22:3)", points: 1 },
      { text: "Falo sobre lealdade à organização e obediência.", consequence: "Focar em organização em vez da pessoa pode afastar. (1 Coríntios 3:6)", points: 0 },
      { text: "Fujo do assunto, pois é delicado.", consequence: "Evitar a verdade não ajuda. (João 8:32)", points: 0 }
    ]
  },
  // Lição 12: Franqueza
  {
    category: "Fazendo Discípulos",
    situation: "Um interessado que você estuda há um ano diz: 'Eu gosto de vocês, mas não quero deixar minha religião atual. Posso continuar estudando?'",
    choices: [
      { text: "Respondo: 'Claro! Estudar a Bíblia é sempre bom, independentemente da decisão que o senhor tomar.'", consequence: "Franqueza compressa abre caminho. (João 8:32)", points: 1 },
      { text: "Digo: 'Sim, mas o senhor precisa decidir logo, pois a verdade é urgente.'", consequence: "Pressa pode causar ansiedade desnecessária. (1 Coríntios 3:6)", points: 0 },
      { text: "Fico desanimado e diminuo a frequência das visitas.", consequence: "Desânimo perde oportunidades. (Gálatas 6:9)", points: 0 }
    ]
  },
  {
    category: "Fazendo Discípulos",
    situation: "Um estudo Bíblico se irrita quando vocês falam sobre os anciãos e diz: 'Eu não preciso de ninguém para me dizer o que fazer'.",
    choices: [
      { text: "Respondo: 'Entendo sua frustração. Podemos falar sobre o que a Bíblia diz sobre orientação espiritual?'", consequence: "Reconhecer o sentimento e redirecionar é sábio. (Provérbios 15:1)", points: 1 },
      { text: "Digo: 'A Bíblia mostra que precisamos de anciãos para nos proteger.'", consequence: "Argumento pode parecer impositivo. (2 Timóteo 2:24)", points: 0 },
      { text: "Concordo que ele não precisa de ninguém e mudo de assunto.", consequence: "Concordar com erro pode prejudicá-lo. (Efésios 5:15)", points: 0 }
    ]
  },

  // ============================================
  // SERVIÇO DE CASA EM CASA
  // ============================================
  {
    category: "Casa em Casa",
    situation: "Você toca a campainha e uma mulher abre, mas está ao telefone. Ela faz sinal para esperar. Você ouve uma conversa tensa.",
    choices: [
      { text: "Espero pacientemente e, quando ela desliga, pergunto se está tudo bem.", consequence: "Paciência e empatia abrem portas. (Tiago 1:19)", points: 1 },
      { text: "Faço barulho com os pés para apressá-la.", consequence: "Falta de respeito não é atitude cristã. (Filipenses 2:3)", points: 0 },
      { text: "Vou embora, pois ela não pode falar agora.", consequence: "Pressa perde oportunidades. (Lucas 15:4)", points: 0 }
    ]
  },
  {
    category: "Casa em Casa",
    situation: "Uma família abre a porta. O pai parece interessado, mas a mãe diz: 'Não queremos nada com essa religião. Fomos maltratados no passado'.",
    choices: [
      { text: "Respondo: 'Sinto muito por isso. A senhora tem razão em ter cuidado. Posso deixar algo para ler no seu tempo?'", consequence: "Reconhecer a dor dela e respeitar o tempo é gentileza. (Efésios 4:32)", points: 1 },
      { text: "Digo: 'Essa religião é diferente, não se preocupe.'", consequence: "Minimizar a dor dela não é empatia. (Romanos 12:15)", points: 0 },
      { text: "Foco apenas no pai, que parece interessado.", consequence: "Ignorar a opinião da mãe pode causar conflito familiar. (Efésios 5:25)", points: 0 }
    ]
  },
  {
    category: "Casa em Casa",
    situation: "Você está no serviço de casa em casa e uma criança de uns 10 anos abre a porta sozinha. Ela diz: 'Mamãe não está em casa'.",
    choices: [
      { text: "Digo: 'Tudo bem. Quando ela voltar, diga que umas pessoas legais passaram aqui.' Deixo um convite.", consequence: "Cuidado com crianças e respeito à segurança é prioridade. (Mateus 19:14)", points: 1 },
      { text: "Entro e espero a mãe voltar.", consequence: "Entrar na casa de menor sozinho não é seguro nem correto. (Provérbios 22:3)", points: 0 },
      { text: "Pergunto a_endereço da escola dela para encontrar a mãe.", consequence: "Intrometer-se na vida da família não é correto. (Provérbios 25:11)", points: 0 }
    ]
  },
  {
    category: "Casa em Casa",
    situation: "Você toca a campainha e um homem abre e diz: 'Eu sou ateu, mas posso ouvir o que você tem a dizer. Só não venha com textos bíblicos'.",
    choices: [
      { text: "Aceito o desafio e começo perguntando o que ele acha sobre amor, justiça e propósito da vida.", consequence: "Encontrar pontos comuns antes de ensinar é sábio. (Atos 17:23)", points: 1 },
      { text: "Digo que sem a Bíblia não posso falar de nada.", consequence: "Ultimato fecha a porta. (1 Coríntios 9:22)", points: 0 },
      { text: "Respondo que ateus estão perdidos e precisam de Deus.", consequence: "Julgar não é gentileza. (2 Timóteo 2:24)", points: 0 }
    ]
  },

  // ============================================
  // TESTEMUNHO PÚBLICO
  // ============================================
  {
    category: "Testemunho Público",
    situation: "Em uma praça, uma pessoa se aproxima e diz: 'Eu sou budista e acredito em reencarnação. O que vocês têm a dizer sobre isso?'",
    choices: [
      { text: "Pergunto: 'E como a reencarnação ajuda a senhora a lidar com os problemas do dia a dia?'", consequence: "Perguntar antes de ensinar mostra respeito. (Atos 17:23)", points: 1 },
      { text: "Respondo logo que reencarnação não existe e a Bíblia fala da ressurreição.", consequence: "Contradizer semConnection parece desrespeitoso. (2 Timóteo 2:24)", points: 0 },
      { text: "Digo: 'Não sei falar sobre isso, posso deixar uma revista?'", consequence: "Evitar a pergunta perde oportunidade. (1 Pedro 3:15)", points: 0 }
    ]
  },
  {
    category: "Testemunho Público",
    situation: "Um jovem se aproxima com um grupo de amigos e diz: 'Olha, galera, é aquela religião que não deixa ninguém beber nada!'",
    choices: [
      { text: "Sorrio e digo: 'É verdade que temos restrições, mas é porque nos importamos com nossa saúde. E vocês, o que acham disso?'", consequence: "Reconhecer com humor e fazer pergunta desarma o grupo. (1 Pedro 3:15)", points: 1 },
      { text: "Respondo: 'Não é bem assim, vocês estão enganados.'", consequence: "Contradizer na frente dos amigos pode causar mais zombaria. (Provérbios 15:1)", points: 0 },
      { text: "Ignoro e continuo meu trabalho.", consequence: "Deixar de responder pode parecer covardia. (Mateus 5:16)", points: 0 }
    ]
  },
  {
    category: "Testemunho Público",
    situation: "Chove levemente e você está em uma praça. Uma pessoa corre passando e grita: 'Deixa isso, Deus não existe!'",
    choices: [
      { text: "Guardo a revista no bolso, oro por ela e continuo o serviço quando parar de chover.", consequence: "Perseverança mesmo sem resultado visível é fé. (1 Coríntios 3:6)", points: 1 },
      { text: "Grito de volta: 'Ele existe sim!'", consequence: "Discussão à distância não é eficaz. (2 Timóteo 2:24)", points: 0 },
      { text: "Volto para casa, pois o dia está ruim.", consequence: "Desistir por dificuldade enfraquece. (Gálatas 6:9)", points: 0 }
    ]
  },
  {
    category: "Testemunho Público",
    situation: "Uma mulher com uma Criança no colo se aproxima e diz: 'Eu não tenho tempo para ouvir, mas queria algo para ler que desse esperança'.",
    choices: [
      { text: "Ofereço a revista com o artigo mais adequado e digo: 'Espero que isso ajude. Se quiser conversar, estou aqui.'", consequence: "Atender à necessidade específica é amor. (1 João 3:18)", points: 1 },
      { text: "Entrego várias revistas para ela ter opções.", consequence: "Sobrecarregar pode confundir. (Provérbios 25:11)", points: 0 },
      { text: "Pergunto: 'Mas por que a senhora precisa de esperança?'", consequence: "Perguntar quando ela não tem tempo não é gentileza. (Efésios 5:15, 16)", points: 0 }
    ]
  },

  // ============================================
  // TESTEMUNHO INFORMAL
  // ============================================
  {
    category: "Testemunho Informal",
    situation: "No trabalho, um colega pergunta: 'Por que vocês não comemoram Natal? Todo mundo comemora, isso não é exagero?'",
    choices: [
      { text: "Respondo: 'Boa pergunta! Você já pensou de onde veio essa tradição?' E mudo para um assunto mais amplo.", consequence: "Transformar pergunta em oportunidade de ensino é sábio. (1 Pedro 3:15)", points: 1 },
      { text: "Respondo: 'É porque a Bíblia proíbe.'", consequence: "Resposta seca semConnection parece dogmática. (Provérbios 25:11)", points: 0 },
      { text: "Mudo de assunto, pois não quero falar disso no trabalho.", consequence: "Evitar perde oportunidade. (Mateus 5:16)", points: 0 }
    ]
  },
  {
    category: "Testemunho Informal",
    situation: "Em um transporte público, o motorista pergunta: 'Vocês são da mesma religião daqueles que ficam na esquina com placas?'",
    choices: [
      { text: "Riso e digo: 'Somos sim! Mas hoje estou aqui como passageiro. A senhora já parou para pensar no que a Bíblia diz sobre o futuro?'", consequence: "Humor e transição natural são eficazes. (Atos 8:30, 31)", points: 1 },
      { text: "Digo: 'Não, somos Testemunhas de Jeová, é diferente.'", consequence: "Corrigir semConnection pode parecer arrogante. (1 Coríntios 9:22)", points: 0 },
      { text: "Respondo que sim e fico em silêncio.", consequence: "Falta de iniciativa perde oportunidade. (1 Pedro 3:15)", points: 0 }
    ]
  },
  {
    category: "Testemunho Informal",
    situation: "Um vizinho mais velho pede conselhos sobre como lidar com a solidão após a morte da esposa.",
    choices: [
      { text: "Ouço com empatia e compartilo a esperança da ressurreição, mas sem pressa.", consequence: "Empatia antes de ensinar é amor. (Romanos 12:15)", points: 1 },
      { text: "Digo logo: 'Sua esposa vai ressuscitar e vocês se verão de novo.'", consequence: "Consolo semConnection pode parecer frio. (Jó 2:13)", points: 0 },
      { text: "Recomendo que ele procure um psicólogo.", consequence: "Evolver profissional não é ruim, mas você também pode ajudar. (Tiago 2:15, 16)", points: 0 }
    ]
  },
  {
    category: "Testemunho Informal",
    situation: "Em uma conversa com amigos, alguém diz: 'Religião é coisa do passado. Hoje em dia, cada um acredita no que quer'.",
    choices: [
      { text: "Pergunto: 'E você acha que acreditar no que quer traz paz duradoura?'", consequence: "Pergunta reflexiva abre espaço para conversa. (Atos 17:23)", points: 1 },
      { text: "Respondo: 'Mas a verdade é uma só e não depende de opinião.'", consequence: "Afirmar semConnection pode parecer intolerante. (1 Pedro 3:15)", points: 0 },
      { text: "Concordo para não gerar conflito no grupo.", consequence: "Concordar com erro não é bom testemunho. (Mateus 5:16)", points: 0 }
    ]
  },

  // ============================================
  // SITUAÇÕES DE COMPANHEIRISMO E PREPARO
  // ============================================
  {
    category: "Preparo",
    situation: "Seu companheiro de pregação começa a usar argumentos políticos para convencer um morador, em vez de textos bíblicos.",
    choices: [
      { text: "Na próxima pausa, converso sobre a importância de usar a Bíblia como base.", consequence: "Corrigir com amor preserva a união. (Gálatas 6:1)", points: 1 },
      { text: "Interrompo e começo a falar eu, usando textos bíblicos.", consequence: "Intrometer-se na frente do morador constrange o companheiro. (Efésios 4:25, 26)", points: 0 },
      { text: "Deixo passar, pois ele sabe o que está fazendo.", consequence: "Ignorar o erro pode causar problemas. (2 Timóteo 2:24)", points: 0 }
    ]
  },
  {
    category: "Preparo",
    situation: "Você chega ao ponto de encontro para sair com o companheiro e ele não aparece. Já faz 15 minutos.",
    choices: [
      { text: "Começo a pregar sozinho no território mais próximo e depois combinamos.", consequence: "Usar o tempo com sabedoria é sábio. (Efésios 5:15, 16)", points: 1 },
      { text: "Volto para casa, pois não posso perder tempo.", consequence: "Desistir por atraso enfraquece o serviço. (1 Coríntios 15:58)", points: 0 },
      { text: "Ligo irritado e reclamo do atraso.", consequence: "Irritação não é atitude cristã. (Efésios 4:26)", points: 0 }
    ]
  },
  {
    category: "Preparo",
    situation: "Um irmão mais experiente quer ir com você na pregar, mas ele tem dificuldade em andar e você precisa ir devagar.",
    choices: [
      { text: "Aceito e ajusto o ritmo, aproveitando para aprender com sua experiência.", consequence: "Adaptar-se e respeitar é amor. (Filipenses 2:3, 4)", points: 1 },
      { text: "Recuso educadamente, pois quero cobrir mais território.", consequence: "Priorizar quantidade sobre qualidade não é bom. (Lucas 15:4)", points: 0 },
      { text: "Aceito, mas fico reclamando baixinho sobre o ritmo.", consequence: "Reclamar desagrada a Deus. (Filipenses 2:14)", points: 0 }
    ]
  },
  {
    category: "Preparo",
    situation: "Você preparou uma apresentação para uma revisita, mas quando chega, a pessoa quer falar sobre um assunto totalmente diferente.",
    choices: [
      { text: "Abandono o material e escuto a necessidade dela, oferecendo o que posso com a Bíblia.", consequence: "Flexibilidade é sábia no ministério. (Mateus 9:12, 13)", points: 1 },
      { text: "Insisto no material que preparei, pois levei tempo.", consequence: "Rigidez perde oportunidades. (1 Coríntios 9:22)", points: 0 },
      { text: "Fico frustrado, pois meu trabalho foi desperdiçado.", consequence: "Frustração não deve afetar o serviço. (Colossenses 3:23)", points: 0 }
    ]
  },
  {
    category: "Preparo",
    situation: "Seu companheiro de pregação faz uma piada imprópria com o morador e ri alto.",
    choices: [
      { text: "Não ri e, na saída, converso sobre a importância de manter a dignidade.", consequence: "Corrigir em particular é sábio. (Mateus 18:15)", points: 1 },
      { text: "Rio junto para não constranger o companheiro.", consequence: "Aprovar o errado não é correto. (Efésios 5:4)", points: 0 },
      { text: "Critico na frente do morador para mostrar que não concordo.", consequence: "Expor o companheiro não é atitude cristã. (Filipenses 2:3)", points: 0 }
    ]
  },

  // ============================================
  // SITUAÇÕES DE PERSEVERANÇA E RETORNO
  // ============================================
  {
    category: "Perseverança",
    situation: "Uma pessoa que você estudou há 3 anos, que parou de estudar, aparece na reunião e diz: 'Eu voltei porque me lembrei das suas palavras'.",
    choices: [
      { text: "Acolho ela com alegria e a apresento para os irmãos.", consequence: "Alegria pelo retorno é atitude cristã. (Lucas 15:7)", points: 1 },
      { text: "Pergunto: 'Por que a senhora demorou tanto?'", consequence: "Cobrar não é gentileza. (Efésios 4:29)", points: 0 },
      { text: "Fico desconfiado, pois ela já voltou antes e parou de novo.", consequence: "Desconfiança machuca. (1 Coríntios 13:7)", points: 0 }
    ]
  },
  {
    category: "Perseverança",
    situation: "Você está muito desanimado com o ministério porque nenhum dos seus estudos está progredindo.",
    choices: [
      { text: "Converso com um irmão maduro e peço oração.", consequence: "Buscar ajuda é sábio. (Eclessiastes 4:9, 10)", points: 1 },
      { text: "Continuo o serviço sem contar para ninguém como me sinto.", consequence: "Guardar sozido pode ser perigoso. (Provérbios 18:1)", points: 0 },
      { text: "Dou um tempo na pregação para recuperar as energias.", consequence: "Afastar-se pode ser arriscado. (Hebreus 10:25)", points: 0 }
    ]
  },
  {
    category: "Perseverança",
    situation: "Um interessado que você visitou há muito tempo liga para você e diz: 'Eu quero estudar a Bíblia. Pode voltar?'",
    choices: [
      { text: "Março imediatamente um horário e agradeço por ela ter ligado.", consequence: "Aproveitar a oportunidade é sábio. (Mateus 9:37, 38)", points: 1 },
      { text: "Digo que vou pensar e depois ligo de volta.", consequence: "Adiar pode fazer perder o momento. (2 Coríntios 6:2)", points: 0 },
      { text: "Pergunto: 'Por que a senhora mudou de ideia?'", consequence: "Perguntar pode ser bom, mas responders é urgente. (Mateus 9:37, 38)", points: 0 }
    ]
  },
  {
    category: "Perseverança",
    situation: "Um estudo Bíblico que estava progredindo muito开始a faltar e diz que está 'sem tempo'.",
    choices: [
      { text: "Vou à casa dele sem estudo, só para demonstrar interesse pessoal.", consequence: "Manter o vínculo é mais importante que o conteúdo. (1 Tessalonicenses 2:8)", points: 1 },
      { text: "Envio uma mensagem perguntando se está tudo bem e deixo material.", consequence: "Manter contato sem pressão é gentileza. (1 Tessalonicenses 2:17)", points: 0 },
      { text: "Deixo de visitar, pois ele não está comprometido.", consequence: "Desistir pode perder uma pessoa. (Lucas 15:4)", points: 0 }
    ]
  },
  {
    category: "Perseverança",
    situation: "Você sente que não está preparado o suficiente para pregar e por isso está evitando o ministério.",
    choices: [
      { text: "Estudo um pouco mais e começo a pregar mesmo com medo, confiando em Jeová.", consequence: "Ação mesmo com medo é coragem. (Josué 1:9)", points: 1 },
      { text: "Espero me sentir 100% preparado antes de sair.", consequence: "Perfeccionismo paralisa. (Eclesiastes 11:4)", points: 0 },
      { text: "Peço para outro irmão fazer meu serviço.", consequence: "Delegar sem motivo não é responsável. (Efésios 4:12)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Você toca a campainha e um homem abre e diz: 'Estou almoçando, pode ser rápido?'",
    choices: [
      { text: "Digo: 'Claro! Só queria deixar algo que pode interessar a senhora.' Deixo uma revista e me despeço.", consequence: "Respeitar o tempo dele é gentileza. (Efésios 5:15, 16)", points: 1 },
      { text: "Insisto: 'Só um minutinho, é muito importante.'", consequence: "Pressionar quando a pessoa tem pressa não é gentileza. (Tiago 1:19)", points: 0 },
      { text: "Entro e começo a falar, pois ele disse que pode ser rápido.", consequence: "Interpretar mal o que ele disse não é sábio. (Provérbios 25:11)", points: 0 }
    ]
  },
  {
    category: "Iniciando Conversas",
    situation: "Uma mulher abre a porta e você percebe que ela tem um adesivo de outra religião no portão.",
    choices: [
      { text: "Não comento sobre o adesivo e ofereço uma revista com um artigo que pode interessá-la.", consequence: "Não confrontar abertamente é tato. (1 Pedro 3:15)", points: 1 },
      { text: "Pergunto: 'A senhora é daquela religião? Por que não experimenta a nossa?'", consequence: "Comparação direta pode causar conflito. (2 Timóteo 2:24)", points: 0 },
      { text: "Vou embora, pois ela já tem religião.", consequence: "Desistir rápido pode perder oportunidade. (Lucas 15:4)", points: 0 }
    ]
  },
  {
    category: "Cultivando o Interesse",
    situation: "Um interessado pergunta: 'Por que vocês não celebram o aniversário? Isso não é besteira?'",
    choices: [
      { text: "Pergunto: 'Você já pensou de onde vem o costume de acender velas e fazer pedidos?' E mudo para um assunto mais profundo.", consequence: "Transformar a crítica em oportunidade de ensino é sábio. (Atos 17:23)", points: 1 },
      { text: "Respondo: 'Porque a Bíblia proíbe celebrações pagãs.'", consequence: "Resposta seca pode parecer dogmática. (Provérbios 25:11)", points: 0 },
      { text: "Fujo do assunto, pois não quero discutir.", consequence: "Evitar a verdade não é franqueza. (João 8:32)", points: 0 }
    ]
  },
  {
    category: "Cultivando o Interesse",
    situation: "Uma pessoa que você estuda diz: 'Eu gosto de vocês, mas tenho medo de ser rejeitado pela minha família se mudar de religião.'",
    choices: [
      { text: "Reconheço o medo dela e sugiro que estudemos juntos o que a Bíblia diz sobre família e amor.", consequence: "Empatia antes de ensinar é amor. (Romanos 12:15)", points: 1 },
      { text: "Digo: 'Mas a verdade é mais importante que a família.'", consequence: "Mínimo da dor dela não é empatia. (Efésios 4:29)", points: 0 },
      { text: "Insisto que ela precisa decidir logo.", consequence: "Pressão pode causar ansiedade. (1 Coríntios 3:6)", points: 0 }
    ]
  },
  {
    category: "Fazendo Discípulos",
    situation: "Um estudo Bíblico diz que concorda com tudo, mas quando você pergunta se ele pratica, ele diz: 'Ainda não, mas um dia vou começar'.",
    choices: [
      { text: "Pergunto: 'O que o impede de começar agora? Posso ajudar com algo?'", consequence: "Franqueza gentil ajuda a avançar. (Tiago 1:22)", points: 1 },
      { text: "Aceito e continuo o estudo normalmente.", consequence: "Não questionar pode impedir o progresso. (Tiago 4:17)", points: 0 },
      { text: "Fico frustrado, pois ele não está sério.", consequence: "Frustração não é atitude cristã. (2 Timóteo 2:24)", points: 0 }
    ]
  },
  {
    category: "Fazendo Discípulos",
    situation: "Uma mulher que você estuda começou a comparecer às reuniões, mas senta no canto e não fala com ninguém.",
    choices: [
      { text: "Me aproximo depois da reunião e pergunto como ela está se sentindo.", consequence: "Acolher quem é novo é amor. (Romanos 12:13)", points: 1 },
      { text: "Deixo ela no canto, pois ela pode ser tímida.", consequence: "Isolar pode aumentar a timidez. (Hebreus 10:24)", points: 0 },
      { text: "Apresento ela para todo mundo de uma vez.", consequence: "Sobrecarregar tímidos não é gentileza. (Provérbios 25:11)", points: 0 }
    ]
  },
  {
    category: "Casa em Casa",
    situation: "Você toca a campainha e um homem abre e diz: 'Vocês são contra a democracia, não são?'",
    choices: [
      { text: "Pergunto: 'O que o senhor acha que nós pensamos sobre isso?' Ouço e depois respondo com a Bíblia.", consequence: "Ouvir antes de falar é sábio. (Tiago 1:19)", points: 1 },
      { text: "Respondo: 'Não, somos neutros politicamente.'", consequence: "Resposta direta pode não convencê-lo. (1 Pedro 3:15)", points: 0 },
      { text: "Fico irritado com a acusação e me defendo.", consequence: "Defensivo não é atitude cristã. (Provérbios 15:1)", points: 0 }
    ]
  },
  {
    category: "Casa em Casa",
    situation: "Uma pessoa abre a porta e está ouvindo música alta. Ela pede para você falar mais alto.",
    choices: [
      { text: "Falo mais alto, mas deixo algo para ler e digo que ela pode me procurar quando estiver mais tranquilo.", consequence: "Adaptar-se e ser flexível é sábio. (1 Coríntios 9:22)", points: 1 },
      { text: "Peço para ela abaixar o som, pois não posso falar assim.", consequence: "Dar ordens não é gentileza. (Filipenses 2:3)", points: 0 },
      { text: "Vou embora, pois não consigo me comunicar.", consequence: "Desistir por dificuldade enfraquece. (Gálatas 6:9)", points: 0 }
    ]
  },
  {
    category: "Testemunho Público",
    situation: "Em uma praça, um homem se aproxima e diz: 'Vocês são aquela religião que não deixa os filhos fazerem festa na escola, não é?'",
    choices: [
      { text: "Respondo: 'Boa pergunta! Você já pensou por que tomamos essa posição?' E mudo para um assunto bíblico.", consequence: "Transformar a crítica em oportunidade de ensino é sábio. (1 Pedro 3:15)", points: 1 },
      { text: "Respondo: 'Não é bem assim, você está mal informado.'", consequence: "Contradizer semConnection parece desrespeitoso. (Provérbios 15:1)", points: 0 },
      { text: "Ignoro e continuo meu trabalho.", consequence: "Deixar de responder pode parecer covardia. (Mateus 5:16)", points: 0 }
    ]
  },
  {
    category: "Testemunho Informal",
    situation: "Em uma festa de família, um tio começa a falar mal de Testemunhas de Jeová na sua frente.",
    choices: [
      { text: "Mantenho a calma e, no momento oportuno, pergunto: 'Tio, por que o senhor pensa assim?'", consequence: "Perguntar semdiscutir é sábio. (Provérbios 15:1)", points: 1 },
      { text: "Respondo na mesma hora, defendendo minha fé.", consequence: "Discussão em família pode causar conflito. (Romanos 12:18)", points: 0 },
      { text: "Saio do recinto para não ouvir.", consequence: "Evitar não resolve. (Mateus 5:16)", points: 0 }
    ]
  },
  {
    category: "Testemunho Informal",
    situation: "Seu colega de trabalho pergunta: 'Você acha que eu vou para o inferno?'",
    choices: [
      { text: "Respondo: 'Na verdade, a Bíblia não fala de inferno como lugar de tormento eterno. Quer saber o que ela diz?'", consequence: "Esclarecer com base bíblica é essencial. (Eclesiastes 9:5)", points: 1 },
      { text: "Digo: 'Isso depende das suas escolhas.'", consequence: "Resposta vaga não ajuda. (João 8:32)", points: 0 },
      { text: "Fujo do assunto, pois é delicado.", consequence: "Evitar a verdade não é franqueza. (1 Pedro 3:15)", points: 0 }
    ]
  },
  {
    category: "Preparo",
    situation: "Seu companheiro de pregação fala sobre um texto bíblico, mas você percebe que ele explicou errado.",
    choices: [
      { text: "Na próxima oportunidade, converso com ele em particular e mostro o texto correto.", consequence: "Corrigir com amor preserva a união. (Gálatas 6:1)", points: 1 },
      { text: "Corrijo na hora, na frente do morador.", consequence: "Constranger o companheiro não é atitude cristã. (Filipenses 2:3)", points: 0 },
      { text: "Deixo passar, pois não quero conflito.", consequence: "Ignorar o erro pode causar problemas. (2 Timóteo 2:24)", points: 0 }
    ]
  },
  {
    category: "Perseverança",
    situation: "Você visitou uma pessoa muitas vezes e ela sempre diz que não tem interesse. Uma dia, ela aparece na congregação e diz: 'Lembrei das suas palavras'.",
    choices: [
      { text: "Acolho ela com alegria e a apresento para os irmãos.", consequence: "Alegria pelo retorno é atitude cristã. (Lucas 15:7)", points: 1 },
      { text: "Pergunto: 'Por que a senhora demorou tanto?'", consequence: "Cobrar não é gentileza. (Efésios 4:29)", points: 0 },
      { text: "Fico desconfiado, pois ela já voltou antes e parou de novo.", consequence: "Desconfiança machuca. (1 Coríntios 13:7)", points: 0 }
    ]
  }
];

let current = 0;
let totalPoints = 0;

const situationDiv = document.getElementById('situation');
const choicesDiv = document.getElementById('choices');
const resultDiv = document.getElementById('result');
const nextButton = document.getElementById('next');
const scoreDiv = document.getElementById('score');
const progressDiv = document.getElementById('progress');

function updateScore() {
  scoreDiv.textContent = totalPoints;
}

function updateProgress() {
  progressDiv.textContent = `${current + 1}/${situations.length}`;
}

function showSituation() {
  const s = situations[current];
  situationDiv.innerHTML = `<p>${s.situation}</p>`;
  choicesDiv.innerHTML = '';
  resultDiv.innerHTML = '';
  resultDiv.classList.add('hidden');
  nextButton.classList.add('hidden');
  updateProgress();

  s.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.textContent = choice.text;
    btn.onclick = () => selectChoice(index);
    choicesDiv.appendChild(btn);
  });
}

function selectChoice(index) {
  const choice = situations[current].choices[index];
  const buttons = choicesDiv.querySelectorAll('button');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === index) {
      btn.classList.add(choice.points > 0 ? 'correct' : 'incorrect');
    }
  });

  if (choice.points > 0) {
    totalPoints += choice.points;
    updateScore();
  }

  resultDiv.innerHTML = `<p>${choice.consequence}</p>`;
  resultDiv.classList.remove('hidden');
  nextButton.classList.remove('hidden');
}

nextButton.onclick = () => {
  current++;
  if (current < situations.length) {
    showSituation();
  } else {
    situationDiv.innerHTML = `
      <div class="game-over">
        <h2>🎉 Parabéns!</h2>
        <div class="final-score">${totalPoints} pontos</div>
        <p class="final-message">Você completou todos os desafios!</p>
      </div>
    `;
    choicesDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    nextButton.classList.add('hidden');
  }
};

updateScore();
showSituation();
