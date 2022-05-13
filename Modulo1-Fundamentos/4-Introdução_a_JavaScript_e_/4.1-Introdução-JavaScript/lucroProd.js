const valorCusto = 100;
const valorVenda = 300;
let valorCustoImposto = null;
let lucro = 0;

if(valorCusto < 0 || valorVenda < 0 || typeof valorCusto == "string" || typeof valorVenda == "string"){
    console.log("Erro! valor invalido ou menor que 0");

}else{
    valorCustoImposto = (valorCusto * 0.02) + valorCusto;

    lucro = valorVenda - valorCustoImposto
    
    console.log(lucro);
}


