import { expect, test } from '@jest/globals';
import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});