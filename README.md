# Treinamento Kiro — práticas por módulo

Este repositório acompanha o treinamento de Kiro em quatro módulos. A branch `main` é apenas o ponto de entrada: cada prática está em uma branch independente, com seu próprio `README.md` e somente os arquivos necessários para o exercício.

Depois de clonar o repositório, troque para a branch do módulo que deseja praticar. Não execute a atividade diretamente na `main`.

## Atividades disponíveis

| Branch | Dever de casa | Resultado esperado |
|---|---|---|
| `modulo-01` | diagnóstico e correção controlada | corrigir um defeito e comparar prompts |
| `modulo-02` | Spec-driven development | concluir uma Feature Spec e uma Bugfix Spec |
| `modulo-03` | contexto e automação | criar uma automação com escopo e falha segura |
| `modulo-04` | operação segura | concluir e documentar o capstone técnico |

Os exercícios são independentes. Sempre comece na branch indicada, não na entrega do módulo anterior.

## Pré-requisitos

- Kiro IDE ou Kiro CLI autenticado;
- Git;
- Node.js 20 ou superior;
- permissão para criar uma branch própria;
- nenhum dado, segredo ou credencial real no ambiente do exercício.

## Como começar

```bash
git clone git@github.com:nuage-it/nuageit-consultoria-kiro-public.git
cd nuageit-consultoria-kiro-public
git switch modulo-01
git switch -c participante/seu-nome/modulo-01
npm test
kiro .
```

Ao trocar de branch, leia novamente o `README.md` raiz. Ele contém objetivo, passos, prompts sugeridos, critérios de aceite e formato de entrega.

## Regras de entrega

1. trabalhe em `participante/<nome>/modulo-XX`;
2. revise comandos e diffs antes de aceitar ações do Kiro;
3. não enfraqueça testes para obter verde;
4. não inclua `.env`, credenciais, tokens ou dados de cliente;
5. registre a evidência em `evidencias/modulo-XX.md`;
6. execute `npm test` e `git diff --check`;
7. abra um pull request da sua branch, sem alterar as branches `modulo-XX`.

## Projeto-base

O sistema fictício Fila Clara classifica tickets por prioridade. Ele usa JavaScript ESM e o test runner nativo do Node.js, sem dependências externas. O objetivo é praticar o uso do Kiro, não configurar infraestrutura.
