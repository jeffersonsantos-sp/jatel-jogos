# JATEL-GAMES

Colecao de jogos interativos com temas biblicos para uso em familia e congregacao.

## Objetivo

Oferecer recursos educativos e de lazer baseados em temas biblicos, promovendo o aprendizado de forma ludica, interativa e familiar. Cada jogo foi pensado para ser executado localmente, via navegador, ou implantado com Docker/Netlify.

## Jogos

| Jogo | Descricao | Arquivos Principais |
|------|-----------|---------------------|
| **Perguntas** (Tabuleiro Biblico) | Perguntas estilo Jeopardy com categorias biblicas. | `perguntas.html`, `game/` |
| **Memoria** | Jogo de combinar cartas com imagens biblicas. | `memoria.html`, `scripts/`, `styles/` |
| **Caca-Palavras** | 26 nomes biblicos escondidos em grade. | `palavras.html`, `css/` |
| **Forca** | Forca com listas de livros, apostolos e profetas. | `forca.html`, `assets/` |
| **Descubra a Imagem** | Revelar imagem gradativamente (20 niveis). | `descubra_a_imagem.html`, `game/` |
| **Jogo do Perfil** | Adivinhar pessoa/lugar/coisa biblica por pistas. | `jogo_perfil/`, `jogo_perfil.html` |
| **Stop Biblico** | Jogo de palavras por categorias (8 temas). | `stop_biblico/`, `stop_biblico.html` |
| **Quem disse isso?** | Quiz de 60+ citacoes biblicas. | `quem_disse/`, `quem_disse_isso.html` |
| **Desafios de um Jovem** | 40+ cenarios de decisao com consequencias. | `jovens/` |
| **Cara a Cara** | Adivinhe o personagem secreto do adversario. | `cara-a-cara/`, `cara-a-cara.html` |
| **Jogo da Velha (Tic-Tac-Toe)** | Tabuleiro 3x3 com perguntas biblicas por jogada. | `tic-tac-toe/`, `tic-tac-toe.html` |
| **Game Milhao** | Quiz estilo "Quem Quer Ser Milionario" sobre temas biblicos. | `game-milhao/`, `game-milhao.html` |

> **Nota de seguranca:** arquivos de conexao e API (`php/conexao.php`, `php/ai_responder.php`) sao ignorados pelo `.gitignore` e nao devem ser expostos publicamente.

## Stack Tecnica

- **Frontend:** HTML5, CSS3, JavaScript vanilla, jQuery 3.x, Bootstrap 4
- **Design:** Design system custom (`variables.css`), Google Fonts (Poppins, FontAwesome)
- **Backend/Integracao:** PHP (sala de jogo, perguntas, respostas), Docker (Nginx Alpine)
- **Deploy:** Estatico (Netlify/Cloudflare via `_redirects`), Docker local

## Como Usar

### 1. Localmente (navegador)

```bash
# Clone o repositorio
git clone git@github.com:jeffersonsantos-sp/jatel-jogos.git
cd jatel-jogos

# Abra o arquivo principal em qualquer navegador
open index.html
# ou acesse diretamente um jogo:
open tic-tac-toe.html
```

### 2. Docker

```bash
docker build -t jatel-games .
docker run -p 8080:80 jatel-games
```

Acesse: `http://localhost:8080`

### 3. Deploy Estatico (Netlify / Cloudflare Pages)

- O arquivo `_redirects` esta configurado para roteamento estatico.
- Upload direto dos arquivos HTML/JS/CSS para a plataforma escolhida.

### 4. Jogo da Velha (Tic-Tac-Toe) - Instrucoes Especiais

- O tabuleiro tem 9 celulas.
- Jogadores alternam (X / O).
- A cada jogada, uma pergunta biblica pode ser apresentada via modal (`questions.js`).
- Os quadrados foram otimizados para maior nitidez (bordas solidas, sombra reforcada, destaque para vencedor).

## Estrutura do Projeto

```
jatel-family-main/
├── index.html                 # Pagina principal com navegacao
├── games.html                 # Listagem completa de jogos
├── tic-tac-toe.html           # Jogo da Velha
├── tic-tac-toe/               # Estilos, logica e perguntas do jogo
│   ├── style.css
│   ├── game.js
│   └── questions.js
├── cara-a-cara/               # Jogo cara-a-cara (personagens biblicos)
│   ├── game.js
│   ├── style.css
│   └── imagem/                # Imagens dos personagens
├── jogo_perfil/               # Jogo do perfil biblico
├── jovens/                    # Desafios de um jovem
├── quem_disse/                # Quiz de citacoes
├── stop_biblico/              # Stop biblico
├── game-milhao/               # Quiz de milhoes
├── memoria.html               # Jogo da memoria
├── perguntas.html             # Tabuleiro de perguntas
├── css/                       # Design system e estilos compartilhados
├── assets/                    # Scripts e estilos da forca
├── js/                        # Bibliotecas (jQuery, Bootstrap)
├── php/                       # Backend para sala de jogo / respostas
├── sql/                       # Scripts do banco (nao versionados)
├── images/                    # Imagens e thumbnails
├── Dockerfile                 # Deploy com Docker (Nginx Alpine)
├── .gitignore                 # Protege credenciais
├── _redirects                 # Configuracao para deploy estatico
└── README.md                  # Este arquivo
```

## Autor

Jefferson Santos — v5.0 (atualizado com melhorias de visual, .gitignore e documentacao completa)

## Licenca / Uso

Projeto educacional e de lazer. Pode ser usado freely para fins familiares, educacionais e congregacionais. Mantenha os creditos e nao exponha credenciais de banco/API.
