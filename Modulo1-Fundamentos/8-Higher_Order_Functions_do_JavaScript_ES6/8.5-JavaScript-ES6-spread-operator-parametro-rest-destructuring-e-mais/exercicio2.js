//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest.

const soma = (...numeros) => numeros.reduce((accumulator, current) => accumulator + current, 0); 

console.log(soma(4, 2, 3, 8));