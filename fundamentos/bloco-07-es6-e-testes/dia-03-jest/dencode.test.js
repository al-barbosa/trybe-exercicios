const { encode, decode } = require('./dencode');

describe('Teste de encode', () => {
  it('Teste se é função', () => {
    expect(typeof(encode)).toBeDefined;
  })
  it('Teste de funcionamento', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    expect(encode('trybe').length).toBe(5);
  })
})
describe('Teste de decode', () => {
  it('Teste se é função', () => {
    expect(typeof(decode)).toBeDefined;
  })
  it('Teste de funcionamento', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
    expect(decode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    expect(decode('trube').length).toBe(5)
  })
})