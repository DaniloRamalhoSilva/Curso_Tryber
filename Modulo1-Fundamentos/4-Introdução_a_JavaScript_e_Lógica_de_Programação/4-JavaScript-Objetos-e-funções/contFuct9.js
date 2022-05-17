const b = 100;
const a = 30;
const y = 50;

console.log(verificaSeEumTriangulo(b ,a ,y));

function verificaSeEumTriangulo(a1 , a2, a3){    
    if(a1 + a2 + a3 === 180){
        return true;
    }else{
        return false;
    }
    
}


