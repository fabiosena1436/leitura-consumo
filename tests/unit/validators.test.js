const { validateMeasureType, validateBase64 } = require('../../src/utils/validators');

describe('Validators', () => {
  test('validateMeasureType should return true for valid types', () => {
    expect(validateMeasureType('WATER')).toBe(true);
    expect(validateMeasureType('GAS')).toBe(true);
  });

  test('validateMeasureType should return false for invalid types', () => {
    expect(validateMeasureType('OIL')).toBe(false);
    expect(validateMeasureType('')).toBe(false);
  });

  test('validateBase64 should return true for valid base64 image strings', () => {
    expect(validateBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==')).toBe(true);
  });

  test('validateBase64 should return false for invalid base64 strings', () => {
    expect(validateBase64('invalid base64 string')).toBe(false);
  });
});
