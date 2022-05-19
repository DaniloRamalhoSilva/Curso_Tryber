const n1 =5;
const n2 = 7;

console.log(soma(n1 ,n2));
console.log(subitração(n1 ,n2));
console.log(divisao(n1 ,n2));
console.log(multiplicacao(n1 ,n2));
console.log(resto(n1 ,n2));

function soma(a, b){
    return a + b;
}

function subitração(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

function resto (a, b){
    return a % b;
}

