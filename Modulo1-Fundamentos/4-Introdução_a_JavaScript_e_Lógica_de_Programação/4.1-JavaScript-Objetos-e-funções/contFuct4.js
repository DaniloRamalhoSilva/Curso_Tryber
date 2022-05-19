let num1 = 71, num2 = 1, num3 = 54;

console.log(maiorNumero(num1, num2, num3));
console.log(menorNumero(num1, num2, num3));

function maiorNumero(valor1, valor2, valor3){
    if(valor1 > valor2 && valor1 > valor3 ){
        return valor1;
        
     }else if(valor2 > valor1 && valor2 > valor3){
       return valor2;
     
     }else{
        return valor3;
     }
}

function menorNumero(valor1, valor2, valor3){
    if(valor1 < valor2 && valor1 < valor3 ){
        return valor1;
        
     }else if(valor2 < valor1 && valor2 < valor3){
       return valor2;
     
     }else{
        return valor3;
     }
}

