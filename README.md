# JATEL-GAMES

Coleção de jogos interativos com temas bíblicos para uso em família e congregação.

## Objetivo

Oferecer recursos educativos e de lazer baseados em temas bíblicos, promovendo o aprendizado de forma lúdica, interativa e familiar. Cada jogo foi pensado para ser executado localmente, via navegador, ou implantado com Docker/Netlify.

## Jogos

| Jogo | Descrição | Arquivos principais |
|------|-----------|---------------------|
| **Perguntas** (Tabuleiro Bíblico) | Perguntas estilo Jeopardy com categorias bíblicas. | `perguntas.html`, `game/` |
| **Memória** | Jogo de combinar cartas com imagens bíblicas. | `memoria.html`, `scripts/`, `styles/` |
| **Caça-Palavras** | 26 nomes bíblicos escondidos em grade. | `palavras.html`, `css/` |
| **Forca** | Forca com listas de livros, apóstolos e profetas. | `forca.html`, `assets/` |
| **Descubra a Imagem** | Revelar imagem gradativamente (20 níveis). | `descubra_a_imagem.html`, `game/` |
| **Jogo do Perfil** | Adivinhar pessoa, lugar ou coisa bíblica por pistas. | `jogo_perfil/`, `jogo_perfil.html` |
| **Stop Bíblico** | Jogo de palavras por categorias (8 temas). | `stop_biblico/`, `stop_biblico.html` |
| **Quem disse isso?** | Quiz de 60+ citações bíblicas. | `quem_disse/`, `quem_disse_isso.html` |
| **Desafios de um Jovem** | 40+ cenários de decisão com consequências. | `jovens/` |
| **Cara a Cara** | Adivinhe o personagem secreto do adversário. | `cara-a-cara/`, `cara-a-cara.html` |
| **Jogo da Velha (Tic-Tac-Toe)** | Tabuleiro 3x3 com 3 níveis e 50 perguntas por nível. | `tic-tac-toe/`, `tic-tac-toe.html` |
| **Game Milhão** | Quiz estilo "Quem Quer Ser Milionário" com 3 níveis de 50 perguntas e 30 por partida. | `game-milhao/`, `game-milhao.html` |
| **Coletiva de Imprensa Bíblica** | Jogo de improviso em família com 21 personagens, locais e acontecimentos bíblicos. | `coletiva-imprensa/`, `coletiva-imprensa.html` |

> **Nota de segurança:** arquivos de conexão e API (`php/conexao.php`, `php/ai_responder.php`) são ignorados pelo `.gitignore` e não devem ser expostos publicamente.

## Destaques desta versão

- **Jogo da Velha:** três níveis com 150 perguntas no total, sorteadas sem repetição dentro da partida.
- **Game Milhão:** 150 perguntas divididas em 50 por nível; cada partida usa 10 de cada nível e sorteia novamente ao reiniciar.
- **Coletiva de Imprensa Bíblica:** novo jogo de improviso com 21 personagens, imagens, referências bíblicas, cronômetro e placar.

## Stack Técnica

- **Frontend:** HTML5, CSS3, JavaScript vanilla, jQuery 3.x, Bootstrap 4
- **Design:** Design system customizado (`variables.css`), Google Fonts (Poppins, FontAwesome)
- **Backend/Integração:** PHP (sala de jogo, perguntas, respostas), Docker (Nginx Alpine)
- **Deploy:** Estático (Netlify/Cloudflare via `_redirects`), Docker local

## Como Usar

### 1. Localmente (navegador)

```bash
# Clone o repositório
git clone git@github.com:jeffersonsantos-sp/jatel-jogos.git
cd jatel-jogos

# Abra o arquivo principal em qualquer navegador
open index.html
```

Também é possível abrir diretamente um jogo:

```bash
open tic-tac-toe.html
open game-milhao.html
open coletiva-imprensa.html
```

### 2. Docker

```bash
docker build -t jatel-games .
docker run -p 8080:80 jatel-games
```

Acesse: `http://localhost:8080`

### 3. Deploy Estático (Netlify / Cloudflare Pages)

- O arquivo `_redirects` está configurado para roteamento estático.
- Faça upload direto dos arquivos HTML/JS/CSS para a plataforma escolhida.

### 4. Jogo da Velha (Tic-Tac-Toe) - Instruções Especiais

- O tabuleiro tem 9 células e os jogadores alternam (X / O).
- Antes de iniciar, o jogador escolhe um dos 3 níveis:
  - **Básico:** 50 perguntas, sendo 15 de *Meu Livro de Histórias Bíblicas*, 15 de *Imite a Sua Fé* e 20 de *Jesus — o Caminho, a Verdade e a Vida*.
  - **Científico:** 50 perguntas baseadas em *A Vida — Teve um Criador?*.
  - **Profético:** 50 perguntas, sendo 25 de *Profecia de Isaías — Uma Luz para Toda a Humanidade I* e 25 de *Viva Tendo em Mente o Dia de Jeová*.
- As perguntas são embaralhadas a cada início ou reinício, sem repetir dentro da mesma partida até o banco esgotar.
- Trocar de nível zera o placar; o botão **Novo Jogo** mantém o placar e sorteia uma nova sequência.
- O modal mostra a categoria e a referência da história ou capítulo da pergunta.
- Os quadrados foram otimizados para maior nitidez (bordas sólidas, sombra reforçada e destaque para o vencedor).

### 5. Game Milhão - Instruções Especiais

- Cada nível possui 50 perguntas, totalizando 150:
  - **Iniciante:** *Aprenda com as Histórias da Bíblia*.
  - **Médio:** *Ande Corajosamente com Deus*.
  - **Difícil:** *De Testemunho Cabal*.
- Cada partida usa 30 perguntas: **10 de cada nível**, na ordem P1–P10, P11–P20 e P21–P30.
- A seleção é sorteada novamente a cada reinício, mantendo os limites dos níveis.
- A ajuda **Trocar Pergunta** sorteia outra pergunta do mesmo nível, sem repetir as já usadas na partida.
- A premiação inclui patamares de segurança em P5, P10, P15, P20 e P25.

### 6. Coletiva de Imprensa Bíblica - Instruções Especiais

- O jogo sorteia um dos 21 personagens bíblicos, sem repetir dentro da mesma sessão.
- A tela dos repórteres mostra a imagem, o personagem, o local e o acontecimento. Essa tela não deve ser vista pelo entrevistado.
- O entrevistado responde às perguntas da família sem saber a identidade e, ao final, tenta adivinhar quem é, onde está e o que aconteceu.
- O cronômetro pode ser de 2 ou 3 minutos; a revelação mostra a referência bíblica para leitura em família.
- O placar soma os acertos e a sessão termina depois que todos os personagens forem usados.

## Estrutura do Projeto

```text
jatel-family-main/
├── index.html                 # Página principal com navegação
├── games.html                 # Listagem completa de jogos
├── tic-tac-toe.html           # Jogo da Velha
├── tic-tac-toe/               # Estilos, lógica e perguntas do jogo
│   ├── style.css
│   ├── game.js
│   ├── questions-nivel1.js
│   ├── questions-nivel2.js
│   └── questions-nivel3.js
├── game-milhao.html           # Jogo do Milhão
├── game-milhao/               # Lógica, estilos e banco de perguntas
│   ├── game.js
│   ├── questions.js
│   └── style.css
├── coletiva-imprensa.html     # Jogo de improviso bíblico
├── coletiva-imprensa/         # Dados, estilos e imagens da coletiva
│   ├── game.js
│   ├── personagens.js
│   ├── style.css
│   └── imagens/
├── cara-a-cara/               # Jogo cara-a-cara (personagens bíblicos)
│   ├── game.js
│   ├── style.css
│   └── imagem/                # Imagens dos personagens
├── jogo_perfil/               # Jogo do perfil bíblico
├── jovens/                    # Desafios de um jovem
├── quem_disse/                # Quiz de citações
├── stop_biblico/              # Stop bíblico
├── memoria.html               # Jogo da memória
├── perguntas.html             # Tabuleiro de perguntas
├── css/                       # Design system e estilos compartilhados
├── assets/                    # Scripts e estilos da forca
├── js/                        # Bibliotecas (jQuery, Bootstrap)
├── php/                       # Backend para sala de jogo / respostas
├── sql/                       # Scripts do banco (não versionados)
├── images/                    # Imagens e thumbnails
├── Dockerfile                 # Deploy com Docker (Nginx Alpine)
├── .gitignore                 # Protege credenciais
├── _redirects                 # Configuração para deploy estático
└── README.md                  # Este arquivo
```

## Configuração dos Arquivos PHP (Local)

Os arquivos `php/conexao.php` e `php/ai_responder.php` **não são versionados** (protegidos pelo `.gitignore`). Para rodar o backend localmente, crie-os manualmente conforme os templates abaixo e preencha com suas credenciais:

### 1. `php/conexao.php`

```php
<?php
// Template local — NÃO COMMITAR
define('DB_HOST', 'localhost');
define('DB_NAME', 'nome_do_banco');
define('DB_USER', 'seu_usuario');
define('DB_PASS', 'sua_senha_segura'); // <-- preencha aqui

// Conexão PDO
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    die("Erro de conexão: " . $e->getMessage());
}
```

### 2. `php/ai_responder.php`

```php
<?php
// Template local — NÃO COMMITAR
$apiKey = 'sk-sua-chave-aqui'; // <-- substitua pela sua chave

// Exemplo de uso:
// $headers = ['Authorization: Bearer ' . $apiKey];
```

> **Importante:** mantenha esses arquivos apenas na sua máquina. Se precisar compartilhar o projeto, remova ou ignore as credenciais antes do commit.

## Licença e Uso

Projeto educacional e de lazer. Pode ser usado livremente para fins familiares, educacionais e congregacionais. Mantenha os créditos e não exponha credenciais de banco ou API.

## Autor

Jefferson Santos — v5.1
