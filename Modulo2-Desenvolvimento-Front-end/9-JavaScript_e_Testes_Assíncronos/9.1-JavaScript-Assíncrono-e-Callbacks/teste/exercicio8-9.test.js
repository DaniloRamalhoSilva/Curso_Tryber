//9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('../9.1-JavaScript-Assíncrono-e-Callbacks/arc/exercicio8');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código    
    getPokemonDetails(({name}) => name === 'S', (onError, onSucesso) => {
      expect(onError.message).toBe('Não temos esse pokémon para você :(');
        done();      
           
    });
      
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails(({name}) => name === 'Squirtle', (onError, onSucesso) => {
      try{
        expect(onSucesso).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
        done(); 
      }catch (error){
        done(error);
      }
           
    });
  });
});