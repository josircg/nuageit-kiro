import assert from 'node:assert/strict';
import test from 'node:test';
import { calcularVencimento } from '../src/domain/sla.js';

test('P1 vence 60 minutos após a criação', () => {
  assert.equal(
    calcularVencimento({ prioridade: 'P1', criadoEm: '2026-08-10T12:00:00.000Z' }),
    '2026-08-10T13:00:00.000Z'
  );
});

test('P2 e P3 usam suas políticas em minutos', () => {
  assert.equal(
    calcularVencimento({ prioridade: 'P2', criadoEm: '2026-08-10T12:00:00.000Z' }),
    '2026-08-10T16:00:00.000Z'
  );
  assert.equal(
    calcularVencimento({ prioridade: 'P3', criadoEm: '2026-08-10T12:00:00.000Z' }),
    '2026-08-11T12:00:00.000Z'
  );
});

test('prioridade desconhecida é rejeitada', () => {
  assert.throws(
    () => calcularVencimento({ prioridade: 'URGENTE', criadoEm: '2026-08-10T12:00:00.000Z' }),
    /prioridade inválida/
  );
});
