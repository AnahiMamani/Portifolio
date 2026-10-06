# Fontes de conteúdo e decisões

Revisão realizada em 6 de outubro de 2026.

## Materiais recebidos

- `Texto colado(20261006-104710).txt`: instruções de refatoração, identidade, privacidade, responsividade e entrega.
- `FATEC-2026-1S-LDM-Requisição dos Portfólios(2).pdf`: requisitos oficiais.
- `Profile(1).pdf`: nome, formação, experiências, competências, idiomas e títulos de certificações. Não incorporado ao site por conter contato pessoal.
- `Portifolio-master(1).zip`: código e assets originais; fotografia reutilizada.
- `image(20261006-105142).png`: referência visual; usada como inspiração, sem reutilizar retrato, nome ou dados da pessoa da referência.

O ZIP e a `master` remota foram comparados antes da implementação. A revisão partiu do commit `dd6c36a73d9395318967e21832afab3fce5ad466`.

## Repositórios

- [Perfil profissional no GitHub](https://github.com/AnahiMamani/AnahiMamani): foco em dados, cloud, backend e stack declarada.
- [Pindorama](https://github.com/AnahiMamani/sistema-web-pindorama): README, dependências e captura local da tela `/login`.
- [Seren](https://github.com/AnahiMamani/sistema-gerenciamento-psicologia): README, dependências e captura local da tela inicial.
- [Pipeline](https://github.com/AnahiMamani/gcp-sqlserver-to-bigquery-medallion): README e fluxo Medallion.
- [ConnectStudents](https://github.com/AnahiMamani/Projeto): README e imagens `Prints tirados/Versão praticamente final.png` e `Prints tirados/areaPublicarAberto.png`.
- [Rosycoffee](https://github.com/AnahiMamani/Rosycoffee): páginas HTML/CSS e captura local.
- [PetCare](https://github.com/AnahiMamani/pet-project): código e captura local.

A existência de uma tecnologia no projeto não comprova uso individual pela autora. Essa distinção está explicitada nas páginas.

## Visual e arquitetura

HTML/CSS/JavaScript atende ao escopo sem build. Páginas HTML reais evitam dependência de roteamento de SPA no GitHub Pages. A home mantém conteúdo legível sem JavaScript, com filtros e menu como melhoria progressiva.

A fonte Arsenica foi reutilizada do portfólio original, sem substituição ou aquisição de nova licença. Retrato e fonte mantêm os direitos e condições originais. O favicon em SVG e os ornamentos em CSS/texto foram criados para esta revisão.

As screenshots de Pindorama, Seren, Rosycoffee e PetCare são capturas das interfaces reais locais; não foram redesenhadas. A composição do pipeline é HTML/CSS e está rotulada como esquema editorial, não como screenshot.

## Atualização dos seis projetos acadêmicos

O relato de Anahi de 6 de outubro de 2026 é a fonte principal para atribuição individual, liderança de Scrum, organização, documentação e sequência dos semestres. Os repositórios foram consultados para conferir a arquitetura e as tecnologias. A ausência de commits individuais não foi tratada como ausência de contribuição.

- [Super Válido](https://github.com/Best-of-the-class/SuperValido): protótipo estático HTML/CSS/JavaScript; o relato corrigiu a lembrança inicial de banco implementado.
- [Peregrine](https://github.com/Best-of-the-class/Peregrine): dependências confirmam Node.js/Express, Handlebars, MySQL e Sequelize. Handlebars é a camada de templates, não a linguagem do backend. O script SQL original perdido não foi recuperado.
- [Seren](https://github.com/Best-of-the-class/sistema-gerenciamento-psicologia): interface React, backend JavaScript e MongoDB.
- [API Pindorama](https://github.com/Best-of-the-class/api-pindorama) e [interface Pindorama](https://github.com/Best-of-the-class/sistema-web-pindorama): Rails, PostgreSQL e Cloudinary; controller/mailer de contato corroboram o fluxo de e-mail. A stack da API prevalece sobre a descrição genérica do portfólio de referência.
- [Poupas](https://github.com/Best-of-the-class/Poupas) e [Extrato API](https://github.com/Best-of-the-class/Extrato_API): Flutter/Dart na atuação da autora; C#/.NET e PostgreSQL na solução completa. Registros da autora incluem avatar (`362a1d5a`), boas-vindas (`0452db3f`), responsividade de login (`c51e2504`) e dicionário/flashcards (`462c19ce`). Arquivos de plataforma em C/C++/Swift e código Go de outra integrante não foram atribuídos à autora.
- [Greenhouse](https://github.com/Best-of-the-class/Greenhouse): repositório **privado**, acessível pela integração na consulta. A branch `develop` confirma Kotlin Multiplatform/Compose, backend Kotlin/Spring, Exposed, PostgreSQL/Neon e Flyway. Commits da autora incluem migrations (`468f557e`), seed e validações CHECK (`21ecdd9c`) e integração Flyway (`c974070c`). Código privado, configurações e dados de seed não foram copiados para esta entrega.

### Imagens compartilhadas pela equipe

O [portfólio de Débora Carvalho](https://portfolio-deboracarvalho-dev.vercel.app/) fornece resumos, status, capas e screenshots dos cinco primeiros projetos. A autora informou que são trabalhos compartilhados e indicou esse material para a revisão. Foram incorporadas cinco capas e trinta screenshots, com legendas e crédito por projeto. As novas galerias de Seren e Pindorama substituem as capturas locais limitadas da versão anterior; os arquivos antigos podem permanecer no histórico.

O Greenhouse não aparece nesse portfólio de referência. Sua capa foi composta em SVG/HTML como representação editorial, explicitamente identificada. Não há tela inventada da aplicação.
