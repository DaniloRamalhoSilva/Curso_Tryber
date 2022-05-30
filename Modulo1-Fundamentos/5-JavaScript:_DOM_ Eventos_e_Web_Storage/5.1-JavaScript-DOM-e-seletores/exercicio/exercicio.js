/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 
 Crie uma função que mude a cor do quadrado vermelho para branco.
 
 Crie uma função que corrija o texto da tag <h1>.
 
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function mudaTextoH1(texto){
    let man = document.getElementsByClassName("title");
    man[0].innerText = texto;
}
mudaTextoH1('Exercício 5.1 - javaScript');

function mudaBackColorConteinerCenter(n1){
    let man = document.getElementsByClassName("center-content");
    man[0].style.backgroundColor = n1;
}
mudaBackColorConteinerCenter('white');


function mudaTextoP(texto){
    let p = document.getElementsByTagName("p");
    p[1].innerText = texto;
}
mudaTextoP('Quero estar ganhando uns 5.000,00 trabalhando remo com desenvolvimento de sofwere');

function mudaBackColorMan(n1){
    let man = document.getElementsByClassName("main-content");
    man[0].style.backgroundColor = n1;
}
mudaBackColorMan('rgb(76,164,109)');

function mudaTextoPParaMiusculo(){
    let p = document.getElementsByTagName("p");
    p[0].style.textTransform = 'uppercase';
}
mudaTextoPParaMiusculo()

function exibePNoCosole(){
    let ps = document.getElementsByTagName("p");
    for(let p of ps){
        console.log(p.innerText);
    }
}
exibePNoCosole()