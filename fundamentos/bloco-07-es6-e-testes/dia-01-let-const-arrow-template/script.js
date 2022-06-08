const btn = document.getElementById('btn');
const counter = document.getElementById('counter');

let c = 0;

btn.addEventListener('click', () => {
  c += 1;
  counter.innerText = c + 1;
})