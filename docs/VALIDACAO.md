# Validação da revisão

Data: 6 de outubro de 2026.

## Resultado

- **11 páginas × 5 larguras = 55 combinações** verificadas em Chromium headless via Playwright.
- Larguras: **360, 390, 768, 1024 e 1440 px**.
- Nenhuma rolagem horizontal indevida detectada nessas combinações.
- Nenhuma imagem quebrada após aguardar o carregamento das imagens, inclusive as de carregamento tardio.
- Nenhum erro de JavaScript ou resposta HTTP de erro nos recursos do portfólio durante esses testes.
- Um `h1` por página.
- Menu mobile abre e fecha; Escape fecha e devolve o foco ao botão.
- Filtro Mobile exibe Poupas e Greenhouse; Todos restaura os seis projetos acadêmicos.
- Conteúdo, cards e navegação permanecem disponíveis com JavaScript desabilitado.
- Galeria abre, avança e retorna com as setas; Escape fecha e devolve o foco à miniatura original.
- Galeria aberta também passou pela verificação automática de acessibilidade.
- Caminhos locais, imagens, fontes, links internos e âncoras validados pelo script `tests/validate.py`.
- **Axe-core: nenhuma violação automática detectada** nas onze páginas e com a galeria aberta para as regras WCAG 2 A/AA e WCAG 2.1 AA. A nova revisão identificou contraste insuficiente nos botões secundários dos projetos; as cores foram corrigidas e a verificação foi repetida.
- Inspeção visual da home em desktop, tablet e mobile e da página Pindorama em desktop.
- `git diff --check` sem erros.

O servidor local serviu o site em um subdiretório (`/portfolio/`), validando a resolução relativa de recursos para uma publicação do tipo `/Portifolio/`.

## Evidências

- [Prévia desktop](preview-desktop.png)
- [Prévia mobile](preview-mobile.png)
- [Resultados por página e largura](viewport-results.json)
- [Resultados axe-core](accessibility-results.json)
- [Galeria no celular](preview-gallery-mobile.png)

As prévias são imagens estáticas da interface, não um endereço publicado.

## Limites

- Testes executados em Chromium; Safari, Firefox, aparelhos físicos e leitores de tela não foram testados.
- O resultado do axe-core não substitui auditoria manual completa de acessibilidade.
- Repositórios externos foram acessados e suas URLs confirmadas pelo GitHub. O LinkedIn é o endereço fornecido pela autora; sua página bloqueou leitura automatizada, portanto não foi validada como sessão autenticada.
- Não foi executado deploy da nova versão no Pages. O resultado é compatível com hospedagem estática, mas a publicação precisa ser confirmada após o merge.
- Capturas das aplicações de terceiros são limitadas às telas descritas em `FONTES.md` e `PENDENCIAS.md`; não representam teste funcional completo daqueles projetos.
- A sequência dos semestres e a participação individual foram confirmadas pela autora. Os dados complementares de cursos e as telas do Greenhouse continuam pendentes.
