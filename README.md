# Prática do módulo 1 — diagnóstico e mudança controlada

Esta branch contém um defeito intencional na classificação de tickets. O objetivo é praticar contexto explícito, diagnóstico antes da edição, revisão de diff e validação independente.

## Resultado esperado

- identificar a causa sem pedir uma alteração ampla;
- corrigir somente a condição defeituosa;
- manter os demais comportamentos;
- comparar um prompt vago com um prompt verificável;
- entregar testes e evidência.

## 1. Crie sua branch

```bash
git switch modulo-01
git switch -c participante/seu-nome/modulo-01
npm test
```

Antes de abrir o Kiro, registre qual teste falha, comportamento esperado e arquivos que você prevê alterar.

## 2. Diagnostique sem editar

Forneça somente `src/domain/tickets.js` e `test/tickets.test.js`.

```text
Analise a falha sem editar arquivos. Retorne causa, condição responsável, menor correção,
comportamentos que devem permanecer e comando de teste. Não proponha refatoração.
```

## 3. Corrija com escopo mínimo

```text
Implemente somente a correção confirmada. Não renomeie, não altere contratos e não edite
testes para obter verde. Execute npm test, mostre o diff e pare.
```

## 4. Compare a qualidade dos prompts

Escolha outro caso-limite da classificação e execute duas sessões novas:

- tentativa A: pedido vago de até duas linhas;
- tentativa B: resultado, contexto, restrições e validação explícitos.

Compare arquivos tocados, retrabalho, aderência ao escopo e qualidade dos testes. Uma execução isolada não prova ganho geral de produtividade.

## 5. Valide e entregue

```bash
npm test
git diff --check
git diff
```

Crie `evidencias/modulo-01.md` com causa, prompts, mudança rejeitada, resultado dos testes e risco residual. Abra um pull request da sua branch.

## Critérios de aceite

- todos os testes passam;
- somente a mudança necessária foi feita;
- nenhum teste foi enfraquecido;
- comparação dos prompts contém evidência observada;
- não há segredo ou dado real no diff.
