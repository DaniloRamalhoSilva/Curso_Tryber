
const n = 5;
let linha = null;
for(let i = 0; i < n; i+=1){
    if(linha == null){
        linha = '*';
    }else{
        linha = linha + '*';
    }    
    console.log(linha)
}