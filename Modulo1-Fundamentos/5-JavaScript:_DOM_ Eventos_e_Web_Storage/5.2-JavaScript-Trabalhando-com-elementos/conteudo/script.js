let elemento1 = document.querySelector('#elementoOndeVoceEsta');
let neto = document.querySelector('#primeiroFilhoDoFilho');
let pai = document.querySelector('#pai');

let paiDoElemento1 = elemento1.parentNode;
let primeiroFilho = pai.firstElementChild;
let primeiroElementoDoElemento1 = elemento1.firstElementChild;
let primeiroNoDoElemento1 = elemento1.firstChild;
let primeiroNoDoSegundoElementoDoElemento1 = elemento1.nextElementSibling.firstChild;
let terceiroFilhoDoElemento1 = elemento1.firstElementChild.nextElementSibling.nextElementSibling;
let terceiroFilhoDoPai = pai.firstElementChild.nextElementSibling.nextElementSibling;
let quartoFilhoDoPai = pai.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling; 

neto.innerText = 'eu sou o primeiro filho do filho (sou o neto kkkk)';
neto.style.backgroundColor = 'red';
paiDoElemento1.style.backgroundColor = 'pink';
primeiroFilho.style.backgroundColor = 'red';
primeiroElementoDoElemento1.style.backgroundColor = 'green';

let tagIrmaDeElemeto1 = document.createElement('section');
tagIrmaDeElemeto1.innerText = "sou uma tag irmã de elemento OndeVoceEsta"
pai.appendChild(tagIrmaDeElemeto1);

let tagFilhoElement1 = document.createElement('section')
tagFilhoElement1.innerText = 'sou uma tag filho de elemento OndeVoceEsta'
elemento1.appendChild(tagFilhoElement1);

let tagFilhoDoPrimeiroFilho = document.createElement('section')
tagFilhoDoPrimeiroFilho.innerText = 'sou uma teg filha do primeiro filho (tambem sou neta kkkk'
primeiroFilho.appendChild(tagFilhoDoPrimeiroFilho);

let tagFilhoDoNeto = document.createElement('section')
tagFilhoDoNeto.innerText = 'sou filho do neto';
tagFilhoDoNeto.style.backgroundColor = 'yellow'
tagFilhoDoPrimeiroFilho.appendChild(tagFilhoDoNeto);

let terceiroFilhoaApartirDoFilhoDoNeto = tagFilhoDoNeto.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling;


for(let i =0; i< primeiroFilho.childElementCount; i +=1){
    primeiroFilho.removeChild(primeiroFilho.firstElementChild);
}

for(let i =0; i< elemento1.childElementCount; i +=1){
    elemento1.removeChild(elemento1.firstElementChild.nextElementSibling);
}

for(let i =0; i< terceiroFilhoDoPai.childElementCount; i +=1){
    terceiroFilhoDoPai.removeChild(terceiroFilhoDoPai.firstElementChild);
}

for(let i =0; i< quartoFilhoDoPai.childElementCount; i +=1){
    quartoFilhoDoPai.removeChild(quartoFilhoDoPai.firstElementChild);
}

pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilhoDoPai);
pai.removeChild(quartoFilhoDoPai);
pai.removeChild(tagIrmaDeElemeto1);

pai.removeChild(pai.firstElementChild.nextSibling);