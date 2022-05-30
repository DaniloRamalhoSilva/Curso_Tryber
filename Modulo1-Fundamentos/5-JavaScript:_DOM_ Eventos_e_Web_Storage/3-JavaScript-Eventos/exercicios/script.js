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
const divTarefas = document.getElementsByClassName('my-tasks')


function criaTeg(tag) {
  return document.createElement(tag);
};

criaDias(dezDaysList);
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

const botaoFeriado = document.getElementById('btn-holiday');

botaoFeriado.addEventListener('click', function () {
  let disDeFeriados = document.getElementsByClassName('holiday');
  if (disDeFeriados[0].style.backgroundColor === 'yellow') {
    for (let dia of disDeFeriados) {
      dia.style.backgroundColor = 'rgb(238,238,238)';
    }
  } else {
    for (let dia of disDeFeriados) {
      dia.style.backgroundColor = 'yellow';
    }
  }
});

sextaFeira('Sexta-feira');
function sextaFeira(text) {
  let botao = criaTeg('button');
  botao.id = 'btn-friday';
  botao.name = text;

  conteinerDoBotao[0].appendChild(botao);
};

const botaoSexta = document.getElementById('btn-friday');
var diasDeSexta = [];

botaoSexta.addEventListener('click', function () {
  let sextaFeiras = document.getElementsByClassName('friday');

  if (sextaFeiras[0].innerText === 'sextou') {
    for (let i = 0; i < sextaFeiras.length; i += 1) {
      sextaFeiras[i].innerText = diasDeSexta[i];
    }

  } else {
    diasDeSexta = [];
    for (let sexta of sextaFeiras) {
      diasDeSexta.push(sexta.innerText);
      sexta.innerText = 'sextou';
    }

  }
});

let diasDaLista = document.querySelectorAll('.day')

for (let dia of diasDaLista) {
  dia.addEventListener('mouseover', zommAplica);
  dia.addEventListener('mouseout', zommDesaplica);
  dia.addEventListener('click', addTarefa);
}

function zommAplica(event) {
  event.target.style.fontSize = '30px';
};

function zommDesaplica(event) {
  event.target.style.fontSize = '20px';
};

adicionaUmaTarefa('cozinhar');

function adicionaUmaTarefa(tarefa) {
  let tagTarefa = criaTeg('span');
  tagTarefa.innerText = tarefa;
  divTarefas[0].appendChild(tagTarefa);
}

adicionaLegenda('red');
function adicionaLegenda(cor) {
  let task = criaTeg('div');
  task.className = 'task';
  task.style.backgroundColor = cor;
  divTarefas[0].appendChild(task);
}


let tarefas = document.querySelectorAll('.task')

for (let tarefa of tarefas) {
  tarefa.addEventListener('click', selecionarTarefa);

}

function selecionarTarefa(event) {
  if (event.target.className === 'task selected') {
    event.target.className = 'task';

  } else {
    event.target.className = 'task selected';
  }
};

function addTarefa(event) {
  event.target.style.backgroundColor = document.querySelectorAll('.selected')[0].style.backgroundColor;
}

let listCompromisso = document.getElementsByClassName('input-container');

let compromissoLi = listCompromisso[0].appendChild(criaTeg('ul'));

function copromisso() {
  if (textBox.value === '' ) {
    alert('Insira uma tarefa valida!');
  }else{
    let tagCompromisso = criaTeg('li');
    tagCompromisso.innerText = textBox.value;
    tagCompromisso.style.paddingTop = '10px' ;
    compromissoLi.appendChild(tagCompromisso);
    textBox.value = '';
  }
  
}

let botao = document.getElementById('btn-add');
let textBox = document.getElementById('task-input');

botao.addEventListener('click', copromisso)