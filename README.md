# Prática do módulo 3 — automação que merece existir

Esta branch contém steering incompleto, uma skill de revisão, um scanner local e uma configuração MCP desabilitada. O objetivo é escolher e implementar somente o mecanismo adequado para uma rotina real.

## 1. Crie sua branch

```bash
git switch modulo-03
git switch -c participante/seu-nome/modulo-03
```

Leia:

- `AGENTS.md`;
- `.kiro/steering/domain-rules.md`;
- `.kiro/skills/revisao-segura/SKILL.md`;
- `.kiro/settings/mcp.example.json`;
- `scripts/check-secrets.mjs`.

## 2. Escolha uma rotina observável

Defina antes de automatizar:

- frequência atual;
- tempo ou erro que pretende reduzir;
- entrada e saída;
- permissões necessárias;
- comportamento em falha;
- responsável e momento de revisão.

## 3. Escolha um mecanismo

Implemente somente um:

- steering condicional para regra ligada a arquivos;
- skill para procedimento reutilizável;
- hook shell para validação determinística;
- MCP apenas se houver servidor aprovado e realmente necessário.

Explique por que pelo menos dois mecanismos alternativos foram rejeitados.

Se escolher MCP:

- não use o endpoint fictício do exemplo;
- comece desabilitado e sem autoaprovação;
- use variável de ambiente para credencial;
- desabilite ferramentas de escrita desnecessárias;
- teste apenas com dados fictícios.

## 4. Teste a automação

Cubra:

1. caminho normal;
2. caso-limite;
3. entrada inválida;
4. indisponibilidade ou erro;
5. tentativa fora do escopo.

Validação mínima:

```bash
node scripts/check-secrets.mjs .
git diff --check
```

## 5. Entregue

Crie `evidencias/modulo-03.md` com problema observado, mecanismo escolhido, alternativas rejeitadas, permissões, testes e risco residual. Abra um pull request com configuração, documentação e evidência.

## Critérios de aceite

- a automação resolve uma rotina observável;
- contexto e permissões têm escopo mínimo;
- falha é segura e documentada;
- nenhum segredo é persistido;
- testes cobrem os cinco cenários;
- existe responsável por revisar ou remover a automação.
