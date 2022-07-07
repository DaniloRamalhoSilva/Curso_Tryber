
//Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.
//1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const soma = [1, 2, 3]

function flatten() {
  // escreva seu código aqui
  //     arrays.reduce( 1 parametro callbeack         , 2 parametro inicio)
  return arrays.reduce((acc, curr) => acc.concat(curr), []);  // codigo tryber

  /* const t = [];
  arrays.forEach( (arr) => arr.map( (iten2) => t.push(iten2) ) ); meu codigo
  return t; */
}

console.log(flatten()); 



/* 
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113 */