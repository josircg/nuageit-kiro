import assert from 'node:assert/strict';
import test from 'node:test';
import { resumirPorPrioridade } from '../src/domain/resumo-operacional.js';

test('resultado sempre contém P1, P2 e P3', () => {
  assert.deepEqual(resumirPorPrioridade([]), { P1: 0, P2: 0, P3: 0 });
  assert.deepEqual(
    resumirPorPrioridade([{ prioridade: 'P2' }, { prioridade: 'P2' }, { prioridade: 'P1' }]),
    { P1: 1, P2: 2, P3: 0 }
  );
});

test('função não modifica a lista nem os tickets', () => {
  const ticket = Object.freeze({ id: 'T-1', prioridade: 'P3' });
  const tickets = Object.freeze([ticket]);
  assert.deepEqual(resumirPorPrioridade(tickets), { P1: 0, P2: 0, P3: 1 });
  assert.deepEqual(tickets, [ticket]);
});

test('prioridade desconhecida é rejeitada', () => {
  assert.throws(
    () => resumirPorPrioridade([{ prioridade: 'URGENTE' }]),
    /prioridade inválida/
  );
});
