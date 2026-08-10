import assert from 'node:assert/strict';
import test from 'node:test';
import {
  classificarPrioridade,
  contarPorPrioridade,
  validarTicket
} from '../src/domain/tickets.js';

test('impacto crítico com urgência alta é P1', () => {
  assert.equal(classificarPrioridade({ impacto: 'critico', urgencia: 'alta' }), 'P1');
});

test('apenas impacto crítico é P2', () => {
  assert.equal(classificarPrioridade({ impacto: 'critico', urgencia: 'media' }), 'P2');
});

test('apenas urgência alta é P2', () => {
  assert.equal(classificarPrioridade({ impacto: 'moderado', urgencia: 'alta' }), 'P2');
});

test('impacto e urgência baixos são P3', () => {
  assert.equal(classificarPrioridade({ impacto: 'baixo', urgencia: 'baixa' }), 'P3');
});

test('validação acumula campos inválidos sem alterar a entrada', () => {
  const ticket = Object.freeze({ id: '', impacto: 'enorme', urgencia: 'agora' });
  assert.deepEqual(validarTicket(ticket), [
    'id é obrigatório',
    'impacto inválido',
    'urgência inválida'
  ]);
});

test('contagem classifica tickets sem prioridade explícita', () => {
  assert.deepEqual(contarPorPrioridade([
    { impacto: 'critico', urgencia: 'alta' },
    { impacto: 'moderado', urgencia: 'alta' },
    { impacto: 'baixo', urgencia: 'baixa' }
  ]), { P1: 1, P2: 1, P3: 1 });
});

test('contagem rejeita prioridade inválida', () => {
  assert.throws(
    () => contarPorPrioridade([{ prioridade: 'URGENTE' }]),
    /prioridade inválida/
  );
});
