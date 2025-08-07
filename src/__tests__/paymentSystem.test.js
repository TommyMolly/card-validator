import { detectPaymentSystem } from '../paymentSystem.js';

describe('detectPaymentSystem', () => {
  const cases = [
    ['4929321659893200', 'visa'],
    ['4916947459050404', 'visa'],
    ['4716823469741104490', 'visa'],
    ['2221008558088904', 'mastercard'],
    ['5417551005375405', 'mastercard'],
    ['2221004114757264', 'mastercard'],
    ['2200401234567890', 'mir'],
    ['2201234567890123', 'mir'],
    ['1234567890123456', null],
    ['6011111111111117', null], 
  ];

  test.each(cases)('card number %s should detect payment system %s', (card, expected) => {
    expect(detectPaymentSystem(card)).toBe(expected);
  });
});
