const n1 = 60;
const n2 = 52;
const n3 = 2;
let par = null; 

if(n1 % 2 != 0 || n2%2 !=0 || n3 % 2 != 0 ){
    par = false;
}else{
    par = true ;
}

console.log("Numero e par? " + par);