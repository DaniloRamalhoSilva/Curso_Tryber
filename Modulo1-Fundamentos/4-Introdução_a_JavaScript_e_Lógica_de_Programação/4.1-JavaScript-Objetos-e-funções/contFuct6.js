
  
const n1 = 60;
const n2 = 51;
const n3 = 2;

console.log('E um numero par: ' + numeroPar(n1));
console.log('E um numero impar: ' + numeroImpar(n2));

function numeroPar(n){
    if(n % 2 === 0){
        return true;
    }else{
        return false ;
    }
}

function numeroImpar(n){
    if(n % 2 === 0){
        return false;
    }else{
        return true;
    }
}




console.log("Numero e impar? " + par);