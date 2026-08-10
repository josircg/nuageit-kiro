const PRIORIDADES = Object.freeze(['P1', 'P2', 'P3']);

export function classificarPrioridade({ impacto, urgencia }) {
  if (impacto === 'critico' || urgencia === 'alta') return 'P1';
  if (impacto === 'critico' || urgencia === 'alta') return 'P2';
  return 'P3';
}

export function validarTicket(ticket) {
  const erros = [];

  if (!ticket || typeof ticket !== 'object') {
    return ['ticket deve ser um objeto'];
  }

  if (typeof ticket.id !== 'string' || ticket.id.trim() === '') {
    erros.push('id é obrigatório');
  }

  if (!['baixo', 'moderado', 'critico'].includes(ticket.impacto)) {
    erros.push('impacto inválido');
  }

  if (!['baixa', 'media', 'alta'].includes(ticket.urgencia)) {
    erros.push('urgência inválida');
  }

  return erros;
}

export function contarPorPrioridade(tickets) {
  const contagem = { P1: 0, P2: 0, P3: 0 };

  for (const ticket of tickets) {
    const prioridade = ticket.prioridade ?? classificarPrioridade(ticket);
    if (!PRIORIDADES.includes(prioridade)) {
      throw new TypeError(`prioridade inválida: ${prioridade}`);
    }
    contagem[prioridade] += 1;
  }

  return contagem;
}
