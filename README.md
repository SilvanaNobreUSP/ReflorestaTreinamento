# Treinamento SEMIL - ReflorestaSP

Plataforma de treinamento interno da SEMIL sobre o uso da ReflorestaSP.

O projeto usa MkDocs com o tema Material for MkDocs. As aulas ficam em arquivos Markdown dentro da pasta `docs/`, com suporte a imagens, vídeos, slides e materiais complementares em PDF.

## Estrutura

```text
mkdocs.yml
docs/
  index.md
  aula-01-visao-geral.md
  ...
  aula-11-encerramento.md
  assets/
  images/
  pdfs/
  slides/
  stylesheets/
  videos/
README-local.md
requirements.txt
```

## Rodar localmente

Instale as dependências:

```powershell
python -m pip install -r requirements.txt
```

Inicie o servidor local:

```powershell
python -m mkdocs serve
```

Acesse:

```text
http://127.0.0.1:8000
```

## Gerar o site final

```powershell
python -m mkdocs build
```

## Publicar no GitHub Pages

```powershell
python -m mkdocs gh-deploy
```

Consulte o arquivo `README-local.md` para instruções completas de edição, inclusão de imagens, vídeos, PDFs e slides.
