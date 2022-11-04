// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = require('../arc/exercicio7')

test('Passa para letras maiusculas', (done) => {
  uppercase('danilo', (result) => {
    try {
      expect(result).toBe('DANILO');
      done();
    } catch (error) {
      done(error);
    }
  });
});