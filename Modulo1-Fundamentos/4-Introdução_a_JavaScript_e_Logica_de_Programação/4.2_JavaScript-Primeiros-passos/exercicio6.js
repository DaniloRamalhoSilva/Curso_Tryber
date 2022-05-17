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
