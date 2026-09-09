import assert from 'node:assert/strict';
import test from 'node:test';
import { nextChemicalCode } from './chemical-code.mjs';

test('starts the new Buddhist-year sequence at EN14-69-0001', () => {
  assert.equal(nextChemicalCode([], new Date('2026-09-09T00:00:00Z')), 'EN14-69-0001');
});

test('continues only the new four-digit format and ignores legacy codes', () => {
  const codes = ['EN14AC69000045', 'EN14-69-0002', 'EN14-69-0010', 'EN14-68-9999'];
  assert.equal(nextChemicalCode(codes, new Date('2026-09-09T00:00:00Z')), 'EN14-69-0011');
});
