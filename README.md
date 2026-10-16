# JATEL-GAMES

Colecao de jogos interativos com temas biblicos para uso em familia e congregacao.

## Jogos

| Jogo | Descricao |
|------|-----------|
| Perguntas | Tabuleiro de perguntas biblicas estilo Jeopardy |
| Memoria | Jogo de combinar cartas com imagens |
| Caca-Palavras | 26 nomes biblicos escondidos em grade |
| Forca | Forca com listas de livros, apostolos e profetas |
| Descubra a Imagem | Revelar imagem gradativamente (20 niveis) |
| Jogo do Perfil | Adivinhar pessoa/lugar/coisa biblica por pistas |
| Stop Biblico | Jogo de palavras por categorias (8 temas) |
| Quem disse isso? | Quiz de 60+ citacoes biblicas |
| Desafios de um Jovem | 40+ cenarios de decisao com consequencias |

## Stack

- HTML5, CSS3, JavaScript vanilla
- Bootstrap 4 (index.html)
- jQuery 3.x
- Google Fonts (Poppins)
- Docker (Nginx Alpine)

## Como Executar

### Localmente
Basta abrir `index.html` em qualquer navegador.

### Docker
```bash
docker build -t jatel-games .
docker run -p 8080:80 jatel-games
```

Acesse http://localhost:8080

### Netlify/Cloudflare
O arquivo `_redirects` ja esta configurado para deploy estatico.

## Estrutura

```
jatel-family-main/
├── index.html              # Pagina principal
├── css/
│   ├── variables.css       # Design system (cores, espacamentos)
│   ├── style.css           # Estilos compartilhados
│   ├── responsive.css      # Media queries
│   └── main.css            # Estilos do caca-palavras
├── assets/                 # Estilos e scripts da forca
├── game/                   # Desafios da imagem (20 niveis)
├── jogo_perfil/            # Jogo do perfil biblico
├── jovens/                 # Desafios de um jovem
├── quem_disse/             # Quem disse isso?
├── scripts/                # Jogo da memoria
├── stop_biblico/           # Stop biblico
├── styles/                 # Estilos da memoria
├── images/                 # Imagens e thumbnails
├── img/                    # Imagens dos cartoes
├── js/                     # Bibliotecas (jQuery, Bootstrap)
├── fonts/                  # Fontes (Poppins, FontAwesome)
└── Dockerfile              # Deploy com Docker
```

## Autor

Jefferson Santos - v5.0
