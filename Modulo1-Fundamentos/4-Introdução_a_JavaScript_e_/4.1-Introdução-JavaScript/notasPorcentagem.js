let notaPor = 16;
let notaLet = 0;

if(typeof notaPor === "string"){
    notaLet = "Erro! Insira valor valor valido";
}else{
    if(notaPor > 100 || notaPor <= 0){
        notaLet = "Erro! nota deve ser maior que 0 e menor que 100";
    }else if(notaPor >= 90){
        notaLet = "A";
    }else if(notaPor >= 80){
        notaLet = "B";
    }else if(notaPor >= 70){
        notaLet = "C";
    }else if(notaPor >= 60){
        notaLet = "D";
    }else if(notaPor >= 50){
        notaLet = "E";
    }else if(notaPor < 50){
        notaLet = "F";
    }else {
        notaLet = "Erro inesperado";
    }
}


console.log(notaLet);

