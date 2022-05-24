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


let buttonsContainer = document.getElementsByClassName('buttons-container');

function createUl() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  let days = document.getElementById('days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let li  = document.createElement('li');
    li.classList.add('day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      li.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 25 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
      li.classList.add('day-friday');
    }
    li.innerText = dezDaysList[i];
    days.appendChild(li);
  }
}

createUl()

function feriado(feriado){
  let btn = document.createElement('button');
  btn.id = 'btn-holiday';
  btn.innerText = feriado;
  buttonsContainer[0].appendChild(btn);
}

feriado('Feriado');

let btn = document.getElementById('btn-holiday');


function color(event) {
  event.target.style.backgroundColor = 'red';
}

function colorBack(event) {
  event.target.style.backgroundColor = 'rgb(238,238,238)';
}

btn.addEventListener('mousedown', color);
btn.addEventListener('mouseup', colorBack);

function sextaFeira(sexta){
  let btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.innerText = sexta;
  buttonsContainer[0].appendChild(btn);
}

sextaFeira('Sexta-feira');

let btnFriday = document.getElementById('btn-friday');

btnFriday.addEventListener('mousedown', () => {
  let sexta = document.getElementsByClassName('day-friday');
  for(let i in sexta){
    sexta[i].innerText = 'Sextou'
  }
})
btnFriday.addEventListener('mouseup', () => {
  let sextarray = [ 4, 11, 18, 25 ];
  let sexta = document.getElementsByClassName('day-friday');
  for(let i in sexta){
    sexta[i].innerText = sextarray[i]
  }
})

function mouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  })
}

function mouseDown() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  })
}

mouseOver()
mouseDown()

let myTasks = document.getElementsByClassName('my-tasks')

function tarefa(tarefa) {
  let nTarefa = document.createElement('span');
  nTarefa.innerText = tarefa;
  myTasks[0].appendChild(nTarefa)
}

tarefa("Cozinhar")

function corTarefa(cor) {
  let nCor = document.createElement('div');
  nCor.classList.add('task');
  nCor.style.backgroundColor = cor;
  myTasks[0].appendChild(nCor);
}

corTarefa('gray');


let task = document.getElementsByClassName('task')

for (let i in task){
  task[i].addEventListener('click', (event) => {
    if (document.querySelector('task-selected') === null){
      event.target.className = 'task-selected';
    } else {
      event.target.className = 'task-selected';
    }
  })
}