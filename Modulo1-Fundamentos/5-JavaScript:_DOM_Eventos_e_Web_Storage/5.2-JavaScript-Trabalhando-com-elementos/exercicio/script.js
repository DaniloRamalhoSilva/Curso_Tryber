/*
1-🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
2-🚀 Adicione a tag main com a classe main-content como filho da tag body;
3-🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
4-🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
5-🚀 Adicione a tag section1 com a classe left-content como filho da tag main criada no passo 2;
6-🚀 Adicione a tag section2 com a classe right-content como filho da tag main criada no passo 2;
7-🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
8-🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section2 criado no passo 6;
9-🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
*/

let body = document.getElementsByTagName('body');

function criaTeg(tag){
   return document.createElement(tag);
}

let numerosPorExtenso = ['um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez'];
let h1 = criaTeg('h1');
let main = criaTeg('main');
let section = criaTeg('section');
let p = criaTeg('p');
let section2 = criaTeg('section');
let section3 = criaTeg('section');
let img = criaTeg('img');
let ul = criaTeg('ul');

for(i = 0; i < 3; i+=1 ){
    main.appendChild(criaTeg('h3'));
}

for(let numero of numerosPorExtenso){
    let li = criaTeg('li');
    li.innerText = numero;
    ul.appendChild(li);
}

section.className = 'center-content';
main.className = 'main-content';
h1.innerText = 'Exercício 5.2';
p.innerText = 'Testo introdusido pela tag p criada no javaScript p e filho de section q é filho de main que e filho do body';
section2.className = 'left-content';
section3.className = 'right-content';
img.src = 'https://picsum.photos/200';
img.className = 'small-image';

body[0].appendChild(h1);
body[0].appendChild(main);
main.appendChild(section);
section.appendChild(p);
main.appendChild(section2);
main.appendChild(section3);
section2.appendChild(img);
section3.appendChild(ul);

