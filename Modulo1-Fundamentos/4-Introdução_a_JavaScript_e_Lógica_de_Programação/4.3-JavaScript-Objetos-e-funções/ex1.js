//crie um algoritmo que retorne o fatorial de 10

let numeroAFatorar = 10;
let numeroFatorado = numeroAFatorar;

for(i = numeroAFatorar; i > 1; i -=1){
    numeroFatorado = numeroFatorado * (i -1);
}
console.log(numeroFatorado);