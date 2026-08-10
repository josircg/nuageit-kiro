# Prática do módulo 1 — diagnóstico e mudança controlada

## Objetivo

Usar contexto explícito, separar diagnóstico de edição e corrigir somente uma condição defeituosa.

## Tempo previsto

| Etapa | Limite |
|---|---:|
| preparar e reproduzir | 3 min |
| turno 1: diagnosticar | 7 min |
| turno 2: corrigir | 10 min |
| testar e revisar | 5 min |

## 1. Prepare sua branch

```bash
git switch modulo-01
git switch -c participante/seu-nome/modulo-01
npm test
```

Resultado esperado: um teste de classificação falha.

Use somente estes arquivos como contexto:

- `src/domain/tickets.js`;
- `test/tickets.test.js`.

## Turno 1 — diagnosticar sem editar

```text
Analise a falha sem editar arquivos. Retorne a causa, a condição responsável,
a menor correção possível e o comportamento que deve continuar funcionando.
Não proponha refatoração. Pare após o diagnóstico.
```

Confirme no código se o diagnóstico faz sentido antes de continuar.

## Turno 2 — corrigir o mínimo

```text
Implemente somente a correção confirmada. Não renomeie, não altere contratos e
não edite testes para obter verde. Execute npm test, mostre o diff e pare.
```

## Valide

```bash
npm test
git diff --check
git diff
```

A prática termina quando os testes passam, o diff contém apenas a correção necessária e você consegue explicar a causa.

## Se o Kiro estiver lento

Interrompa após três minutos sem progresso útil. Reabra uma sessão com somente os dois arquivos indicados e repita o prompt da etapa atual. Se ainda não responder, faça o diagnóstico em grupo e preserve o turno de correção.
