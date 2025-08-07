import { luhnCheck } from '../cardValidator.js';

describe('luhnCheck', () => {
  const validCards = [
    '4929321659893200',    
    '4916947459050404',    
    '4716823469741104490', 
    '2221008558088904',    
    '5417551005375405',    
    '2221004114757264',    
    '2200000000000053'
  ];

  const invalidCards = [
    '4929321659893201',
    '4916947459050405',
    '4716823469741104491',
    '2221008558088905',
    '5417551005375406',
    '2221004114757265',
    '2200401234567891',
    '1234567890123456',
    'abcdefg12345678'
  ];

  test.each(validCards)('valid card %s should pass luhnCheck', (card) => {
    expect(luhnCheck(card)).toBe(true);
  });

  test.each(invalidCards)('invalid card %s should fail luhnCheck', (card) => {
    expect(luhnCheck(card)).toBe(false);
  });
});
