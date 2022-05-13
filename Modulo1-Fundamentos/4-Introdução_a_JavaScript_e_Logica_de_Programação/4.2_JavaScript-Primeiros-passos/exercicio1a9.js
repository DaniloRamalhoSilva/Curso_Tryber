//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers0 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers0 ) {
    console.log(number );
}


//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let number of numbers1 ) {
    resultado = resultado + number
}
console.log(resultado);

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for (let number of numbers2 ) {
    soma = soma + number;
}
media = soma / numbers2.length;
console.log(media);


//4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

//5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNu = 0;

for (let numberlis of numbers3 ) {    
    if(numberlis > maiorNu){
        maiorNu = numberlis
    }   
}
console.log(maiorNu);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantImpar = 0;

for (let number of numbers4) {    
    if(number % 2 != 0){
        quantImpar += 1; 
    }   
}

if(quantImpar === 0 ){
    console.log("nenhum valor ímpar encontrado");
}else{
    console.log(quantImpar);
}

//7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNu = numbers5[1];

for (let number of numbers5 ) {    
    if(menorNu > number ){
        menorNu = number
    }   
}
console.log(menorNu);

//8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];

for(index = 1; index < 26; index += 1 ){
    numbers.push(index);
}
console.log(numbers);

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let divisão = [];
for(number of numbers){
    divisão.push(number / 2)
}
console.log(divisão);