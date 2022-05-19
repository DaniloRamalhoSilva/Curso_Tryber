
const custo = 100;
const venda = 300;

console.log('seu lucro e de: ' + calculaLucro(custo, venda));


function calculaLucro(valorCusto, valorVenda ){
    if(valorCusto < 0 || valorVenda < 0 || typeof valorCusto == "string" || typeof valorVenda == "string"){
        return "Erro! valor invalido ou menor que 0";    
    }else{            
        return valorVenda - ((valorCusto * 0.02) + valorCusto);
    }
}

