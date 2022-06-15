const sum = require('./sum.js');


describe('Teste da função soma', () => {
  test('Teste de somatória', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
  it('Teste de throw', () => {
    expect(() => { sum(4, '5') }).toThrow();
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  })
})
