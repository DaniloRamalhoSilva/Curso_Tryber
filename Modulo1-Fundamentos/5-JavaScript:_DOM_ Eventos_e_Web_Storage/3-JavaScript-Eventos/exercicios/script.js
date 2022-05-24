function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.



const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const listaDias = document.getElementById('days');
const conteinerDoBotao = document.getElementsByClassName('buttons-container');


function criaTeg(tag) {
  return document.createElement(tag);
};


function criaDias(dias) {
  for (let dia of dias) {
    let li = criaTeg('li');
    li.innerText = dia;
    li.className = 'day';
    if (dia === 24 || dia === 31) {
      li.className = 'day holiday';
    }
    if (dia === 4 || dia === 11 || dia === 18) {
      li.className = 'day friday';
    }
    if (dia === 25) {
      li.className = 'day friday holiday';
    }
    listaDias.appendChild(li);
  };
};

feriados('Feriados');

function feriados(text) {
  let botao = criaTeg('button');
  botao.id = 'btn-holiday';
  botao.name = text;

  conteinerDoBotao[0].appendChild(botao);
};

const botao = document.getElementById('btn-holiday');

botao.addEventListener('click', function () {
  let disDeFeriados = document.getElementsByClassName('holiday');
  if(disDeFeriados[0].style.backgroundColor === 'yellow'){
    for(let dia of disDeFeriados){
      dia.style.backgroundColor = 'rgb(238,238,238)';
    }
  }else{
    for(let dia of disDeFeriados){
      dia.style.backgroundColor = 'yellow';
    }
  }
  
  
});

criaDias(dezDaysList);