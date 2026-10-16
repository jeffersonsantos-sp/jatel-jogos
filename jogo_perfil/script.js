// Perguntas e dicas
const questions = {
    pessoas: [
        {
            title: "1",
            hints: [
                "Mefibosete",
                "",
                "DICAS:",                
                "1-Davi o poupou e o convidou para comer em sua mesa.",
                "2-Tinha um servo chamado Ziba que o traiu.",
                "3-Ele viveu em Lo-Debar antes de Davi trazê-lo para Jerusalém.",
                "4-Seu nome original era Meribe-Baal.",
                "5-Teve um filho chamado Mica.",
                "6-Foi caluniado por seu servo durante a revolta de Absalão.",
                "7-Perdeu a herança de suas terras temporariamente.",
                "8-Davi lhe deu todas as terras de Saul como herança."
            ]
        },
        {
            title: "2",
            hints: [
                "Abner",
                "",
                "DICAS:", 
                "1-Foi comandante do exército de Saul.",
                "2-Era primo de Saul.",
                "3-Matou Asael, irmão de Joabe, durante uma batalha.",
                "4-Tentou transferir o poder de Isbosete para Davi.",
                "5-Foi assassinado por Joabe por vingança.",
                "6-Era conhecido por sua força e coragem em batalha.",
                "7-Fez aliança com Davi antes de sua morte.",
                "8-Foi sepultado em Hebrom, e Davi lamentou sua morte.",
                "9-Era um importante líder no reino de Israel após a morte de Saul.",
                "10-Seu nome significa 'pai de luz'."
            ]
        },

        {
            "title": "3",
            "hints": [
                "Simei",
                "",
                "DICAS:", 
                "1-Ele era da casa de Saul e morava em Baurim.",
                "2-Amaldiçoou Davi e jogou pedras nele durante a revolta de Absalão.",
                "3-Davi perdoou seu comportamento após retomar o trono.",
                "4-Salomão ordenou sua execução mais tarde.",
                "5-Tinha sido um dos maiores críticos de Davi durante a crise.",
                "6-Jurou lealdade a Davi após a vitória sobre Absalão.",
                "7-Foi confinado a Jerusalém e desobedecendo, foi morto.",
                "8-Ele atravessou o Jordão para implorar o perdão de Davi.",
                "9-É mencionado em 2 Samuel e em 1 Reis.",
                "10-O incidente ocorreu quando Davi estava fugindo de Absalão."

            ]
        },
        {
            title: "4",
            hints: [
                "Abiatar",
                    "",
                "DICAS:", 
                "1-Filho do sumo sacerdote Aimeleque, da tribo de Levi e da linhagem de Eli",
                "2-Viveu durante os reinados de Saul, Davi e Salomão, e durante o reinado de Davi tornou-se sumo sacerdote.",
                "3-Tinha dois filhos, Jonatã e Aimeleque ",
                "4-Parece que, quando Davi finalmente obteve o trono, ele foi constituído sumo sacerdote.",
                "5-Participou junto com outros sacerdotes do privilégio de levar a arca de Jeová da casa de Obede-Edom para Jerusalém.",
                "6-Além de ele ser sumo sacerdote, estava incluído no grupo de conselheiros de Davi.",

            ]
        },
        {
            title: "5",
            hints: [
                "Rute",
                "",
                "DICAS:", 
                "1-Sou uma das poucas mulheres com um livro da Bíblia em meu nome.",
                "2-Sou moabita, mas me tornei parte da nação de Israel.",            
                "3-Casei-me com Boaz, um homem rico e generoso.",                
                "4-Fui tataravó do rei Davi.",
                "5-O nome do meu primeiro marido era Malom.",
                "6-Meu livro fala sobre lealdade e redenção.",
                "7-Minha história acontece durante o tempo dos juízes.",

            ]
        },
        {
            title: "6",
            hints: [
                "Baraque",
                "",
                "DICAS:",    
                "1-Filho de Abinoão, de Quedes, no território de Naftali.",
                "2-A profetisa Débora, que estava então julgando Israel, incentivou ele a tomar a iniciativa de libertar seu povo.",
                "3-Ele recruta 10.000 homens de Naftali, Zebulão e de outras tribos de Israel",
                "4- É citado como fiel exemplo entre aqueles que, “pela fé, derrotaram reinos [em conflito],tornaram-se valentes na guerra.”. ",
                "5-Ele disse : “Se fores comigo”, “então certamente irei; mas se não fores comigo, não irei”.",
                "6-Com o apoio de Jeová, ele derrotou o exército de Sísera. ",
                
            ]
        },
        {
            title: "7",
            hints: [
                "Joel (Profeta)",

                "",
                "DICAS:", 
                "1-Cujo nome significa “Jeová é Deus”, também foi encarada assim pelos seus compatriotas.",                
                "2-Ele registrou suas profecias em Judá por volta de 820 AEC, nos dias do Rei Uzias. ",
                "3-Falou de uma praga de gafanhotos destrutivos que viriam em ondas para devastar o país. ",
                "4-Ele predisse que a força ativa de Deus, seu espírito santo, seria derramada “sobre toda sorte de carne”. ",               
                "5-Deus rogou por meio dele: ‘Retornai a mim de todo o vosso coração, com jejum, choro e lamento.’ (",
                 
                
            ]
        },
        {
            title: "8",
            hints: [
                "Isaías",

                "",
                "DICAS:", 
                "1-Minha mensagem era de julgamento e redenção.",
                "2-Profetizei sobre o nascimento de um 'Emanuel'.",
                "3-Vi o Senhor em uma visão, sentado em um trono alto e elevado.",                
                "4-Predisse a queda de Babilônia.",
                "5-Minhas profecias têm uma ênfase no reino messiânico.",               
                "6-Fui chamado por Deus no ano da morte do rei Uzias.",
                "7-Meu nome significa 'Salvação de Jeová'."

            ]
        },
        {
            title: "9",
            hints: [
                "Miqueias",
                 "",
                "DICAS:", 
                "1-Contemporâneo de Oseias e Isaías, ele declarou mensagens contra as nações de Judá e de Israel ",
                "2-Estava presente no casamento em Caná, onde Jesus fez seu primeiro milagre.",            
                "3-Meu nome é mencionado em todas as narrativas do Evangelho.",
                "4-Fui considerada 'abençoada entre as mulheres'."

            ]
        },
        {
            title: "10",
            hints: [
                "Paulo",

                "",
                "DICAS:", 
                "1-Tive um encontro com Jesus a caminho de Damasco.",
                "2-Escrevi várias cartas que compõem o Escrituras Gregas.",
                "3-Fui apóstolo aos gentios.",
                "4-Participei de várias viagens missionárias.",
                "5-Fui preso várias vezes por pregar o evangelho.",                
                "6-Sofri um naufrágio em uma de minhas viagens.",
                "7-Minha conversão é relatada no livro de Atos."

            ]
        },
        {
            title: "11",
            hints: [
                "Gideão",
                 "",
                "DICAS:", 
                "1-Fui chamado por Deus para libertar Israel dos midianitas.",
                "2-Pedi sinais a Deus, como o orvalho sobre um velo de lã.",
                "3-Fui apelidado de Jerubaal.",
                "4-Sou mencionado no livro de Juízes.",
                "5-Fui relutante em aceitar o chamado de Deus no início.",
                "6-Construí um altar chamado 'Jeová é paz'.",
                "7-Recebi o título de 'valente guerreiro' do anjo de Deus."

            ]
        },
        {
            title: "12",
            hints: [
                "Ana (mãe de Samuel)",
                "",
                "DICAS:",  
                "1-Fui estéril durante muitos anos.",
                "2-Supliquei a Deus por um filho e fiz um voto.",
                "3-Meu filho foi um dos maiores profetas de Israel.",
                "4-Entreguei meu filho ao serviço de Deus no tabernáculo.",
                "5-Meu marido se chamava Elcana.",
                "6-Minha rival Penina me provocava por eu não ter filhos.",

            ]
        },
        {
            title: "13",
            hints: [
                "João Batista",
                    "",
                "DICAS:", 
                    "1-Fui o precursor de Jesus Cristo.",
                    "2-Vestia roupas de pelo de camelo e comia gafanhotos e mel silvestre.",
                    "3-Fui a voz que clamava no deserto.",
                    "4-Meus pais eram Zacarias e Isabel.",
                    "5-Fui considerado um profeta poderoso e fiel.",
                    "6-Jesus disse que entre os nascidos de mulher, não havia maior que eu.",

            ]
        },
        {
            title: "14",
            hints: [
               
                "Jezabel",
                "",
                "DICAS:",  
                "1-Promovi a adoração a Baal e Aserá em Israel.",
                "2-Persegui os profetas de Deus.",
                "3-Fui confrontada pelo profeta Elias no Monte Carmelo.",
                "4-Fui responsável pela morte de Nabote.",
                "5-Meu nome se tornou sinônimo de maldade e idolatria.",
                "6-Meu casamento trouxe grande corrupção a Israel.",

            ]
        },
        {
            title: "15",
            hints: [
                "Jacó",
                "",
                "DICAS:", 
                "1-Enganei meu pai para receber a bênção de primogenitura.",
                "2-Tive doze filhos, que se tornaram as tribos de Israel.",
                "3-Trabalhei por 14 anos para me casar com Raquel.",
                "4-Tive uma visão de uma escada que alcançava os céus.",
                "5-Lutei com um anjo durante a noite.",
                "6-Meu irmão Esaú me perseguiu após eu roubar sua bênção.",
                "7-Sou avô de Efraim e Manassés.",
                "8-Morri no Egito, mas fui enterrado em Canaã.",
                
            ]
        },
        // Adicione mais perguntas aqui...
    ],
    lugares: [
        {
            title: "1",
            hints: [
                "Laquis",
                 "",
                "DICAS:", 
                "1-Era uma cidade fortificada importante no reino de Judá.",
                "2-Foi sitiada e destruída pelo rei Senaqueribe da Assíria.",
                "3-Cartas escritas em cacos de cerâmica foram encontradas aqui.",
                "4-Foi um dos últimos redutos a cair durante a invasão babilônica.",
                "5-As relíquias assírias de sua conquista estão expostas no Museu Britânico.",
                "6-Ela ficava localizada na região das colinas de Judá.",
                "7-Também era mencionada em mensagens interceptadas de espionagem.",
                "8-Era uma cidade associada ao comércio e à defesa militar."
            ]
        },
        {
            title: "2",
            hints: [
                "Megido",
                "",
                "DICAS:",  
                "1-Era uma cidade estrategicamente localizada no vale de Jezreel.",
                "2-O rei Josias foi morto aqui por faraó Neco.",
                "3-Era um importante posto militar durante o reino de Salomão.",
                "4-Está associada à profecia da batalha do Armagedom.",
                "5-Era uma das cidades de onde Salomão obtinha cavalos.",
                "6-Estava em uma importante rota comercial conhecida como Via Maris.",
                "7-Diversos reis cananeus se uniram contra Josué nesta região.",
                "8-As escavações revelaram estábulos e fortificações impressionantes.",
                "9-Seu nome significa 'lugar de reuniões' ou 'congregação'.",
                "10-Foi destruída e reconstruída várias vezes ao longo da história."
            ]
        },

        {
            "title": "3",
            "hints": [
                "Canaã",
                "",
                "DICAS:",  
                "1-Foi a terra prometida aos descendentes de Abraão.",
                "2-Os espias enviados por Moisés a exploraram.",
                "3-Josué liderou a conquista desta terra.",
                "4-Os israelitas viveram aqui após o Êxodo.",
                "5-Havia muitas nações idólatras vivendo aqui antes da chegada de Israel.",
                "6-Foi chamada de 'terra que mana leite e mel'.",
                "7-Aqui se localizavam cidades como Jericó e Hebrom.",
                "8-Os patriarcas Abraão, Isaque e Jacó viveram aqui.",
                "9-Posteriormente foi dividida entre as tribos de Israel."
            ]
        },
        {
            "title": "4",
            "hints": [
                "Jericó",
                    "",
                    "DICAS:",
                    "1-Foi a primeira cidade conquistada pelos israelitas na Terra Prometida.",
                    "2-Josué liderou o cerco à cidade.",
                    "3-As muralhas caíram após sete dias de marchas.",
                    "4-Raabe, a prostituta, ajudou os espias israelitas aqui.",
                    "5-Ficava nas proximidades do rio Jordão.",
                    "6-Seus habitantes temeram ao saber das obras de Deus a favor de Israel.",
                    "7-As trombetas soaram no último dia da marcha.",
                    "8-Foi amaldiçoada para não ser reconstruída.",
                    "9-Jesus passou por esta cidade e curou dois cegos.",
                    "10-Ficava a cerca de 27 quilômetros de Jerusalém."

            ]
        },
        {
            "title": "5",
            "hints": [
              "Monte Sinai",
                 "",
                "DICAS:",
                "1-Deus apareceu em meio a relâmpagos, trovões e fumaça.",
                "2-Os israelitas acamparam ao pé da montanha durante o Êxodo.",
                "3-Moisés ficou 40 dias e 40 noites aqui.",
                "4-Também é chamado de Horebe em algumas passagens.",
                "5-Deus deu instruções sobre o tabernáculo neste local.",
                "6-Os israelitas ficaram temerosos e não quiseram se aproximar.",
                "7-É uma montanha sagrada mencionada tanto no Antigo quanto no Novo Testamento.",
                "8-Moisés desceu com seu rosto resplandecente após estar na presença de Deus.",
                "9-A idolatria do bezerro de ouro aconteceu enquanto Moisés estava no cume."

            ]
        },
        {
            "title": "6",
            "hints": [
              "Edom",
                "",
                "DICAS:",
                "1-Era a terra dos descendentes de Esaú.",
                "2-Ficava ao sul de Israel, perto do Mar Vermelho.",
                "3-Muitas vezes esteve em conflito com os israelitas.",
                "4-A cidade de Petra ficava dentro de seus limites.",
                "5-Recusou passagem aos israelitas durante sua jornada para Canaã.",
                "6-Seus habitantes eram conhecidos por sua sabedoria e comércio.",
                "7-O profeta Obadias profetizou a destruição desta nação.",
                "8-A palavra Edom significa 'vermelho'.",
                "9-A nação foi destruída pelos babilônios.",
                "10-Esaú, o fundador da nação, era irmão de Jacó."

            ]
        },
        {
            "title": "7",
            "hints": [
                "Samaria",
                "",
                "DICAS:",
                "1-Foi a capital do reino do norte de Israel.",
                "2-Acabe e Jezabel governaram desta cidade.",
                "3-Foi um centro de adoração idólatra em Israel.",
                "4-Os assírios conquistaram e deportaram os habitantes daqui.",
                "5-Jesus passou por esta região e encontrou uma mulher no poço de Jacó.",
                "6-Era o nome de uma cidade e também de uma região.",
                "7-Os samaritanos, que eram desprezados pelos judeus, viviam aqui.",
                "8-A cidade foi cercada por Ben-Hadade, rei da Síria.",
                "9-Foi reconstruída por Herodes, o Grande, e renomeada de Sebaste.",
                "10-Hoje está localizada na Cisjordânia."

            ]
        },
        {
            "title": "8",
            "hints": [
                "Jerusalém",
                "",
                "DICAS:",
                "1-É a cidade mais mencionada na Bíblia.",
                "2-Foi conquistada por Davi e se tornou a capital de Israel.",
                "3-O templo de Salomão foi construído aqui.",
                "4-Era a cidade onde reis como Ezequias e Josias reinaram.",
                "5-Também é chamada de Sião em muitas passagens bíblicas.",
                "6-Sofreu a destruição pelos babilônios e pelos romanos.",
                "7-Jesus entrou triunfante aqui, montado em um jumento.",
                "8-Ficava sobre uma colina na terra de Judá."

            ]
        },
        {
            "title": "9",
            "hints": [
               "Betel",
                "",
                "DICAS:",
                "1-Jacó teve uma visão de uma escada para o céu aqui.",
                "2-O nome deste lugar significa 'Casa de Deus'.",
                "3-Abraão construiu um altar aqui ao invocar o nome de Jeová.",
                "4-Fica ao norte de Jerusalém.",
                "5-Jeroboão colocou um bezerro de ouro aqui.",
                "6-Os profetas condenaram a idolatria praticada neste local.",
                "7-Foi um dos lugares centrais da adoração em Israel, junto com Gilgal.",
                "8-O profeta Amós falou contra o culto idólatra daqui.",
                "9-Após a divisão do reino, tornou-se parte de Israel (Reino do Norte).",
                "10-Josué e os israelitas acamparam aqui após derrotar Ai."

            ]
        },
        {
            "title": "10",
            "hints": [
                "Jope",
                "",
                "DICAS:",
                "1-Foi de onde Jonas partiu para fugir da ordem de Deus.",
                "2-Era um importante porto no Mediterrâneo.",
                "3-Pedro teve uma visão de animais impuros aqui.",
                "4-Tabita (Dorcas) foi ressuscitada nesta cidade.",
                "5-Os cedros do Líbano para a construção do templo chegaram por aqui.",
                "6-Ficava na costa oeste de Israel.",
                "7-Seu nome significa 'bela' ou 'beleza'.",
                "8-Foi capturada por Davi e mais tarde reconstruída.",
                "9-Foi usada pelos fenícios como um centro de comércio."

            ]
        },
        {
            "title": "11",
            "hints": [
                "Nínive",
                "",
                "DICAS:",
                "1-Era a capital do império assírio.",
                "2-Jonas pregou arrependimento a seus habitantes.",
                "3-Era uma das maiores cidades da antiguidade.",
                "4-Ficava nas margens do rio Tigre.",
                "5-Foi destruída por uma coalizão de babilônios e medos.",
                "6-Sua destruição foi profetizada por Naum.",
                "7-Seus habitantes eram conhecidos por sua crueldade em batalhas.",
                "8-Hoje suas ruínas estão localizadas no norte do Iraque."

            ]
        },
        {
            "title": "12",
            "hints": [
               "Jerusalém",
                "",
                "DICAS:",
                "1-É conhecida como a Cidade de Davi.",
                "2-É o local onde Salomão construiu o primeiro templo.",
                "3-O Monte Sião fica dentro dela.",
                "4-É mencionada em muitas profecias bíblicas.",
                "5-O apóstolo Paulo foi preso aqui.",
                "6-Tem o Muro das Lamentações."

            ]
        },
        {
            "title": "13",
            "hints": [
               "Babel",
                "",
                "DICAS:",
                "1-Foi onde Deus confundiu a língua dos homens.",
                "2-Fica na região da Mesopotâmia.",
                "3-As pessoas tentaram construir uma torre para alcançar o céu.",
                "4-Está relacionada ao orgulho humano.",
                "5-A torre que aqui foi construída é símbolo de desobediência.",
                "6-O nome da cidade significa 'confusão'.",
                "7-É mencionada no livro de Gênesis.",
                "8-Estava situada perto dos rios Tigre e Eufrates.",
                "9-É também conhecida como Babilônia."

            ]
        },
        {
            "title": "14",
            "hints": [
               "Éden",
                "",
                "DICAS:",
                "1-Foi o primeiro lar da humanidade.",
                "2-Havia quatro rios que o cercavam, incluindo o Tigre e o Eufrates.",
                "3-Deus colocou querubins para guardar sua entrada.",
                "4-Ficava em uma região que hoje seria no Oriente Médio.",
                "5-Não se sabe a localização exata hoje.",
                "6-O pecado original aconteceu nesse jardim."

            ]
        },
        {
            "title": "15",
            "hints": [
                "Galileia",
                "",
                "DICAS:",
                "1-Era a região onde Jesus passou grande parte de seu ministério.",
                "2-Muitos dos apóstolos eram pescadores daqui.",
                "3-O mar da Galileia era o centro de atividade comercial.",
                "4-Canaã, onde Jesus fez seu primeiro milagre, ficava nesta região.",
                "5-Era uma região norte de Israel, em contraste com Judá, ao sul.",
                "6-Foi governada por Herodes Antipas durante a vida de Jesus.",
                "7-Jesus andou sobre as águas aqui.",
                "8-O sermão do monte foi pregado nesta região.",
                "9-Após a ressurreição, Jesus apareceu aos seus discípulos aqui."

            ]
        }
        
        

        
        // Adicione mais perguntas aqui...
    ],
    coisas: [
        {
            title: "1",
            hints: [
                "Urim e Tumim",
                "",
                "DICAS:",
                "1-Eram usados pelo sumo sacerdote para tomar decisões divinas.",
                "2-Eram carregados no peitoral do julgamento.",
                "3-Eles estavam associados à revelação da vontade de Deus.",
                "4-Eram usados para buscar orientação em momentos críticos.",
                "5-Eles eram mencionados no contexto do tabernáculo e templo.",
                "6-Seu uso desapareceu após o exílio babilônico.",
                "7-Estão associados ao sacerdócio de Arão."

            ]
        },
        {
            title: "2",
            hints: [
                "Efode",
                "",
                "DICAS:",
                "1-Era uma peça de roupa usada pelo sumo sacerdote.",
                "2-Era feito de linho fino e adornado com ouro.",
                "3-Estava associado ao culto no tabernáculo.",
                "4-Samuel vestiu um efode mesmo quando era criança.",
                "5-Era considerado uma peça de vestuário de alta santidade.",
                "6-Davi usou um efode ao trazer a Arca da Aliança para Jerusalém.",
                "7-Era feito conforme instruções detalhadas de Deus a Moisés.",
                "8-O efode também foi usado indevidamente em cultos idólatras."

            ]
        },

        {
            "title": "3",
    "hints": [
       "Corvos",
            "",
            "DICAS:",
            "1-Fui usado por Jeová Deus para alimentar Elias enquanto este se achava escondido no vale da torrente de Querite..",
            "2-No cântico de Salmos 147 menciona que Jeová alimentam meus filhotes quando gritam de fome.",
            "3-Jesus me usou de exemplo para mostrar que Jeová dá valor aos seus servos",
            "4-Sou usado como exemplo de punição para aqueles que não obedecem os pais, a Jeová e sua Organização",
            "5-Um príncipe de Midiã, nos dias do juiz Gideão, tinha o nome de Orebe, que o significado era meu Nome.",
            "6-Fui a primeiro animal que Nóe soltou para ver se as aguas tinham baixado."
            

            ]
        },
        {
            "title": "4",
            "hints": [
                "Bastão de Moisés",
            "",
            "DICAS:",
            "1-Transformou-se em uma serpente diante de Faraó.",
            "2-Com ele, Moisés abriu o Mar Vermelho.",
            "3-Foi usado para ferir a rocha e fazer brotar água.",
            "4-Deus o deu a Moisés como símbolo de autoridade.",
            "5-Serviu como um sinal de poder divino no Egito.",
            "6-Foi levantado por Moisés durante a batalha contra Amaleque.",
            "7-Era usado por Moisés para realizar muitos dos milagres no deserto.",
            "8-Era um símbolo de liderança e direção.",
            "9-Representava o poder de Deus atuando através de Moisés."

            ]
        },
        {
            "title": "5",
            "hints": [
                "Trombeta",
            "",
            "DICAS:",
            "1-Era usada para convocar os israelitas para assembleias.",
            "2-Também era usada para anunciar o início de festivais sagrados.",
            "3-Foi feita conforme instruções dadas por Deus a Moisés.",
            "4-O toque desta trombeta era um sinal para que os acampamentos se movessem.",
            "5-Seu som simbolizava a presença de Deus em Israel.",
            "6-Estava relacionada ao tabernáculo e ao serviço do templo.",
            "7-Foi usada na queda das muralhas de Jericó.",
            "8-Simboliza um chamado à adoração e à guerra."

            ]
        },
        {
            "title": "6",
            "hints": [
         "O Livro da Lei",
            "",
            "DICAS:",
            "1-Era mantido pelos levitas ao lado da arca da aliança.",
            "2-Foi escrito por Moisés conforme orientação de Deus.",
            "3-Continha as instruções de Deus para a nação de Israel.",
            "4-Josué o leu diante de toda a nação após a conquista de Canaã.",
            "5-Era consultado pelos reis e sacerdotes para guiar o povo.",
            "6-Foi redescoberto no templo durante o reinado de Josias.",
            "7-Suas palavras eram lidas em voz alta nas assembleias do povo.",
            "8-Era o guia moral e legal de Israel."

            ]
        },
        {
            "title": "7",
            "hints": [
                "Altar de Incenso",
                "Estava localizado no Santo Lugar do tabernáculo.",
                "O incenso era queimado nele duas vezes ao dia.",
                "Representava as orações dos santos subindo a Deus.",
                "Era feito de madeira de acácia e coberto de ouro.",
                "Apenas o sumo sacerdote podia usá-lo no Dia da Expiação.",
                "O fogo para queimar o incenso vinha do altar de sacrifícios.",
                "Era um dos três objetos no Santo Lugar.",
                "O incenso queimado tinha uma fragrância única.",
                "Era considerado um objeto sagrado, separado para o serviço de Deus."
            ]
        },
        {
            "title": "8",
            "hints": [
            "Altar de Incenso",
                "",
                "DICAS:",
                "1-Estava localizado no Santo Lugar do tabernáculo.",
                "2-O incenso era queimado nele duas vezes ao dia.",
                "3-Representava as orações dos santos subindo a Deus.",
                "4-Era feito de madeira de acácia e coberto de ouro.",
                "5-Apenas o sumo sacerdote podia usá-lo no Dia da Expiação.",
                "6-O fogo para queimar o incenso vinha do altar de sacrifícios.",
                "7-Era um dos três objetos no Santo Lugar.",
                "8-O incenso queimado tinha uma fragrância única.",
                "9-Era considerado um objeto sagrado, separado para o serviço de Deus."


            ]
        },
        {
            "title": "9",
            "hints": [
               "A Serpente de Bronze",
                "",
                "DICAS:",
                "1-Foi levantada por Moisés no deserto para curar os israelitas.",
                "2-Era um símbolo de cura e libertação de Deus.",
                "3-Foi destruída pelo rei Ezequias por ter se tornado objeto de idolatria.",
                "4-Era feita de bronze e colocada em um poste.",
                "5-Representava um ato de fé no poder de Deus.",
                "6-Foi criada como resposta a um julgamento de Deus contra a rebelião.",
                "7-Os israelitas haviam reclamado contra Deus e Moisés antes de sua criação.",
                "8-Está mencionada no livro de Números."

            ]
        },
        {
            "title": "10",
            "hints": [
           
            "BALANÇA",
                "",
                "DICAS:",
                "1-Consistia numa barra ou travessão horizontal apoiado no centro numa cavilha (cutelo) ou num cordão.",
                "2-O objeto a ser pesado era colocado num dos pratos (ou pendurado em um dos ganchos).",
                "3-O cavaleiro montado no cavalo preto, descrito em Apocalipse, carregava na mão.",
                "4-Jeová ordenou que houvesse honestidade e exatidão no seu uso.",
                "5-A pequenez dos homens terrenos foi enfatizada por se dizer que são mais leves do que uma exalação sobre 'ela'.",
                "6-As nações foram comparadas com uma camada insignificante de pó em cima dela, do ponto de vista de Jeová."
            ]
        },
        {
            "title": "11",
            "hints": [
                "Arca do Pacto",
                "Continha as tábuas dos Dez Mandamentos.",
                "Foi mantida no Santo dos Santos do tabernáculo.",
                "Era feita de madeira de acácia e coberta de ouro.",
                "Tinha dois querubins de ouro em sua tampa.",
                "Representava a presença de Deus entre o povo de Israel.",
                "Foi carregada pelos levitas quando Israel se movia no deserto.",
                "Foi capturada pelos filisteus, mas devolvida por causa de pragas.",
                "Apenas o sumo sacerdote podia se aproximar dela, uma vez ao ano.",
                "O maná e o bordão de Arão também estavam dentro dela.",
                "Foi perdida após a destruição de Jerusalém pelos babilônios."
            ]
        },
        {
            "title": "12",
            "hints": [
                "Arca do Pacto",
                "",
                "DICAS:",
                "1-Continha as tábuas dos Dez Mandamentos.",
                "2-Foi mantida no Santo dos Santos do tabernáculo.",
                "3-Era feita de madeira de acácia e coberta de ouro.",
                "4-Tinha dois querubins de ouro em sua tampa.",
                "5-Representava a presença de Deus entre o povo de Israel.",
                "6-Foi carregada pelos levitas quando Israel se movia no deserto.",
                "7-Foi capturada pelos filisteus, mas devolvida por causa de pragas.",
                "8-Apenas o sumo sacerdote podia se aproximar dela, uma vez ao ano.",
                "9-O maná e o bordão de Arão também estavam dentro dela.",
                "10-Foi perdida após a destruição de Jerusalém pelos babilônios."

            ]
        },
        {
            "title": "13",
            "hints": [
                "Maná",
                "Foi o alimento que Deus forneceu aos israelitas no deserto.",
                "Parecia pequenas sementes brancas.",
                "Aparecia no chão como orvalho pela manhã.",
                "Tinha gosto de bolos de mel.",
                "Só podia ser recolhido uma vez ao dia, exceto no sábado.",
                "Apodrecia se guardado de um dia para o outro, exceto na sexta-feira.",
                "O nome significa 'O que é isto?'.",
                "Alimentou os israelitas por 40 anos.",
                "Era recolhido em porções de ômer.",
                "Parou de aparecer quando os israelitas entraram na Terra Prometida."
            ]
        },
        {
            "title": "14",
            "hints": [
              "Gafanhoto",
                "",
                "DICAS:",
                "1-Fui usado como alimento.",
                "2-Sou mencionado no livro de Apocalipse.",
                "3-Fui uma das pragas.",
                "4-Meu sabor é parecido ao do camarão ou do caranguejo, e sou rico em proteínas.",
                "5-João, o Batizador, de fato, subsistia à base de mim e mel.",
                "6-Posso transformar uma terra de um estado paradisíaco em um de ermo."

             
            ]
        }
 
               
        
        // Adicione mais perguntas aqui...
    ]
};



// Função para exibir perguntas da categoria selecionada
function showCategory(category) {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    questions[category].forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.onclick = () => toggleHints(index, category);

        const questionNumber = document.createElement('div');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `Carta ${question.title}`;

        const questionTitle = document.createElement('div');
        questionTitle.className = 'question-title';
        questionTitle.textContent = `#${question.title}`;

        const hints = document.createElement('div');
        hints.className = 'hints';
        hints.id = `${category}-hints-${index}`;
        hints.innerHTML = question.hints.map(hint => `<p>${hint}</p>`).join('');

        questionCard.appendChild(questionNumber);
        questionCard.appendChild(questionTitle);
        questionCard.appendChild(hints);
        container.appendChild(questionCard);
    });
}

// Função para mostrar ou esconder dicas
function toggleHints(index, category) {
    const hints = document.getElementById(`${category}-hints-${index}`);
    const card = hints.parentElement;
    
    if (hints.style.display === 'block') {
      hints.style.display = 'none';
      card.classList.remove('active');
    } else {
      hints.style.display = 'block';
      card.classList.add('active');
    }
}

