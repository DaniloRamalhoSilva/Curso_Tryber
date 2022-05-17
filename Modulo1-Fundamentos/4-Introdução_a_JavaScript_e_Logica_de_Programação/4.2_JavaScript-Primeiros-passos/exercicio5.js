//5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNu = 0;

for (let numberlis of numbers3 ) {    
    if(numberlis > maiorNu){
        maiorNu = numberlis
    }   
}
console.log(maiorNu);

