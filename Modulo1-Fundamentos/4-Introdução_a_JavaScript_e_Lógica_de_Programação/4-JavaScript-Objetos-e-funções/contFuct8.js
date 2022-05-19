
let peca = "Peão";


console.log(movimentoDasPecasDeXadres(peca));

function movimentoDasPecasDeXadres(p){
    switch(peca.toLowerCase()){
        case "rainha": 
            return "vertica, horisontal e diagonal (quantas casa forem posivel)(não salta sobre outras peças)";
        break;
        case "rei": 
            return "vertica, horisontal e diagonal (apenas uma casa)(não salta sobre outras peças)";
        break;
        case "bispo": 
            return "diagonal (quantas casa forem posivel)(não salta sobre outras peças)";
        break;
        case "cavalo": 
            return "forma de L (duas casas mais uma em formato de L ou uma casa mais duas em formato de L)  (pode saltar sobre outras peças)";
        break;
        case "torre": 
            return "verticav e horisontal (quantas casa forem posivel)(não salta sobre outras peças)";
        break;
        case "peão": 
            return "apenas uma casa para frente, captura uma casa na diagonal(não salta sobre outras peças)";
        break;
        default:
            return "erro"
        break
    
    }
}



