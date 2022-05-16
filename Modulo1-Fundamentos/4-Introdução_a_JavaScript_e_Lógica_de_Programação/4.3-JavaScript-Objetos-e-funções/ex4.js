//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

numerosPrimos = [];

for(n = 2; n < 100; n+=1){
    
    let nNivisoes = 0;
    for(i = 1; i <= n; i+=1){        
        if(n%i === 0 ){
            nNivisoes+=1; 
        }
        if(nNivisoes > 3){
            break;
        }       
    } 
    
    if(nNivisoes === 2){
        numerosPrimos.push(n);
    }

    
}
console.log(numerosPrimos);