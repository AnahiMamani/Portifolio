# Portfólio — Anahi Narieli

Portfólio acadêmico e profissional estático, em português, com HTML semântico, CSS e JavaScript. Preserva a identidade creme, verde, laranja, tipografia serifada e estrelas do projeto original.

**Status: versão de revisão.** Os seis projetos acadêmicos e a participação individual estão registrados. Restam informações complementares de cursos e experiência, descritas em [docs/PENDENCIAS.md](docs/PENDENCIAS.md).

## Visualizar

Abra `index.html` no navegador. Não é necessário instalar dependências nem executar um build.

Opcionalmente, na pasta do projeto:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`.

## Estrutura

- `index.html`: apresentação, projetos, formação, experiência, tecnologias, cursos, idiomas e contato.
- `projetos/`: dez páginas independentes (seis projetos acadêmicos e quatro adicionais) com descrição, stack, participação, registros visuais e repositório.
- `assets/images/`: retrato e favicon.
- `assets/projects/`: registros visuais dos projetos.
- `assets/fonts/`: tipografia original reutilizada.
- `css/variables.css`: cores e tipografia.
- `css/base.css`: regras gerais, acessibilidade e elementos compartilhados.
- `css/components.css`: navegação, cards, filtros e rodapé.
- `css/home.css` e `css/project.css`: layouts específicos.
- `css/responsive.css`: adaptação por largura e impressão.
- `js/main.js`: menu, filtros acadêmicos e galeria ampliável, com melhoria progressiva.
- `docs/`: pendências, fontes e validação.
- `tests/validate.py`: verificação de caminhos locais, âncoras e semântica básica, sem dependências.

## Manutenção

Edite os textos diretamente no HTML. Cada projeto possui seu próprio arquivo. Ao adicionar um projeto, copie uma página existente, atualize seu conteúdo e acrescente o card em `index.html`. Ajuste também o link de próximo projeto.

Substitua screenshots em `assets/projects/` e atualize o texto alternativo e a legenda para corresponder à imagem. Não use imagens ilustrativas como comprovação do funcionamento do software.

Os filtros aceitam `web`, `mobile` e `desktop` no atributo `data-category` dos cards em `#academic-grid`. Os quatro projetos adicionais ficam em uma seção expansível. Sem JavaScript, todos os projetos e a navegação continuam disponíveis; os links das imagens abrem os arquivos diretamente. Com JavaScript, a galeria permite ampliar, navegar com as setas e fechar com Escape, devolvendo o foco à miniatura.

## Publicar no GitHub Pages

1. Revise a branch `portfolio-redesign-2026` e complete as pendências de conteúdo.
2. Faça o merge da revisão aprovada na `master`.
3. No GitHub, abra **Settings → Pages**. Para publicação por branch, use **Deploy from a branch**, branch **master**, pasta **/(root)**.
4. Aguarde a publicação e abra `https://anahimamani.github.io/Portifolio/`.
5. Confirme a home, uma página interna e as imagens após o deploy.

Todos os recursos do site usam caminhos relativos e funcionam sob `/Portifolio/`. O arquivo `.nojekyll` evita processamento Jekyll. O site não precisa de backend, npm, React, Vite ou variáveis de ambiente.

Referência: [documentação oficial de publicação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

A configuração atual do Pages não foi alterada. Esta revisão não foi publicada nem mesclada à `master`.

## Validar

```bash
python3 tests/validate.py
```

Veja o escopo dos testes de navegador e suas limitações em [docs/VALIDACAO.md](docs/VALIDACAO.md).
