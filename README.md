# Prática do módulo 3 — steering e skill

## Objetivo

Experimentar duas camadas de contexto persistente com apenas dois turnos: steering condicional para orientar o trabalho e skill para revisar o diff.

Hooks, MCP e Powers são demonstrados ou apresentados no treinamento. A prática não depende de conexão externa.

## Tempo previsto

| Etapa | Limite |
|---|---:|
| ler os arquivos | 4 min |
| turno 1: completar steering | 7 min |
| turno 2: revisar com skill | 6 min |
| guardrail e comparação | 5 min |

## 1. Prepare sua branch

```bash
git switch modulo-03
git switch -c participante/seu-nome/modulo-03
```

Leia:

- `AGENTS.md`;
- `.kiro/steering/domain-rules.md`;
- `.kiro/skills/revisao-segura/SKILL.md`;
- `src/domain/tickets.js`.

## Turno 1 — completar uma regra

```text
Leia AGENTS.md, .kiro/steering/domain-rules.md e src/domain/tickets.js.
Complete somente o TODO do steering com uma regra curta para validar prioridade antes
de contar tickets. Preserve o frontmatter fileMatch, não altere código, mostre o diff e pare.
```

Confirme que a regra é específica do domínio e não duplica uma instrução universal do `AGENTS.md`.

## Turno 2 — revisar sob demanda

```text
/revisao-segura Revise somente #git diff. Retorne no máximo cinco itens separados em
problemas, verificações pendentes e risco residual. Não edite arquivos.
```

## Valide

```bash
node scripts/check-secrets.mjs .
git diff --check
git diff
```

Abra `.kiro/settings/mcp.example.json` apenas para confirmar que o servidor está desabilitado, não há autoaprovação e as ferramentas de escrita estão bloqueadas. Não conecte o servidor.

A prática termina quando você consegue explicar a diferença entre uma regra de steering, uma skill e um guardrail shell.

## Se o Kiro estiver lento

Interrompa após três minutos sem progresso útil. Complete a regra em grupo e preserve o turno da skill. Hook e MCP não devem ser configurados para compensar o atraso.
