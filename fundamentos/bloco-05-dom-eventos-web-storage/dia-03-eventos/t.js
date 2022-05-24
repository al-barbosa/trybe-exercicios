window.onload = createUl;

let days = document.getElementById('days');
let buttonsContainer = document.getElementsByClassName('buttons-container');

function createUl() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let li  = document.createElement('li');
    li.classList.add('day');
    li.innerText = dezDaysList[i];
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      li.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 25 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
      li.classList.add('day-friday');
    }
    days.appendChild(li);
  }
}

let sextaF = document.getElementsByClassName('day-friday');


console.log(sextaF)