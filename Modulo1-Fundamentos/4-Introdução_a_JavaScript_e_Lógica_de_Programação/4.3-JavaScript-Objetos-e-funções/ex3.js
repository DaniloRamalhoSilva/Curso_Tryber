//3- Considere o array de strings abaixo: Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
for(let palavra of array){

    if(palavra.length > maiorPalavra.length){
        maiorPalavra = palavra;
    }
}
console.log(maiorPalavra);

let menorPalavra = array[0];
for(let palavra of array){

    if(menorPalavra.length > palavra.length  ){
        menorPalavra = palavra;
    }
}
console.log(menorPalavra);