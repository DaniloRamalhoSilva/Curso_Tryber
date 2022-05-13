const salarioBruto = 3000;
let salarioBase = 0;
let salarioLiquido = 0;
let valorInss = 0;
let valorIr = 0;



if(salarioBruto <= 1556.94){
    valorInss = salarioBruto * 0.08 ;
    
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    valorInss = salarioBruto * 0.09 ;

}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    valorInss = salarioBruto * 0.11 ;

}else if(salarioBruto > 5189.82){ 
    valorInss = 570.88
}

salarioBase = salarioBruto - valorInss;


if(salarioBase <= 1903.98){
    valorIr= 0;        
    
}else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    valorIr= salarioBase * 0.075 - 142.80;    

}else if(salarioBase >=  2826.66 && salarioBase <= 3751.05){
    valorIr= salarioBase * 0.15 - 354.80;    

}else if(salarioBase >=  3751.06 && salarioBase <= 4664.68){
    valorIr= salarioBase * 0.225 - 636.13;
    valorAdeduzir = 636.13;

}else if(salarioBase > 4664.68){ 
    valorIr= salarioBase * 0.275 - 869.36;    
}

salarioLiquido = salarioBase - valorIr

console.log(salarioLiquido);