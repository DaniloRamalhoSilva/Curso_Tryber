const n = 5;


for(let i = 1; i <= n; i+=1){
    let linha = ''; 

    for(let index = 0; index < n-i; index+=1){            
        linha = linha + " ";       
    }

    for(let index = 0; index < i; index+=1){            
        linha = linha + "*";      
    }
    console.log(linha)
}