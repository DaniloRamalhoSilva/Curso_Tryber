const numero = 0;

function comparador(valor){
    if(valor > 0){
        return "positivo"
    }else if(valor < 0){
        return "negative"
    }else if(valor === 0 ){
        return "zero"
    }else{
        return 'Não é um numero valido'
    }
}
console.log(comparador(numero))