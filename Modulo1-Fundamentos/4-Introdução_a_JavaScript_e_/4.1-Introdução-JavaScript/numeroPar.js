const n1 = 60;
const n2 = 52;
const n3 = 2;
let impar = null; 

if(n1 % 2 != 0 || n2%2 !=0 || n3 % 2 != 0 ){
    impar = true;
}else{
    impar = false;
}

console.log("Numero e inpar? " + impar);