---
name: revisao-segura
description: Revisar um diff antes de pull request, procurando mudança fora do escopo, regressão, segredo, permissão excessiva e ausência de testes. Use para auditoria pré-PR, não durante criação inicial de código.
---

# Revisão segura antes de PR

1. Leia objetivo, critérios de aceite e arquivos modificados.
2. Compare o diff com o escopo; sinalize qualquer mudança incidental.
3. Procure segredo, credencial, dado pessoal, logging sensível e permissão ampla sem reproduzir conteúdo sensível.
4. Verifique contrato público, comportamento inalterado e compatibilidade.
5. Ligue cada requisito a pelo menos uma evidência ou teste.
6. Execute apenas os comandos locais de validação já documentados.
7. Separe achados confirmados, evidência ausente e risco residual.
8. Não corrija automaticamente; apresente revisão e peça autorização.
