const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function addClasse (envento) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  envento.target.classList.add('tech');
  input.value = ''
};

firstLi.addEventListener('click', addClasse);
secondLi.addEventListener('click', addClasse);
thirdLi.addEventListener('click', addClasse);



input.addEventListener('input', function (event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});



myWebpage.addEventListener('dblclick', () => {
  window.location.replace('http://www.stackoverflow.com')
});



myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});