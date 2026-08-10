# Prática do módulo 2 — um requisito e uma função

## Objetivo

Experimentar o núcleo de Spec-driven development sem gerar uma feature completa: refinar um requisito e implementar apenas a função ligada a ele.

## Tempo previsto

| Etapa | Limite |
|---|---:|
| preparar e reproduzir | 3 min |
| turno 1: refinar requisito | 7 min |
| turno 2: implementar função | 10 min |
| testar e revisar | 5 min |

## 1. Prepare sua branch

```bash
git switch modulo-02
git switch -c participante/seu-nome/modulo-02
npm test
```

Resultado esperado: o teste de SLA falha porque `calcularVencimento` ainda não foi implementada.

## Turno 1 — refinar somente o requisito

Use `.kiro/specs/sla-alerta/requirements.md` e `test/sla.test.js`:

```text
Refine somente o REQ-1 do SLA em no máximo oito linhas. Use EARS e torne explícitos:
P1 = 60 min, P2 = 240 min, P3 = 1440 min, timestamp UTC e prioridade inválida.
Não gere design, tarefas ou código. Preserve o restante e pare após mostrar o diff.
```

## Turno 2 — implementar uma função

Use o requisito refinado, `src/domain/sla.js` e `test/sla.test.js`:

```text
Implemente apenas calcularVencimento conforme o REQ-1 e os testes existentes.
Não adicione dependências, não altere outras funções e não edite os testes para obter verde.
Execute node --test test/sla.test.js, mostre o diff e pare.
```

## Valide

```bash
node --test test/sla.test.js
npm test
git diff --check
git diff -- .kiro/specs/sla-alerta/requirements.md src/domain/sla.js test/sla.test.js
```

A prática termina com o requisito testável, uma função implementada e os testes passando. Design, tasks, alerta de 80% e Bugfix Spec são assuntos demonstrados no treinamento, não etapas deste exercício.

## Se o Kiro estiver lento

Interrompa após três minutos sem progresso útil. Use o requisito-base fornecido pelo instrutor para preservar o turno de implementação. Não tente compensar o atraso gerando a Spec completa.
