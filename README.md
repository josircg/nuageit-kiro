# Treinamento Kiro — práticas por módulo

Este repositório acompanha um treinamento de 8 horas, dividido em quatro módulos de 2 horas. Cada encontro possui 90 minutos de conteúdo e prática guiada e 30 minutos de dúvidas.

A branch `main` é somente o ponto de entrada. Cada prática está em uma branch independente, com seu próprio `README.md` e apenas os arquivos necessários para executar o exercício localmente.

## Como o conteúdo foi dimensionado

O treinamento apresenta as principais superfícies do Kiro, mas pratica somente o núcleo que cabe no tempo disponível e considera a latência dos modelos:

- até dois turnos principais do Kiro por prática;
- dois ou três arquivos de contexto;
- uma mudança pequena;
- teste local rápido;
- caminho de recuperação se o modelo demorar mais de três minutos.

Recursos extensos, como Spec completa, MCP conectado, múltiplos agentes, headless e Kiro Web, são demonstrados ou apresentados durante o treinamento. Eles não são dependências das práticas.

## Branches

| Branch | Prática | Duração estimada |
|---|---|---:|
| `modulo-01` | diagnosticar e corrigir um defeito com escopo controlado | 20–25 min |
| `modulo-02` | refinar um requisito e implementar uma função de SLA | 25 min |
| `modulo-03` | completar um steering e revisar com uma skill | 20–25 min |
| `modulo-04` | planejar e implementar uma função com agente restrito | 25 min |

As práticas são independentes. Não é necessário concluir uma branch para iniciar a seguinte.

## Como começar

```bash
git clone git@github.com:nuage-it/nuageit-consultoria-kiro-public.git
cd nuageit-consultoria-kiro-public
git switch modulo-01
git switch -c participante/seu-nome/modulo-01
npm test
kiro .
```

Ao trocar de branch, leia novamente o `README.md` raiz. Ele contém objetivo, cronômetro, arquivos de contexto, dois prompts sugeridos, validação e caminho de recuperação.

## Regras simples

1. trabalhe em uma branch própria;
2. use somente dados fictícios;
3. revise comandos antes de autorizá-los;
4. não altere testes apenas para obter verde;
5. execute o teste indicado e revise o diff;
6. pare quando o objetivo da prática estiver atendido.

Não há relatório, formulário ou pull request obrigatório. O foco é executar o fluxo e compreender as decisões tomadas.

## Pré-requisitos

- Kiro IDE ou Kiro CLI autenticado;
- Git;
- Node.js 20 ou superior;
- conhecimento básico de terminal, código e testes.
