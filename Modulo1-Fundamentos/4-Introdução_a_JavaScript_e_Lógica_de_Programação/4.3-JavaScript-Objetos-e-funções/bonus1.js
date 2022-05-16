//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

const n = 5;


for(let i = 0; i < n; i+=1){
    let linha = null;
    for(let index = 0; index < n; index+=1){
        if(linha == null){
            linha = '*';
        }else{
            linha = linha + '*';
        }
        
    }
    console.log(linha)
}
