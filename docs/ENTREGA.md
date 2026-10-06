# Entrega e envio da revisão

A branch `portfolio-redesign-2026` foi criada **localmente** e contém a implementação e a documentação. O envio ao GitHub não foi possível: a integração retornou HTTP 403 (`Resource not accessible by integration`) na criação da branch remota. Não há pull request remoto e a `master` não foi modificada.

O pacote inclui:

- `Portifolio/`: arquivos completos para abrir, editar e publicar.
- `portfolio-redesign-2026.bundle`: revisão Git e histórico, para preservar o versionamento.

## Abrir o site

Extraia o ZIP e abra `Portifolio/index.html` no navegador. As instruções para servidor local e publicação estão no README.

## Retomar a branch com Git

Na pasta onde você extraiu o bundle:

```bash
git clone -b portfolio-redesign-2026 portfolio-redesign-2026.bundle Portifolio-revisao
cd Portifolio-revisao
git remote set-url origin https://github.com/AnahiMamani/Portifolio.git
```

Depois de revisar o resultado, usando sua autenticação do GitHub:

```bash
git push -u origin portfolio-redesign-2026
```

Abra um pull request de `portfolio-redesign-2026` para `master`, conclua as pendências e faça o merge somente após a revisão.

Não substitua sua cópia de trabalho se ela contiver alterações não salvas. O comando de clone cria uma nova pasta para a revisão.
