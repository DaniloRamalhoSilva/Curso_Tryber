const b = 100;
const a = 30;
const y = 50;

const S = 180;  // angulo interno da soma sos 3 angulos sempre é 180 graus. angulo externo 360 graus.
let soma = 0;
let triangulo = false;

soma = a + b + y;

if(soma === S){
    triangulo = true;
}else{
    triangulo = false;
}

console.log(triangulo);