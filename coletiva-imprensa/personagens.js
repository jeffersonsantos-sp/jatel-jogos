const PERSONAGENS = [
  {
    id: "jonas",
    nome: "Jonas",
    imagem: "coletiva-imprensa/imagens/1-jonas.jpg",
    onde: "Na praia, após ser vomitado pelo grande peixe.",
    aconteceu: "Tentou fugir de uma designação de Jeová, passou três dias no escuro e foi vomitado na costa.",
    referencia: "Jonas 1:17–3:3",
    livro: "Jonas",
    testamento: "Antigo Testamento"
  },
  {
    id: "davi",
    nome: "Davi",
    imagem: "coletiva-imprensa/imagens/2-davi.jpg",
    onde: "No vale de Elá, diante do gigante Golias.",
    aconteceu: "Rejeitou a armadura do rei e pegou cinco pedras lisas no ribeiro.",
    referencia: "1 Samuel 17:38-40",
    livro: "1 Samuel",
    testamento: "Antigo Testamento"
  },
  {
    id: "jose",
    nome: "José",
    imagem: "coletiva-imprensa/imagens/3-jose-manta.jpeg",
    onde: "Em Canaã, diante de seus irmãos.",
    aconteceu: "Recebeu do pai uma túnica colorida, o que deixou os irmãos com ciúmes.",
    referencia: "Gênesis 37:3-4",
    livro: "Gênesis",
    testamento: "Antigo Testamento"
  },
  {
    id: "jefte",
    nome: "Jefté",
    imagem: "coletiva-imprensa/imagens/4-jefte.jpeg",
    onde: "No portal da sua casa, em Mispa.",
    aconteceu: "Voltou vitorioso da guerra e sua única filha saiu correndo para recebê-lo com pandeiros.",
    referencia: "Juízes 11:30-35",
    livro: "Juízes",
    testamento: "Antigo Testamento"
  },
  {
    id: "rebeca",
    nome: "Rebeca",
    imagem: "coletiva-imprensa/imagens/5-rebeca.jpg",
    onde: "Junto a uma fonte de água.",
    aconteceu: "Tirou água do poço não só para o servo de Abraão, mas também para os dez camelos sedentos dele.",
    referencia: "Gênesis 24:15-20",
    livro: "Gênesis",
    testamento: "Antigo Testamento"
  },
  {
    id: "daniel",
    nome: "Daniel",
    imagem: "coletiva-imprensa/imagens/6-daniel.jpg",
    onde: "Na cova dos leões.",
    aconteceu: "Passou a noite inteira trancado com feras famintas que não morderam ninguém.",
    referencia: "Daniel 6:16-23",
    livro: "Daniel",
    testamento: "Antigo Testamento"
  },
  {
    id: "samuel",
    nome: "Samuel",
    imagem: "coletiva-imprensa/imagens/7-samuel.jpeg",
    onde: "Deitado na sua cama, no tabernáculo de Siló.",
    aconteceu: "Ouviu uma voz chamando seu nome de madrugada e achou que era o idoso Eli.",
    referencia: "1 Samuel 3:1-10",
    livro: "1 Samuel",
    testamento: "Antigo Testamento"
  },
  {
    id: "esposa-de-lo",
    nome: "A esposa de Ló",
    imagem: "coletiva-imprensa/imagens/8-esposa-lo.jpeg",
    onde: "Na estrada saindo de Sodoma.",
    aconteceu: "Olhou para trás com saudade da cidade e virou uma estátua de sal.",
    referencia: "Gênesis 19:17, 26",
    livro: "Gênesis",
    testamento: "Antigo Testamento"
  },
  {
    id: "nabucodonosor",
    nome: "O rei Nabucodonosor",
    imagem: "coletiva-imprensa/imagens/9-nabucodonosor.jpeg",
    onde: "Nos pastos da Babilônia, comendo capim.",
    aconteceu: "Ficou louco por causa do seu orgulho e passou sete anos vivendo como um animal, com cabelos compridos e unhas de ave.",
    referencia: "Daniel 4:28-33",
    livro: "Daniel",
    testamento: "Antigo Testamento"
  },
  {
    id: "elias",
    nome: "O profeta Elias",
    imagem: "coletiva-imprensa/imagens/10-elias.jpeg",
    onde: "No monte Carmelo.",
    aconteceu: "Desafiou centenas de falsos profetas e viu o fogo cair do céu para queimar o altar encharcado.",
    referencia: "1 Reis 18:22-39",
    livro: "1 Reis",
    testamento: "Antigo Testamento"
  },
  {
    id: "sansao",
    nome: "Sansão",
    imagem: "coletiva-imprensa/imagens/11-sansao.jpeg",
    onde: "No templo de Dagom, entre as colunas principais.",
    aconteceu: "Ficou cego, mas recuperou as forças para empurrar os pilares do prédio.",
    referencia: "Juízes 16:21-30",
    livro: "Juízes",
    testamento: "Antigo Testamento",
    pergunta: "Essa sua nova força tem alguma relação com o fato de você ter quebrado o protocolo do salão de beleza?"
  },
  {
    id: "salomao",
    nome: "O rei Salomão",
    imagem: "coletiva-imprensa/imagens/12-salomao.jpeg",
    onde: "No palácio real, no tribunal.",
    aconteceu: "Propôs cortar um bebê ao meio com uma espada para descobrir quem era a mãe verdadeira.",
    referencia: "1 Reis 3:16-28",
    livro: "1 Reis",
    testamento: "Antigo Testamento",
    pergunta: "Essa sua técnica de julgamento não é um pouco radical demais para uma disputa de guarda?"
  },
  {
    id: "adao",
    nome: "Adão",
    imagem: "coletiva-imprensa/imagens/13-adao.jpeg",
    onde: "No Jardim do Éden, escondido atrás de arbustos.",
    aconteceu: "Acabou de comer o fruto proibido e percebeu que estava sem roupas.",
    referencia: "Gênesis 3:6-10",
    livro: "Gênesis",
    testamento: "Antigo Testamento"
  },
  {
    id: "pedro",
    nome: "Pedro",
    imagem: "coletiva-imprensa/imagens/14-pedro.jpeg",
    onde: "No meio do Mar da Galileia, durante uma tempestade.",
    aconteceu: "Saiu do barco para caminhar sobre a água, mas começou a afundar por sentir medo do vento.",
    referencia: "Mateus 14:28-31",
    livro: "Mateus",
    testamento: "Novo Testamento"
  },
  {
    id: "miria",
    nome: "Miriã",
    imagem: "coletiva-imprensa/imagens/15-miria.jpeg",
    onde: "Nas margens do rio Nilo, escondida no mato.",
    aconteceu: "Ficou vigiando de longe o cestinho de papiro onde estava o seu irmãozinho bebê.",
    referencia: "Êxodo 2:1-10",
    livro: "Êxodo",
    testamento: "Antigo Testamento"
  },
  {
    id: "sara",
    nome: "Sara",
    imagem: "coletiva-imprensa/imagens/16-sara.jpeg",
    onde: "Na entrada da tenda, em Manre.",
    aconteceu: "Escutou escondida que seria mãe aos 90 anos e deu uma risada de incredulidade.",
    referencia: "Gênesis 18:9-15",
    livro: "Gênesis",
    testamento: "Antigo Testamento"
  },
  {
    id: "gideao",
    nome: "Gideão",
    imagem: "coletiva-imprensa/imagens/17-gideao.jpeg",
    onde: "Perto do arraial dos midianitas.",
    aconteceu: "Teve seu exército reduzido a 300 homens armados apenas com buzinas, jarros e tochas.",
    referencia: "Juízes 7:1-22",
    livro: "Juízes",
    testamento: "Antigo Testamento"
  },
  {
    id: "mulher-samaritana",
    nome: "A mulher samaritana",
    imagem: "coletiva-imprensa/imagens/18-mulher_samaritana.jpeg",
    onde: "No poço de Jacó, ao meio-dia.",
    aconteceu: "Foi buscar água na hora mais quente para evitar as pessoas, mas encontrou o Messias.",
    referencia: "João 4:6-30",
    livro: "João",
    testamento: "Novo Testamento",
    pergunta: "A senhora veio buscar água física, mas parece que vai voltar para a cidade com uma fonte jorrando por dentro?"
  },
  {
    id: "moises",
    nome: "Moisés",
    imagem: "coletiva-imprensa/imagens/19-moises.jpeg",
    onde: "Diante do Mar Vermelho.",
    aconteceu: "Estendeu o bastão e a água se dividiu em duas muralhas.",
    referencia: "Êxodo 14:21-22",
    livro: "Êxodo",
    testamento: "Antigo Testamento"
  },
  {
    id: "eliseu",
    nome: "O profeta Eliseu",
    imagem: "coletiva-imprensa/imagens/20-eliseu.jpeg",
    onde: "No caminho para Betel.",
    aconteceu: "Foi zombado por um grupo de rapazes por ser calvo, e duas ursas saíram do bosque.",
    referencia: "2 Reis 2:23-24",
    livro: "2 Reis",
    testamento: "Antigo Testamento"
  },
  {
    id: "noe",
    nome: "Noé",
    imagem: "coletiva-imprensa/imagens/21-noe.jpeg",
    onde: "Na janela da arca.",
    aconteceu: "Soltou um corvo e depois uma pomba para ver se a terra já tinha secado.",
    referencia: "Gênesis 8:6-12",
    livro: "Gênesis",
    testamento: "Antigo Testamento",
    pergunta: "O senhor contratou essas aves para fazerem o serviço de meteorologia da família?"
  }
];
