// ============================================
// Banco de Perguntas - Nível 2
// Baseado em "A Vida — Teve um Criador?"
// Fonte: jw.org/pt/biblioteca/brochuras/vida-teve-criador/
// ============================================

const BIBLICAL_QUESTIONS_NIVEL2 = [
  {
    category: "Introdução",
    reference: "Introdução — pp. 2-3",
    question: "Qual é o objetivo principal da brochura A Vida — Teve um Criador?",
    options: ["Ridicularizar quem acredita na evolução", "Levar o leitor a reexaminar a base de suas crenças sobre a origem da vida", "Defender a criação em seis dias de 24 horas", "Ensinar ciência sem mencionar a Bíblia"],
    correct: 1
  },
  {
    category: "Em que você crê?",
    reference: "Em que você crê? — p. 2",
    question: "Quais dois conceitos opostos são mencionados no início da brochura?",
    options: ["Criação em seis dias de 24 horas há milhares de anos e vida surgida por acaso, sem Criador", "Evolução teísta e criação em seis eras", "Big Bang e criação em sete dias", "Vida eterna e reencarnação"],
    correct: 0
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 5",
    question: "Por que a localização do sistema solar na Via Láctea é especial?",
    options: ["Fica exatamente no centro da galáxia", "Fica numa zona habitável, nem perto nem longe demais do centro", "Fica na borda externa da galáxia", "Fica fora da Via Láctea"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 5",
    question: "A que distância aproximada do Sol está a órbita da Terra?",
    options: ["15 milhões de quilômetros", "150 milhões de quilômetros", "1,5 bilhão de quilômetros", "15 mil quilômetros"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 5",
    question: "Por que o Sol é comparado a uma “usina de energia” ideal?",
    options: ["É instável e muda de tamanho", "É estável, tem o tamanho ideal e emite a quantidade exata de energia", "É maior que todas as estrelas", "Produz apenas calor, sem luz"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 5",
    question: "Qual é a particularidade do tamanho da Lua em relação à Terra?",
    options: ["Tem o mesmo diâmetro da Terra", "É maior que a Terra", "Mede pouco mais de um quarto do diâmetro da Terra", "É a menor lua do sistema solar"],
    correct: 2
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 6",
    question: "Qual é a principal responsável pelas marés na Terra?",
    options: ["O Sol", "A Lua", "Marte", "A atmosfera"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 6",
    question: "Além das marés, qual papel importante a Lua desempenha?",
    options: ["Aquece o núcleo da Terra", "Estabiliza o eixo de rotação da Terra", "Produz o campo magnético", "Cria a camada de ozônio"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 6",
    question: "Qual é a inclinação do eixo da Terra?",
    options: ["Cerca de 23,4 graus", "Exatamente 90 graus", "Cerca de 45 graus", "Cerca de 5 graus"],
    correct: 0
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 6",
    question: "O que aconteceria se a Terra girasse bem mais devagar?",
    options: ["Os dias seriam mais curtos", "O lado voltado para o Sol superaqueceria e o outro congelaria", "Não haveria estações do ano", "O campo magnético desapareceria"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 6",
    question: "O que produz o campo magnético da Terra?",
    options: ["A camada de ozônio", "O núcleo de ferro fundido em rotação", "As marés", "A Lua"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 6",
    question: "Do que o campo magnético terrestre protege o planeta?",
    options: ["Apenas da chuva", "Da radiação cósmica, do vento solar e das erupções solares", "Apenas dos meteoros", "Do excesso de oxigênio"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 7",
    question: "Quanto da radiação ultravioleta o ozônio estratosférico absorve?",
    options: ["Cerca de 10%", "Até 99%", "Cerca de 50%", "Nenhuma"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 7",
    question: "O que a atmosfera faz com a maioria dos meteoroides?",
    options: ["Atrai todos para o solo", "Queima a maioria, produzindo meteoros", "Transforma-os em chuva", "Reflete-os para o Sol"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 8",
    question: "Quais são as três etapas do ciclo da água?",
    options: ["Evaporação, condensação e precipitação", "Fotossíntese, respiração e decomposição", "Fusão, solidificação e sublimação", "Absorção, transpiração e combustão"],
    correct: 0
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 8",
    question: "Quanta água o ciclo da água recicla por ano, segundo estimativas?",
    options: ["O suficiente para cobrir a Terra com 8 centímetros de água", "O suficiente para cobrir a Terra com quase 80 centímetros de água", "O suficiente para encher um oceano", "O suficiente para cobrir apenas os continentes"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 8",
    question: "O que as plantas fazem na fotossíntese?",
    options: ["Absorvem oxigênio e liberam dióxido de carbono", "Absorvem dióxido de carbono e produzem carboidratos e oxigênio", "Absorvem nitrogênio e produzem sais", "Absorvem água e produzem hidrogênio"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 8",
    question: "Qual gás compõe quase 80% da atmosfera terrestre?",
    options: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hidrogênio"],
    correct: 1
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 10",
    question: "Quantas espécies de bactérias foram encontradas em apenas 100 gramas de solo?",
    options: ["Cerca de 100", "Cerca de 1.000", "Cerca de 10 mil", "Cerca de 1 milhão"],
    correct: 2
  },
  {
    category: "O planeta vivo",
    reference: "O planeta vivo — p. 10",
    question: "Qual é a estimativa do número de espécies que existem na Terra?",
    options: ["Entre 2 mil e 100 mil", "Entre 2 milhões e 100 milhões", "Exatamente 10 milhões", "Menos de 1 milhão"],
    correct: 1
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 11",
    question: "O que é biomimética?",
    options: ["Copiar projetos de plantas e animais para criar produtos e melhorar tecnologias", "Estudar fósseis para provar a evolução", "Cruzar animais para obter novas raças", "Construir robôs sem inspiração na natureza"],
    correct: 0
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 12",
    question: "O que os tubérculos nas nadadeiras da baleia jubarte fazem?",
    options: ["Aumentam a força de sustentação e diminuem a resistência da água", "Deixam a baleia mais pesada", "Servem apenas para atrair parceiros", "Impedem que a baleia mergulhe"],
    correct: 0
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 12",
    question: "Que aplicação prática foi inspirada pelas nadadeiras da baleia jubarte?",
    options: ["Pneus mais largos", "Asas de avião com saliências parecidas com tubérculos", "Barcos com casco liso", "Turbinas sem pás"],
    correct: 1
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 13",
    question: "Qual é o tamanho do protótipo de aeronave inspirado nas asas da gaivota?",
    options: ["16 centímetros", "61 centímetros", "6 metros", "1 metro"],
    correct: 1
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 13",
    question: "O que o “trocador de calor em contracorrente” das pernas da gaivota faz?",
    options: ["Aquece o gelo ao redor dos pés", "Resfria todo o corpo da ave", "Conserva o calor no corpo e mantém o frio nos pés", "Produz energia para o voo"],
    correct: 2
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 14",
    question: "Que animal inspirou um carro-conceito com projeto aerodinâmico e estabilidade?",
    options: ["O peixe-cofre", "A baleia jubarte", "A gaivota", "A libélula"],
    correct: 0
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 14",
    question: "O que a pinha inspirou nos tecidos desenvolvidos por pesquisadores?",
    options: ["Tecidos que mudam de cor", "Tecidos com pequenas abas que se ajustam à temperatura do corpo", "Tecidos que produzem energia", "Tecidos que não molham"],
    correct: 1
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 16",
    question: "O que diferencia a seda do fio estrutural das aranhas orbitelas?",
    options: ["É mais leve que o algodão, mas proporcionalmente mais forte que o aço e mais resistente que o kevlar", "É mais fraca que o algodão", "Só pode ser produzida em altas temperaturas", "É feita de plástico"],
    correct: 0
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 17",
    question: "Como a borboleta-monarca se orienta na migração de cerca de 3 mil quilômetros?",
    options: ["Pelo campo magnético da Terra apenas", "Pelo Sol, compensando o movimento dele no céu", "Pelas estrelas", "Pelo cheiro das flores"],
    correct: 1
  },
  {
    category: "Quem projetou primeiro?",
    reference: "Quem projetou primeiro? — p. 17",
    question: "Quantas lentes há em cada olho da libélula?",
    options: ["Cerca de 300", "Cerca de 3.000", "Cerca de 30 mil", "Cerca de 300 mil"],
    correct: 2
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 18",
    question: "Como a brochura define microevolução e macroevolução?",
    options: ["Microevolução é mudança entre espécies; macroevolução é mudança dentro da espécie", "Microevolução são pequenas mudanças; macroevolução são grandes mudanças nunca observadas", "As duas são sinônimos", "Microevolução ocorre só em plantas; macroevolução só em animais"],
    correct: 1
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — pp. 18-19",
    question: "O que Darwin ensinou sobre as pequenas mudanças observadas?",
    options: ["Que elas poderiam se acumular por longos períodos e produzir grandes mudanças", "Que nunca poderiam se acumular", "Que só ocorriam em cães", "Que eram causadas por seleção artificial"],
    correct: 0
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — pp. 19-20",
    question: "Qual foi o resultado de mais de 40 anos de programas de melhoramento genético por mutações?",
    options: ["Criaram muitas espécies novas", "Criaram uma nova família de plantas", "Produziram apenas animais maiores", "Não conseguiram produzir nenhuma espécie inteiramente nova"],
    correct: 3
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 20",
    question: "A que conclusão o pesquisador Wolf-Ekkehard Lönnig chegou sobre as mutações?",
    options: ["Que podem transformar qualquer espécie em outra", "Que não podem transformar uma espécie original em outra totalmente nova", "Que são sempre benéficas", "Que só ocorrem em laboratório"],
    correct: 1
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 20",
    question: "Segundo a nota da brochura, que parcela das mutações em plantas foi selecionada para pesquisa adicional?",
    options: ["Menos de 1%", "Cerca de 10%", "Cerca de 50%", "Mais de 90%"],
    correct: 0
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 21",
    question: "O que aconteceu com os tentilhões de Darwin depois de um ano de seca nas Galápagos?",
    options: ["Todos morreram", "Os de bico menor sobreviveram melhor", "Os de bico ligeiramente maior sobreviveram com mais facilidade", "Nenhum tentilhão mudou"],
    correct: 2
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 21",
    question: "O que os estudos posteriores sobre os tentilhões de Darwin mostraram?",
    options: ["Que se transformaram em outra espécie", "Que os de bico menor voltaram a dominar e que espécies se cruzavam", "Que deixaram de existir", "Que ficaram todos com bicos maiores"],
    correct: 1
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 21",
    question: "Segundo Jeffrey H. Schwartz, o que a seleção natural pode fazer?",
    options: ["Criar novas espécies do zero", "Transformar répteis em mamíferos", "Ajudar as espécies a se adaptar, mas não criar algo novo", "Produzir novas famílias de animais"],
    correct: 2
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 22",
    question: "Quantos fósseis grandes já foram desenterrados e catalogados, segundo a brochura?",
    options: ["Cerca de 200 milhões, além de bilhões de microfósseis", "Cerca de 200 mil", "Cerca de 2 milhões", "Cerca de 200 bilhões"],
    correct: 0
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 22",
    question: "O que o vasto registro fóssil mostra sobre os principais grupos de animais?",
    options: ["Que evoluíram lentamente uns dos outros", "Que surgiram de repente e permaneceram praticamente inalterados", "Que nunca existiram", "Que todos vieram de um único fóssil"],
    correct: 1
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 22",
    question: "O que o evolucionista Niles Eldredge disse sobre o registro fóssil?",
    options: ["Que prova totalmente a macroevolução", "Que não existe", "Que mostra pouca ou nenhuma mudança acumulada na maioria das espécies", "Que só contém microfósseis"],
    correct: 2
  },
  {
    category: "Evolução — mitos e fatos",
    reference: "Evolução — mitos e fatos — p. 22",
    question: "Por que a brochura diz que crer na evolução é um “ato de fé”?",
    options: ["Porque exige aceitar afirmações não comprovadas, muitas vezes por compromisso com o materialismo", "Porque a evolução foi observada diretamente", "Porque todos os cientistas são religiosos", "Porque os fósseis são fáceis de interpretar"],
    correct: 0
  },
  {
    category: "A ciência e o relato de Gênesis",
    reference: "A ciência e o relato de Gênesis — p. 24",
    question: "Segundo a brochura, a que se refere Gênesis 1:1?",
    options: ["A uma ação à parte dos dias criativos", "Ao primeiro dia criativo", "Ao dilúvio", "À criação do homem"],
    correct: 0
  },
  {
    category: "A ciência e o relato de Gênesis",
    reference: "A ciência e o relato de Gênesis — p. 24",
    question: "O que a Bíblia diz sobre a idade exata dos céus e da Terra?",
    options: ["Que têm 10 mil anos", "Que têm 6 mil anos", "Não especifica a idade exata", "Que têm 4 bilhões de anos"],
    correct: 2
  },
  {
    category: "A ciência e o relato de Gênesis",
    reference: "A ciência e o relato de Gênesis — pp. 24-26",
    question: "O que a palavra hebraica traduzida como “dia” em Gênesis pode significar?",
    options: ["Apenas 24 horas", "Vários períodos, não apenas um de 24 horas", "Apenas o período diurno", "Apenas um ano"],
    correct: 1
  },
  {
    category: "A ciência e o relato de Gênesis",
    reference: "A ciência e o relato de Gênesis — p. 26",
    question: "Como Gênesis 2:4 se refere aos seis dias criativos?",
    options: ["Como seis dias separados", "Como 24 horas", "Como um ano sabático", "Como apenas um dia"],
    correct: 3
  },
  {
    category: "A ciência e o relato de Gênesis",
    reference: "A ciência e o relato de Gênesis — p. 27",
    question: "O que a expressão “segundo as suas espécies” sugere?",
    options: ["Que não há limites para a variação", "Que há um limite na variação dentro de uma espécie básica", "Que todas as espécies são iguais", "Que as espécies surgem por acaso"],
    correct: 1
  },
  {
    category: "A ciência e o relato de Gênesis",
    reference: "A ciência e o relato de Gênesis — p. 28",
    question: "O que Gênesis não ensina, segundo a brochura?",
    options: ["Que Deus criou os céus e a Terra", "Que o Universo teve um início", "Que tudo foi criado em seis dias de 24 horas num passado recente", "Que a vida apareceu em estágios"],
    correct: 2
  },
  {
    category: "Importa em que você crê?",
    reference: "Importa em que você crê? — p. 29",
    question: "Qual foi a conclusão do evolucionista William B. Provine sobre o cosmos e a vida humana?",
    options: ["Que não vê nenhum motivo real para a existência do cosmos ou da vida humana", "Que a vida tem um propósito dado por Deus", "Que a evolução prova a existência de um Criador", "Que o sentido da vida está na ciência"],
    correct: 0
  },
  {
    category: "Importa em que você crê?",
    reference: "Importa em que você crê? — p. 29",
    question: "Que esperança a Bíblia oferece em contraste com a visão fatalista?",
    options: ["Que a morte é o fim de tudo", "Que o futuro depende apenas de líderes humanos", "Que a fonte da vida está com Deus e há esperança de vida sem morte", "Que a evolução trará imortalidade"],
    correct: 2
  }
];
