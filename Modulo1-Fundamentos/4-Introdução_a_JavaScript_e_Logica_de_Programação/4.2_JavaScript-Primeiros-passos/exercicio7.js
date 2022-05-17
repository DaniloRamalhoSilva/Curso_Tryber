//7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNu = numbers5[1];

for (let number of numbers5 ) {    
    if(menorNu > number ){
        menorNu = number
    }   
}
console.log(menorNu);

