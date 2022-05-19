const salarioBruto = 3000;
let resultado = salarioLiquido(salarioBase(salarioBruto));
console.log(resultado);


function salarioBase(bruto){
    let valorInss = 0;
    if(bruto <= 1556.94){
        valorInss = bruto * 0.08 ;
        
    }else if(bruto >= 1556.95 && bruto <= 2594.92){
        valorInss = bruto * 0.09 ;
    
    }else if(bruto >= 2594.93 && bruto <= 5189.82){
        valorInss = bruto * 0.11 ;
    
    }else if(bruto > 5189.82){ 
        valorInss = 570.88
    }
    
    return bruto - valorInss;
}

function salarioLiquido(base){
    let valorIr = 0;
    if(base <= 1903.98){
        valorIr= 0;        
        
    }else if(base >= 1903.99 && base <= 2826.65){
        valorIr= base * 0.075 - 142.80;    
    
    }else if(base >=  2826.66 && base <= 3751.05){
        valorIr= base * 0.15 - 354.80;    
    
    }else if(base >=  3751.06 && base <= 4664.68){
        valorIr= base * 0.225 - 636.13;
        valorAdeduzir = 636.13;
    
    }else if(base > 4664.68){ 
        valorIr= base * 0.275 - 869.36;    
    }
    
    return base - valorIr
}



