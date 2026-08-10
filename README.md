# Prática do módulo 4 — agente restrito e função determinística

## Objetivo

Revisar um custom agent com ferramentas limitadas, produzir um plano curto e implementar somente uma função.

Subagents, headless, Kiro Web e governança empresarial são demonstrados ou apresentados no treinamento. Eles não são usados nesta prática.

## Tempo previsto

| Etapa | Limite |
|---|---:|
| preparar e revisar o agente | 5 min |
| turno 1: plano curto | 6 min |
| turno 2: implementar | 9 min |
| testar e revisar | 5 min |

## 1. Prepare sua branch

```bash
git switch modulo-04
git switch -c participante/seu-nome/modulo-04
node --test test/resumo-operacional.test.js
```

Resultado esperado: o teste falha porque `resumirPorPrioridade` ainda não foi implementada.

Revise `.kiro/agents/pratica-segura.json.example`. O agente deve negar rede, MCP, push, deploy e escrita fora de `src/` e `test/`.

## Turno 1 — plano limitado

```text
Leia apenas src/domain/resumo-operacional.js e test/resumo-operacional.test.js.
Produza um plano de no máximo quatro passos para implementar resumirPorPrioridade.
Inclua invariantes e comando de teste. Não edite nada e pare após o plano.
```

Rejeite plano que proponha endpoint, dependência, banco ou refatoração.

## Turno 2 — implementação restrita

```text
Implemente somente resumirPorPrioridade conforme os testes. A saída deve conter P1, P2
e P3 nessa ordem, não modificar a entrada e rejeitar prioridade inválida.
Não altere testes ou outros arquivos. Execute o teste focado, mostre o diff e pare.
```

## Valide

```bash
node --test test/resumo-operacional.test.js
npm test
git diff --check
git diff
```

A prática termina quando os testes passam, somente a função foi alterada e você consegue explicar por que as permissões negadas não eram necessárias.

## Se o Kiro estiver lento

Interrompa após três minutos sem progresso útil. Use o plano-base do instrutor e preserve o turno de implementação. Não adicione subagent ou troque de ferramenta durante uma edição em andamento.
