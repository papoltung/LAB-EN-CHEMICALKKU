import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeLocationOptions } from './location-options.mjs';

test('keeps configured locations when inventory is empty', () => {
  assert.deepEqual(mergeLocationOptions(['B1', 'C1'], []), ['B1', 'C1']);
});

test('merges imported and configured locations without duplicates', () => {
  assert.deepEqual(
    mergeLocationOptions(['B1', 'C1'], [{ location: 'C1' }, { location: 'A2' }, { location: '' }]),
    ['A2', 'B1', 'C1'],
  );
});
