# Treinamento SEMIL - ReflorestaSP

Este projeto usa MkDocs com o tema Material for MkDocs para organizar uma plataforma de treinamento interno sobre a plataforma ReflorestaSP.

## Como instalar o MkDocs

1. Abra o terminal na pasta do projeto.
2. Crie um ambiente virtual, se desejar:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

3. Instale as dependências:

```powershell
python -m pip install -r requirements.txt
```

Se preferir instalar manualmente:

```powershell
python -m pip install mkdocs mkdocs-material
```

## Como abrir o site localmente

Execute:

```powershell
python -m mkdocs serve
```

Depois acesse o endereço exibido no terminal, geralmente:

```text
http://127.0.0.1:8000
```

## Como editar aulas

As aulas ficam na pasta `docs/`, em arquivos Markdown `.md`.

Exemplo:

```text
docs/aula-01-visao-geral.md
```

Para alterar uma aula, abra o arquivo correspondente, edite o texto e salve. O MkDocs atualiza o site local automaticamente enquanto o comando `python -m mkdocs serve` estiver rodando.

## Como adicionar imagens

1. Coloque as imagens na pasta:

```text
docs/images/
```

2. Use a imagem dentro da aula com Markdown:

```markdown
![Descrição da imagem](images/nome-da-imagem.png)
```

Use nomes simples, sem espaços, como `painel-inicial.png` ou `cadastro-area.jpg`.

## Como adicionar vídeos

1. Coloque os vídeos MP4 na pasta:

```text
docs/videos/
```

2. Insira o vídeo na aula usando HTML:

```html
<video controls width="100%">
  <source src="videos/aula-01.mp4" type="video/mp4">
  Seu navegador não suporta vídeo HTML5.
</video>
```

## Como adicionar PDFs

1. Coloque os PDFs na pasta:

```text
docs/pdfs/
```

2. Crie o link na aula:

```markdown
[Baixar material complementar](pdfs/material-complementar-aula-01.pdf)
```

## Como adicionar slides

1. Coloque os arquivos de slides na pasta:

```text
docs/slides/
```

2. Crie o link na aula:

```markdown
[Acessar slides da aula](slides/aula-01.pdf)
```

## Como gerar a versão final

Execute:

```powershell
python -m mkdocs build
```

O site final será gerado na pasta `site/`.

## Como publicar no GitHub Pages

Depois de configurar o repositório remoto no GitHub, execute:

```powershell
python -m mkdocs gh-deploy
```

Esse comando gera o site e publica o conteúdo no branch usado pelo GitHub Pages.
