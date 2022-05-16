let numeroAFatorar = 12;
let numeroFatorado = numeroAFatorar;

for(i = numeroAFatorar; i > 1; i -=1){
    numeroFatorado = numeroFatorado * (i -1);
}
console.log(numeroFatorado);