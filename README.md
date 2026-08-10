# Prática do módulo 2 — Spec completa com gates

Esta branch contém um requisito de SLA, uma função incompleta e testes iniciais. O objetivo é concluir uma Feature Spec, implementar por tarefas pequenas e usar uma Bugfix Spec para uma regressão controlada.

## 1. Crie sua branch e reproduza

```bash
git switch modulo-02
git switch -c participante/seu-nome/modulo-02
npm test
```

Resultado esperado: os testes de SLA falham porque `calcularVencimento` ainda não foi implementada.

## 2. Refine os requisitos

Use Feature Spec Requirements-First. Complete `.kiro/specs/sla-alerta/requirements.md` com:

- P1 vence em 60 minutos, P2 em 240 e P3 em 1440;
- timestamps em UTC;
- prioridade inválida é rejeitada;
- alerta ao atingir exatamente 80% do prazo;
- ticket encerrado não gera alerta;
- reclassificação recalcula o vencimento a partir da criação original;
- nenhuma notificação externa nesta entrega.

Revise os requisitos antes de aprovar o design. Use EARS e inclua casos-limite.

## 3. Gere e revise design e tarefas

Antes de aprovar `design.md` e `tasks.md`:

- exija funções puras e relógio injetado;
- mapeie requisito → função → teste;
- rejeite dependência, banco ou integração externa;
- separe tarefas obrigatórias e opcionais;
- implemente uma tarefa por vez antes de usar execução paralela.

## 4. Implemente e valide

Comece por `calcularVencimento`. Não altere testes apenas para obter verde.

```bash
node --test test/sla.test.js
npm test
git diff --check
git diff -- .kiro/specs src test
```

## 5. Exercite Bugfix Spec

Depois de implementar o alerta, introduza em uma branch temporária o defeito “ticket encerrado dispara alerta”. Registre:

- comportamento atual;
- comportamento esperado;
- comportamento que deve permanecer;
- causa raiz;
- teste que falha antes e passa depois.

Corrija a regressão sem ampliar o escopo.

## 6. Entregue

Crie `evidencias/modulo-02.md` com os gates revisados, decisões rejeitadas, testes executados e risco residual. Abra um pull request contendo Specs, código, testes e evidência.

## Critérios de aceite

- requisitos, design e tarefas estão sincronizados;
- cada requisito possui evidência ou teste;
- suíte completa passa;
- Feature Spec e Bugfix Spec têm escopos distintos;
- não há integração externa, segredo ou dependência nova.
