let notaPorcentagem = 16;

console.log(porcentagenEmNumero(notaPorcentagem));

function porcentagenEmNumero(notaPor){
    if(typeof notaPor === "string"){
        return "Erro! Insira valor valor valido";
    }else{
        if(notaPor > 100 || notaPor <= 0){
            return "Erro! nota deve ser maior que 0 e menor que 100";
        }else if(notaPor >= 90){
            return "A";
        }else if(notaPor >= 80){
            return "B";
        }else if(notaPor >= 70){
            return "C";
        }else if(notaPor >= 60){
            return "D";
        }else if(notaPor >= 50){
            return "E";
        }else if(notaPor < 50){
            return "F";
        }else {
            return "Erro inesperado";
        }
    }
}




