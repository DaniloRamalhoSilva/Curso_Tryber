let peca = "Peão";
let movimento = null ;

switch(peca.toLowerCase()){
    case "rainha": 
        movimento = "vertica, horisontal e diagonal (quantas casa forem posivel)(não salta sobre outras peças)";
    break;
    case "rei": 
        movimento = "vertica, horisontal e diagonal (apenas uma casa)(não salta sobre outras peças)";
    break;
    case "bispo": 
        movimento = "diagonal (quantas casa forem posivel)(não salta sobre outras peças)";
    break;
    case "cavalo": 
        movimento = "forma de L (duas casas mais uma em formato de L ou uma casa mais duas em formato de L)  (pode saltar sobre outras peças)";
    break;
    case "torre": 
        movimento = "verticav e horisontal (quantas casa forem posivel)(não salta sobre outras peças)";
    break;
    case "peão": 
        movimento = "apenas uma casa para frente, captura uma casa na diagonal(não salta sobre outras peças)";
    break;
    default:
        movimento = "erro"
    break

}

console.log(movimento);