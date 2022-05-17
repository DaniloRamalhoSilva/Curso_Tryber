//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for (let number of numbers2 ) {
    soma = soma + number;
}
media = soma / numbers2.length;
console.log(media);


