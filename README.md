# Prática do módulo 4 — capstone de operação segura

Esta branch contém uma função de resumo incompleta, testes focados e um exemplo de custom agent restrito. O objetivo é concluir uma entrega técnica controlada e verificável.

## Capstone

### 1. Crie sua branch e reproduza

```bash
git switch modulo-04
git switch -c participante/seu-nome/modulo-04
node --test test/resumo-operacional.test.js
```

Resultado esperado: a função `resumirPorPrioridade` ainda não foi implementada.

### 2. Revise o agente

Leia `.kiro/agents/capstone.json.example` e adapte somente se a versão instalada exigir. O agente deve:

- trabalhar apenas neste repositório;
- não carregar MCP;
- negar rede, push e deploy;
- restringir escrita a código, testes, Specs e evidências;
- permitir apenas validadores locais documentados.

### 3. Planeje antes de editar

Peça um plano curto para implementar `resumirPorPrioridade`. Rejeite endpoint, dependência, banco ou refatoração fora do escopo.

Implemente a função garantindo:

- saída sempre contém P1, P2 e P3;
- ordem determinística;
- entrada não é modificada;
- prioridade desconhecida é rejeitada.

### 4. Expanda o relatório

Depois que o teste focado estiver verde, acrescente tickets próximos do SLA e vencidos:

- timestamps em UTC;
- `now` injetado;
- ticket encerrado excluído de próximo/vencido;
- nenhuma dependência ou chamada externa;
- testes de exemplo e uma propriedade útil.

Subagent é opcional apenas para investigação independente. Não permita escrita concorrente nos mesmos arquivos.

### 5. Valide

```bash
node --test test/resumo-operacional.test.js
npm test
git diff --check
git status --short
git diff
```

## Entrega

Abra um pull request com código, testes e `evidencias/modulo-04.md`. Inclua requisito → implementação → teste, permissões negadas, sugestão do agente rejeitada, risco residual e rollback.

## Critérios de aceite

- suíte completa passa;
- agente segue menor privilégio;
- relatório é determinístico;
- PR apresenta evidência, não apenas relato;
- registro final liga cada conclusão a uma evidência verificável.
