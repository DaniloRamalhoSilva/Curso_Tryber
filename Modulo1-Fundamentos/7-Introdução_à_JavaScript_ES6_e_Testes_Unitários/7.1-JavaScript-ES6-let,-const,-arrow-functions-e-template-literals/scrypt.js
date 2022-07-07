/* function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */



/* const testingScope = escopo => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  (escopo === true)
? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) 
: console.log('Não devo ser utilizada fora meu escopo (else)')};

testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let odds = oddsAndEvens.sort((a,b)=>a-b);

console.log(`Os números ${odds} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

const obj = {
  nome: danilo,
  ida: 18
}

obj.outro = 'deu';

console.log(obg);
 */

/* let tx = 0;
const factorial = number => {  
  (number > 1)  
 ?number * factorial(number - 1)
  
  : 1;
 
} */

//console.log(factorial(5));

let aki = 0;
function teste (n) {
  if(n > 1){
    
    aki *= n * ( n -1)
    console.log(aki);
    teste(n - 1);
     
  }
}

console.log(teste(5));